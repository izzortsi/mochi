export type MessageHandler = (msg: { ok: boolean; result?: unknown; error?: string; requestId: string }) => void;
export type StatusHandler = (status: "connecting" | "connected" | "disconnected") => void;

export class WsClient {
  private ws: WebSocket | null = null;
  private url: string;
  private onMessage: MessageHandler;
  private onStatus: StatusHandler;
  private reconnectTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(url: string, onMessage: MessageHandler, onStatus: StatusHandler) {
    this.url = url;
    this.onMessage = onMessage;
    this.onStatus = onStatus;
  }

  connect(): void {
    this.onStatus("connecting");
    this.ws = new WebSocket(this.url);

    this.ws.onopen = () => {
      this.onStatus("connected");
      if (this.reconnectTimer) {
        clearTimeout(this.reconnectTimer);
        this.reconnectTimer = null;
      }
    };

    this.ws.onmessage = (ev) => {
      try {
        const msg = JSON.parse(ev.data as string);
        this.onMessage(msg);
      } catch {
        this.onMessage({ ok: false, error: String(ev.data), requestId: "" });
      }
    };

    this.ws.onclose = () => {
      this.onStatus("disconnected");
      this.scheduleReconnect();
    };

    this.ws.onerror = () => {
      this.ws?.close();
    };
  }

  send(text: string): void {
    if (this.ws?.readyState === WebSocket.OPEN) {
      this.ws.send(text);
    }
  }

  disconnect(): void {
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    this.ws?.close();
    this.ws = null;
  }

  private scheduleReconnect(): void {
    if (!this.reconnectTimer) {
      this.reconnectTimer = setTimeout(() => {
        this.reconnectTimer = null;
        this.connect();
      }, 2000);
    }
  }
}

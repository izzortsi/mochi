"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, RefreshCw, Upload } from "lucide-react";
import {
  loadConfig,
  saveConfig,
  modelsForProvider,
  defaultModelForProvider,
} from "@/lib/settings";
import { api } from "@/lib/api";
import type { LlmConfig, LlmProvider } from "@/lib/types";

interface Props { onClose: () => void; }

export function Settings({ onClose }: Props) {
  const [config, setConfig] = useState<LlmConfig>(loadConfig());
  const [refreshing, setRefreshing] = useState(false);
  const [refreshMsg, setRefreshMsg] = useState<{ kind: "ok" | "err"; text: string } | null>(null);
  const tokenFileRef = useRef<HTMLInputElement | null>(null);
  // Render the modal under document.body via portal. The desktop
  // <Header> uses `backdrop-blur` which becomes a containing block
  // for `position: fixed` descendants — without escaping that, the
  // modal's "fixed inset-0" is the header's box, not the viewport,
  // and 100vh resolves to ~60px (header height). Mobile didn't hit
  // this because the menu collapses before Settings opens.
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const submit = () => { saveConfig(config); onClose(); };

  const onProviderChange = (provider: LlmProvider) => {
    const models = modelsForProvider(provider);
    const model = models.some(m => m.id === config.model)
      ? config.model
      : defaultModelForProvider(provider);
    setConfig({ ...config, provider, model });
  };

  // Reseed tokens.json from the SP_OAUTH_TOKENS_JSON env var. Kept as
  // a fallback for deployments where the user prefers env var workflow.
  const refreshOauthFromEnv = async () => {
    setRefreshing(true);
    setRefreshMsg(null);
    try {
      await api.refreshOauth();
      setRefreshMsg({ kind: "ok", text: "Tokens refreshed from env var." });
    } catch (e) {
      setRefreshMsg({
        kind: "err",
        text: e instanceof Error ? e.message : String(e),
      });
    } finally {
      setRefreshing(false);
    }
  };

  // Primary path: pick the local tokens.json that `anthropic-oauth auth`
  // wrote and upload it directly. No env vars, no Render shell. The
  // file never leaves the request — it lands on the disk path the
  // OAuthManager already reads from.
  const handleTokenFile = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const file = files[0];
    setRefreshing(true);
    setRefreshMsg(null);
    try {
      await api.uploadOauthTokens(file);
      setRefreshMsg({ kind: "ok", text: `Installed tokens from ${file.name}.` });
    } catch (e) {
      setRefreshMsg({
        kind: "err",
        text: e instanceof Error ? e.message : String(e),
      });
    } finally {
      setRefreshing(false);
      // Reset so picking the same file twice still triggers onChange.
      if (tokenFileRef.current) tokenFileRef.current.value = "";
    }
  };

  const models = modelsForProvider(config.provider);

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      {/* Cap the modal at 90% of the viewport height. Header and footer
       * stay pinned; only the form body scrolls when the content grows
       * (e.g. provider help + refresh button add ~120px to the box). */}
      <div
        // Inline maxHeight as an extra guard — Tailwind's JIT cache
        // sometimes misses freshly-edited arbitrary values until a dev
        // restart, and 100% of the body shouldn't render an unscrollable
        // modal in the meantime.
        className="bg-[#0c0c0c] border border-[#2a2a2a] rounded-xl w-full max-w-sm flex flex-col overflow-hidden"
        style={{ maxHeight: "calc(100vh - 2rem)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#1a1a1a] flex-shrink-0">
          <h2 className="font-display text-xl">LLM Settings</h2>
          <button onClick={onClose} aria-label="Close settings">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto px-6 py-4">
          <label className="block mb-3">
            <span className="text-sm opacity-70">Provider</span>
            <select
              value={config.provider}
              onChange={(e) => onProviderChange(e.target.value as LlmProvider)}
              className="mt-1 w-full bg-[#000000] border border-[#2a2a2a] rounded px-3 py-2"
            >
              <option value="anthropic-oauth">Anthropic (Claude Pro/Max OAuth)</option>
              <option value="zai">z.ai (API key)</option>
            </select>
          </label>
          {config.provider === "zai" && (
            <label className="block mb-3">
              <span className="text-sm opacity-70">z.ai API key</span>
              <input
                type="password"
                value={config.apiKey}
                onChange={(e) => setConfig({ ...config, apiKey: e.target.value })}
                className="mt-1 w-full bg-[#000000] border border-[#2a2a2a] rounded px-3 py-2 font-mono text-sm"
              />
            </label>
          )}
          {config.provider === "anthropic-oauth" && (
            <div className="mb-3">
              <p className="text-xs opacity-60 leading-relaxed mb-2">
                Tokens live server-side. To re-authenticate, run{" "}
                <code className="font-mono text-[#f5f0e8]">anthropic-oauth auth</code>{" "}
                locally and upload the resulting{" "}
                <code className="font-mono text-[#f5f0e8]">tokens.json</code> below.
              </p>
              <input
                ref={tokenFileRef}
                type="file"
                accept="application/json,.json"
                hidden
                onChange={(e) => handleTokenFile(e.target.files)}
              />
              <button
                onClick={() => tokenFileRef.current?.click()}
                disabled={refreshing}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded border border-[#2a2a2a] hover:border-[#404040] text-xs uppercase tracking-wider font-mono disabled:opacity-50"
              >
                <Upload className="w-3.5 h-3.5" />
                {refreshing ? "installing…" : "upload tokens.json"}
              </button>
              <button
                onClick={refreshOauthFromEnv}
                disabled={refreshing}
                className="w-full mt-1.5 flex items-center justify-center gap-2 px-3 py-1.5 text-[10px] uppercase tracking-wider font-mono opacity-50 hover:opacity-100 disabled:opacity-30"
                title="Reseed from SP_OAUTH_TOKENS_JSON env var"
              >
                <RefreshCw className={`w-3 h-3 ${refreshing ? "animate-spin" : ""}`} />
                or reload from env var
              </button>
              {refreshMsg && (
                <p
                  className={
                    "text-[11px] font-mono mt-2 " +
                    (refreshMsg.kind === "ok" ? "text-emerald-400" : "text-red-400")
                  }
                >
                  {refreshMsg.text}
                </p>
              )}
            </div>
          )}
          <label className="block">
            <span className="text-sm opacity-70">Model</span>
            <select
              value={config.model}
              onChange={(e) => setConfig({ ...config, model: e.target.value })}
              className="mt-1 w-full bg-[#000000] border border-[#2a2a2a] rounded px-3 py-2"
            >
              {models.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="px-6 py-4 border-t border-[#1a1a1a] flex-shrink-0">
          <button
            onClick={submit}
            className="w-full bg-phase1 hover:bg-phase2 rounded px-3 py-2 font-semibold transition-colors"
          >
            Save
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

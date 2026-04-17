import net from "node:net";
import { spawn } from "node:child_process";
import path from "node:path";
import process from "node:process";

function isPortFree(port, host = "127.0.0.1") {
  return new Promise((resolve) => {
    const server = net.createServer();

    server.once("error", () => resolve(false));
    server.once("listening", () => server.close(() => resolve(true)));

    // Avoid keeping the process alive on weird edge cases.
    server.unref();

    server.listen(port, host);
  });
}

async function findFreePort(startPort, maxAttempts = 20, host = "127.0.0.1") {
  for (let i = 0; i <= maxAttempts; i++) {
    const port = startPort + i;
    // eslint-disable-next-line no-await-in-loop
    if (await isPortFree(port, host)) return port;
  }
  throw new Error(`No free port found in range ${startPort}-${startPort + maxAttempts}`);
}

async function main() {
  const startPortRaw = process.env.PORT ?? "3000";
  const startPort = Number.parseInt(String(startPortRaw), 10);
  if (!Number.isFinite(startPort) || startPort <= 0) {
    throw new Error(`Invalid PORT: ${startPortRaw}`);
  }

  const host = process.env.HOST ?? "127.0.0.1";
  const port = await findFreePort(startPort, 20, host);

  const isWin = process.platform === "win32";
  const nextBin = path.join(
    process.cwd(),
    "node_modules",
    ".bin",
    isWin ? "next.cmd" : "next",
  );

  if (port !== startPort) {
    console.log(`[study-plan] Port ${startPort} busy; using ${port}`);
  } else {
    console.log(`[study-plan] Using port ${port}`);
  }

  const child = spawn(nextBin, ["dev", "-p", String(port)], {
    stdio: "inherit",
    env: { ...process.env, PORT: String(port), HOST: host },
  });

  child.on("exit", (code, signal) => {
    if (signal) process.kill(process.pid, signal);
    process.exit(code ?? 0);
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

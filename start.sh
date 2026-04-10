#!/bin/bash
# Start study-plan: CL backend + Next.js frontend.
# Usage: ./start.sh [backend-port] [web-port]

BACKEND_PORT=${1:-4000}
WEB_PORT=${2:-3000}

DIR="$(cd "$(dirname "$0")" && pwd)"

cleanup() {
  echo ""
  echo "[start] Shutting down..."
  kill $BACKEND_PID $WEB_PID 2>/dev/null
  wait $BACKEND_PID $WEB_PID 2>/dev/null
  echo "[start] Done."
  exit 0
}
trap cleanup INT TERM

echo "[start] Starting CL backend on port $BACKEND_PORT..."
cd "$DIR/backend"
sbcl --load run.lisp &
BACKEND_PID=$!

echo "[start] Waiting for backend..."
for i in $(seq 1 30); do
  if nc -z localhost $BACKEND_PORT 2>/dev/null || ss -tln 2>/dev/null | grep -q ":$BACKEND_PORT "; then
    echo "[start] Backend ready."
    break
  fi
  sleep 1
done

echo "[start] Starting frontend on port $WEB_PORT..."
cd "$DIR/frontend"
npx next dev -p $WEB_PORT &
WEB_PID=$!

echo ""
echo "============================================"
echo "  study-plan running"
echo "  Web UI:  http://localhost:$WEB_PORT"
echo "  API:     http://localhost:$BACKEND_PORT/api"
echo "  WS:      ws://localhost:$BACKEND_PORT/ws"
echo "  Ctrl+C to stop"
echo "============================================"
echo ""

wait

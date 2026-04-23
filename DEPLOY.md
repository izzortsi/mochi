# Deploying to Render

The repo ships a `render.yaml` Blueprint that provisions both services and
the persistent Disk. Steps below cover the one-time setup that the
Blueprint can't do for you (cross-service URL wiring, OAuth token seed,
optional initial-data load).

## 1. Apply the Blueprint

In Render: **Blueprints → New Blueprint Instance** → point at this repo →
let it create both services + the Disk.

After the first deploys complete you'll have two public URLs, e.g.
`https://mochi-backend.onrender.com` and `https://mochi-frontend.onrender.com`.

## 2. Wire the frontend to the backend

In the Render dashboard, on **mochi-frontend → Environment**:

- `BACKEND_URL` = `https://mochi-backend.onrender.com`
- `NEXT_PUBLIC_WS_URL` = `wss://mochi-backend.onrender.com/ws`

`NEXT_PUBLIC_WS_URL` is baked into the client bundle, so trigger a
**Manual Deploy → Clear build cache & deploy** on the frontend after
setting it the first time.

## 3. Seed the anthropic-oauth token

The backend needs a valid `tokens.json` on the Disk at
`/data/anthropic-oauth/tokens.json` (matches the `SP_OAUTH_TOKEN_PATH`
env var). You can't run the interactive `anthropic-oauth auth` flow on
Render, so do it locally and upload.

```bash
# locally
anthropic-oauth auth                       # opens browser, writes ~/.config/anthropic-oauth/tokens.json
cat ~/.config/anthropic-oauth/tokens.json  # copy the contents
```

Then on Render: **mochi-backend → Shell** and:

```bash
mkdir -p /data/anthropic-oauth
cat > /data/anthropic-oauth/tokens.json <<'EOF'
{ ...paste the file contents here... }
EOF
chmod 600 /data/anthropic-oauth/tokens.json
```

The OAuth library refreshes the access token in place, so as long as the
Disk persists, the token stays valid indefinitely.

## 4. Seed initial data (optional)

If you want the local JSON state to come along for the ride:

```bash
# locally, from the repo root
tar czf seed.tgz -C backend/data .

# on Render: mochi-backend → Shell
cd /data
# upload seed.tgz via the Render shell's drag-and-drop, then:
tar xzf seed.tgz
rm seed.tgz
```

Restart the backend service so it picks up the new files.

## 5. Verify

- `curl https://mochi-backend.onrender.com/api/progress` → JSON, not 404
- Open the frontend URL, the docked tutor's status dot should go green
  (WebSocket connected to backend).
- Try a tutor chat turn that calls a tool (e.g. "what's next-up?"); it
  should round-trip through the WS to the backend and back.

## Day-to-day

`autoDeploy: true` is on for both services, so pushes to the configured
branch redeploy automatically. State on `/data` survives every deploy.

Local development is unchanged: `./start.sh` still works, `BACKEND_URL`
and `NEXT_PUBLIC_WS_URL` fall back to localhost defaults when unset.

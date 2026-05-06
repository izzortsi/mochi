# Deploying to Render

The repo ships a `render.yaml` Blueprint that provisions both services and
the persistent Disk on the Starter plan (~$14/mo for both web services
plus ~$1.25/mo for the 5 GB disk). Bump to `standard` or `pro` later if
the OCR or LLM workload outgrows the 0.5 GB RAM cap.

Steps below cover the one-time setup that the Blueprint can't do for you
(cross-service URL wiring, OAuth token seed, optional initial-data load).

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
Render, so do it locally and propagate.

```bash
# locally
anthropic-oauth auth                       # opens browser, writes ~/.config/anthropic-oauth/tokens.json
cat ~/.config/anthropic-oauth/tokens.json  # copy the contents
```

Then in the Render dashboard, on **mochi-backend → Environment**, set
`SP_OAUTH_TOKENS_JSON` to that JSON. On the next backend startup the seed
hook (`app/seed.py::seed_oauth_tokens`) writes it to
`SP_OAUTH_TOKEN_PATH` IF the file is missing, so the deploy bootstraps
itself without a shell paste. Once the file exists on disk, the OAuth
library refreshes the access token in place — `SP_OAUTH_TOKENS_JSON` is
ignored on subsequent restarts so live refreshes are never clobbered.

The env var is the original token. If the disk is rebuilt later (tier
change, blueprint reapply, manual disk delete), the next backend start
re-seeds from the env var automatically.

If you'd rather paste once via the shell instead (no env var):

```bash
mkdir -p /data/anthropic-oauth
cat > /data/anthropic-oauth/tokens.json <<'EOF'
{ ...paste the file contents here... }
EOF
chmod 600 /data/anthropic-oauth/tokens.json
```

## 4. Seed / sync data (automatic)

The backend syncs git-tracked JSON state into `/data` at startup, split
into two policies (see `app/seed.py`):

- **Catalog** — `courses.json`, `aliases.json`. Overwritten on every
  startup so a `git push` of new course content reaches the live app.
- **Runtime state** — `progress.json`, `pet.json`, `chat.json`,
  `notes.json`, `tutor_notes.json`, `srs.json`. Seeded only when
  missing on disk; subsequent restarts leave them alone so studying on
  the deployed instance survives cold starts.

This means:

- Updating the course catalog: `commit + push + redeploy` is enough.
- Force-pushing local runtime state to Render (e.g. you studied
  locally and want to override the disk's version): in the Render
  shell, `rm /data/<name>.json` for the file you want to overwrite,
  then redeploy. The seed will lay down the bundled copy on the next
  start because the file is missing.
- OAuth tokens (`/data/anthropic-oauth/tokens.json`) and PDF/OCR caches
  are not in the seed list, so they persist across deploys untouched.

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

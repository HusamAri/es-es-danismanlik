#!/bin/bash
# SessionStart hook — Claude Code on the web için bağımlılıkları kurar.
# Böylece oturum başlar başlamaz `astro check`, `astro build`, prettier ve
# lexicon guard sorunsuz çalışır.
set -euo pipefail

# Yalnızca uzak ortamda (Claude Code on the web) çalış; yerel makinede atla.
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

cd "${CLAUDE_PROJECT_DIR:-.}"

# npm bağımlılıkları. `npm install` idempotenttir ve konteyner cache'inden
# faydalanır (ci'nin aksine mevcut node_modules'ü sıfırdan silmez).
echo "[session-start] Installing npm dependencies..."
npm install --no-audit --no-fund

echo "[session-start] Dependencies ready."

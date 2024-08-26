#!/usr/bin/env bash
echo "┏━━━ 🍳 Generating prisma client ━━━━━━━━━━━━━━━━━━━"
pnpm lerna run generate --stream

#!/usr/bin/env bash
echo "┏━━━ 🔄 Synchronizing prisma db ━━━━━━━━━━━━━━━━━━━"
pnpm lerna run synchronize --stream

#!/usr/bin/env bash
echo "┏━━━ 🔍 Analyzing packages $(pwd)  ━━━━━━━━━━━━━━━━━━━"
pnpm size-limit --why

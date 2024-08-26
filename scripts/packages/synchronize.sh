#!/usr/bin/env bash
echo "┏━━━ 🔄 Synchronizing prisma db $(pwd) ━━━━━━━━━━━━━━━━━━━"
npx prisma db push --schema=./src/prisma/schema.prisma --force-reset

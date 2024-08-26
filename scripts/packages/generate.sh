#!/usr/bin/env bash
echo "┏━━━ 🍳 Generating prisma client $(pwd) ━━━━━━━━━━━━━━━━━━━"
node --env-file .env ./src/prisma/gen.js && npx prisma generate --schema=./src/prisma/schema.prisma

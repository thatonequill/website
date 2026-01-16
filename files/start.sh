#!/bin/bash

# 1. Start Docker Containers (Detached)
echo "🐳 Starting Website and Database..."
# cd ..
docker-compose up -d

# 2. Wait briefly to ensure port 5433 is open
echo "⏳ Waiting for Database connection..."
sleep 3

# 3. Start Prisma Studio
# We manually override the URL to point to localhost:5433 instead of 'db:5432'
echo "🚀 Opening Prisma Studio..."
echo "👉 Website: http://localhost:3000"
echo "👉 Studio:  http://localhost:5555"
echo ""
echo "(Press Ctrl+C to stop Studio)"

npx prisma studio \
  --port 5555 \
  --browser none \
  --url "postgresql://postgres:password@localhost:5433/website?schema=public"

#!/bin/bash

# 1. Start Docker Containers (Detached)
echo "🐳 Starting Website and Database..."
# cd ..
docker-compose up -d

# 2. Wait briefly to ensure containers are up
echo "⏳ Waiting for App to start..."
sleep 3

# 3. Start Prisma Studio
# We manually override the URL to point to localhost:5433 instead of 'db:5432'
echo "🚀 Opening Prisma Studio..."
echo "👉 Website: http://localhost:3001"
echo "👉 Studio:  http://localhost:5555"
echo ""
echo "(Press Ctrl+C to stop Studio)"

npx prisma studio \
  --port 5555 \
  --browser none \
  --url "postgresql://postgres:postgres@127.0.0.1:54322/postgres?schema=jdr"

#!/bin/sh
set -ex

echo "--- Running db:push ---"
npm run db:push

echo "--- Running db:seed ---"
npm run db:seed

echo "--- Starting dev server ---"
npm run dev -- -p 3333

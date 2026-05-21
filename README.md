# Website

A Next.js project with Supabase local development environment.

## Prerequisites

- Docker with Compose plugin

## Getting Started

1. Copy the environment template:
   ```bash
   cp .env.local.example .env.local
   ```

2. Start the development stack:
   ```bash
   docker compose up
   ```

The first run will initialize all services automatically. The Next.js app will be available at http://localhost:3000.

## Port Usage

This project owns the following default ports. Running a second instance simultaneously is not supported.

| Service | URL |
|---|---|
| Next.js app | http://localhost:3000 |
| Supabase API (Kong) | http://127.0.0.1:54321 |
| Supabase DB | postgresql://postgres:postgres@127.0.0.1:54322/postgres |
| Supabase Studio | http://127.0.0.1:54323 |
| Supabase Inbucket | http://127.0.0.1:54324 |
| Supabase Auth | http://127.0.0.1:9999 |

## Database Management

Reset and re-push the Prisma schema:
```bash
docker compose run --rm web npx prisma db push
```

Seed the database with initial data:
```bash
docker compose run --rm web npm run db:seed
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
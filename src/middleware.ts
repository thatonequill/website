// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';

  const isBenchSubdomain = hostname.startsWith('bench.');

  if (isBenchSubdomain) {
    url.pathname = `/bench${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

// Optimize middleware performance by matching only page routes
export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. Static files (e.g., .svg, .png, .jpg, .jpeg, .gif, .webp)
     */
    '/((?!api|_next|_static|_next/image|.*\\.png$).*)',
  ],
};
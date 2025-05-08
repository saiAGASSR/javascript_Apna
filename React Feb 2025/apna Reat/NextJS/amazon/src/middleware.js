import { NextResponse } from 'next/server';

export const config = {
  matcher: ['/enter-user-id/:path*', '/chatbot/:path*'],
};


export function middleware(request) {
  console.log("in middleware");
  console.log("=== Middleware triggered ===");
  // console.log("request", request);
  console.log("request.url", request.url);  
  
  const auth = request.cookies.get('auth')?.value;
  console.log("auth", auth);
  

  if (!auth) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

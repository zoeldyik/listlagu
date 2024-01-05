import { NextResponse } from 'next/server'
 
export function middleware(request) {
  const isLogin = request.cookies.get('admin')

  if(request.nextUrl.pathname === '/login'){
    if(isLogin) return NextResponse.redirect(new URL('/', request.url))
    return NextResponse.next()
  }

  if(request.nextUrl.pathname === '/add-list'){
    if(!isLogin) return NextResponse.redirect(new URL('/login', request.url))
    return NextResponse.next()
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/login','/add-list'],
}
import { NextResponse, type NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get("auth_token")?.value
  const kyc = request.cookies.get("kyc_status")?.value // expected: pending|verified

  const isAuthRoute = pathname.startsWith("/auth/")
  const isKycRoute = pathname.startsWith("/kyc/")
  const isDashboardRoute = pathname.startsWith("/dashboard") || pathname.startsWith("/proposals") || pathname.startsWith("/treasury")

  if (!token && (isDashboardRoute || isKycRoute)) {
    const url = request.nextUrl.clone()
    url.pathname = "/auth/login"
    url.searchParams.set("next", pathname)
    return NextResponse.redirect(url)
  }

  if (token && !isAuthRoute) {
    if ((isDashboardRoute || pathname.startsWith("/proposals") || pathname.startsWith("/treasury")) && kyc !== "verified") {
      const url = request.nextUrl.clone()
      url.pathname = "/kyc/upload"
      return NextResponse.redirect(url)
    }
  }

  if (token && isAuthRoute) {
    const url = request.nextUrl.clone()
    url.pathname = kyc === "verified" ? "/dashboard" : "/kyc/upload"
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/auth/:path*",
    "/kyc/:path*",
    "/dashboard",
    "/proposals/:path*",
    "/treasury",
  ],
}





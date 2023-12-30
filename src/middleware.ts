import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: ["/"],
  afterAuth(auth, req) {
    /* 인증안됐고 퍼블릭 라우트도 아니면 요청 지점으로 돌려보냄 */
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url })
    }
    /* 로그인 됐는데, select-org기 아니라 다른 곳에 있을 경우 셀렉션으로 이동 */
    if (auth.userId && !auth.orgId && req.nextUrl.pathname !== 
      "/select-org") {
        const orgSelection = new URL("/select-org", req.url)
        return NextResponse.redirect(orgSelection);
      }
    /* 인증이 완료됐고, 홈화면이고 처음이면 selectOrg 
    or orgId가 있으면 그쪽으로 이동 */
    if (auth.userId && auth.isPublicRoute) {
      const path = auth?.orgId ? 
      `/organization/${auth.orgId}` : 
      "select-org";
      const orgSelection = new URL(path, req.url)
      return NextResponse.redirect(orgSelection);
    }
  }
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 
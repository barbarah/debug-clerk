import { authMiddleware } from "@clerk/nextjs";
 
import createMiddleware from "next-intl/middleware";
 
const intlMiddleware = createMiddleware({
  locales: ["en", "nl"],
 
  defaultLocale: "en",
});
 
export default authMiddleware({
  beforeAuth: (req) => {
    // Execute next-intl middleware before Clerk's auth middleware
    return intlMiddleware(req);
  },
  publicRoutes: ['/', '/(.*)'],
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
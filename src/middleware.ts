import { authMiddleware } from "@clerk/nextjs";
import {locales, localePrefix} from './navigation';
 
import createMiddleware from "next-intl/middleware";
 
const intlMiddleware = createMiddleware({
  localePrefix,
  locales,
  defaultLocale: 'en',
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
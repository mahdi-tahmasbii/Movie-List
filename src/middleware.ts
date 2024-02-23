import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "movies", "support"],
  ignoredRoutes: ["/no-auth-in-this-route"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/"],
};

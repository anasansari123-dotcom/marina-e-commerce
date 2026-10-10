/** All B2B wholesale routes require sign-in first. */
export function wholesalePathRequiresAuth(pathname: string): boolean {
  return pathname === "/wholesale" || pathname.startsWith("/wholesale/");
}

export function wholesaleLoginRedirectPath(pathname: string): { callbackUrl: string; view: "login" | "register" } {
  if (pathname === "/wholesale/complete" || pathname.startsWith("/wholesale/complete")) {
    return { callbackUrl: pathname, view: "login" };
  }
  const isRegister =
    pathname === "/wholesale/register" || pathname.startsWith("/wholesale/register/");
  return {
    callbackUrl: pathname,
    view: isRegister ? "register" : "login",
  };
}

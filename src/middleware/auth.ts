import { authClient } from "@/lib/auth-client";
import { redirect } from "@tanstack/react-router";
import { createMiddleware } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";

export const authMiddleware = createMiddleware({ type: "function" }).server(
  async ({ next }) => {
    const headers = getRequestHeaders() as HeadersInit;
    const { data: session } = await authClient.getSession({
      fetchOptions: { headers },
    });

    if (!session) {
      throw redirect({ to: "/signin" });
    }

    return await next({
      context: {
        user: {
          id: session.user.id,
          name: session.user.name,
          image: session.user.image,
        },
      },
    });
  }
);

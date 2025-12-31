import { getUser } from "@/server/auth-server";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/notes/")({
  component: RouteComponent,
  beforeLoad: async () => {
    const userId = await getUser();
    return {
      userId,
    };
  },
  loader: async ({ context }) => {
    if (!context.userId) {
      throw redirect({ to: `/signin` });
    }

    return {
      userId: context.userId,
    };
  },
});

function RouteComponent() {
  return <div>jkontol</div>;
}

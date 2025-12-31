import { authMiddleware } from '@/middleware/auth';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute("/notes/")({
  component: RouteComponent,
  server: {
    middleware: [authMiddleware],
  },
});

function RouteComponent() {
  return <div>Hello "/notes/"!</div>
}

import FeatureLandingPage from "@/components/shared/FeatureLandingPage";
import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { Server, Shield, Sparkles, Waves, Zap } from "lucide-react";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border px-4 py-1 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4" />
            Simple & Powerful Note App
          </span>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Write better notes with <span className="text-primary">Nowted</span>
          </h1>

          <p className="text-muted-foreground">
            Nowted helps you capture ideas, organize thoughts, and stay focused
            — without distractions.
          </p>

          <div className="flex justify-center gap-4">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">
              View Demo
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureLandingPage
            icon={<Zap />}
            title="Fast & Lightweight"
            desc="Instant load, smooth writing experience."
          />
          <FeatureLandingPage
            icon={<Waves />}
            title="Clean Interface"
            desc="Minimal design to keep you focused."
          />
          <FeatureLandingPage
            icon={<Shield />}
            title="Secure Notes"
            desc="Your notes are private and protected."
          />
          <FeatureLandingPage
            icon={<Server />}
            title="Cloud Ready"
            desc="Access your notes anywhere."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-muted/40">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Start writing smarter today
          </h2>
          <p className="mt-4 text-muted-foreground">
            Join Nowted and keep your ideas organized.
          </p>

          <Button size="lg" className="mt-6">
            Create Free Account
          </Button>
        </div>
      </section>
    </main>
  );
}

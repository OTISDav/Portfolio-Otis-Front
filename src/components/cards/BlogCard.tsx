// src/components/cards/BlogCard.tsx

import Card from "@/components/ui/Card";

export default function BlogCard() {
  return (
    <Card
      href="/blog"
      className="
        h-full
        bg-gradient-to-br
        from-zinc-900
        to-zinc-950
      "
    >
      <div className="flex h-full flex-col justify-between">
        <div>
          <p className="text-sm uppercase tracking-widest text-red-500">
            Articles
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            BLOG
          </h2>

          <p className="mt-4 text-zinc-400">
            Mes notes de dev, tutos et retours d&apos;expérience
            sur Django, React et mes projets.
          </p>
        </div>

        <div>
          <span className="font-medium text-red-500">
            Lire le blog →
          </span>
        </div>
      </div>
    </Card>
  );
}
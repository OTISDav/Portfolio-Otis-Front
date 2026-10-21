import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, getPosts, getTags } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles sur le développement web, Django, React et mes projets.",
};

type Props = {
  searchParams: Promise<{ page?: string; tag?: string; search?: string }>;
};

function href(params: Record<string, string | number | undefined>) {
  const qs = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) if (v) qs.set(k, String(v));
  const s = qs.toString();
  return s ? `/blog?${s}` : "/blog";
}

const pill = (active: boolean) =>
  `rounded-full border px-4 py-1.5 text-sm transition ${
    active
      ? "border-red-500 bg-red-500/10 text-red-500"
      : "border-zinc-700 text-zinc-400 hover:border-red-500 hover:text-red-500"
  }`;

export default async function BlogPage({ searchParams }: Props) {
  const { page, tag, search } = await searchParams;
  const current = Math.max(1, Number(page) || 1);

  const [data, tags] = await Promise.all([
    getPosts({ page: current, tag, search }),
    getTags(),
  ]);

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <p className="text-sm uppercase tracking-widest text-red-500">Articles</p>
      <h1 className="mt-2 text-4xl font-bold text-white">BLOG</h1>
      <p className="mt-3 text-zinc-400">
        Mes notes sur le dev, les projets et ce que j&apos;apprends.
      </p>

      <form action="/blog" className="mt-8 flex gap-3">
        {tag && <input type="hidden" name="tag" value={tag} />}
        <input
          name="search"
          defaultValue={search}
          placeholder="Rechercher un article…"
          className="w-full rounded-full border border-zinc-700 bg-zinc-900 px-5 py-2.5 text-white placeholder:text-zinc-500 focus:border-red-500 focus:outline-none"
        />
        <button className="rounded-full border border-red-500 px-6 py-2.5 text-red-500 transition hover:bg-red-500/10">
          Rechercher
        </button>
      </form>

      {tags.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          <Link href={href({ search })} className={pill(!tag)}>
            Tous
          </Link>
          {tags.map((t) => (
            <Link key={t.slug} href={href({ tag: t.slug, search })} className={pill(tag === t.slug)}>
              {t.name}
            </Link>
          ))}
        </div>
      )}

      {data.results.length === 0 ? (
        <p className="mt-16 text-zinc-500">Aucun article pour le moment.</p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {data.results.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 transition hover:border-red-500/50"
            >
              {post.cover && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={post.cover} alt="" className="aspect-video w-full object-cover" />
              )}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <span key={t.slug} className="text-xs uppercase tracking-wider text-red-500">
                      {t.name}
                    </span>
                  ))}
                </div>
                <h2 className="mt-3 text-2xl font-bold text-white group-hover:text-red-500">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-zinc-400">{post.excerpt}</p>
                <p className="mt-5 text-sm text-zinc-500">
                  {formatDate(post.created_at)} · {post.reading_time} min de lecture
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}

      {(data.previous || data.next) && (
        <nav className="mt-12 flex justify-between text-zinc-400">
          {data.previous ? (
            <Link className="hover:text-red-500" href={href({ page: current - 1, tag, search })}>
              ← Précédent
            </Link>
          ) : (
            <span />
          )}
          {data.next && (
            <Link className="hover:text-red-500" href={href({ page: current + 1, tag, search })}>
              Suivant →
            </Link>
          )}
        </nav>
      )}
    </main>
  );
}

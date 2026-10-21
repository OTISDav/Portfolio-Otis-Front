import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ShareButtons from "@/components/blog/ShareButtons";
import { formatDate, getPost, getSitemapEntries } from "@/lib/blog";

const SITE = "https://www.davidbotcholi.online";

export const revalidate = 600;
export const dynamicParams = true;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const entries = await getSitemapEntries();
  return entries.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Article introuvable" };

  const url = `${SITE}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.created_at,
      modifiedTime: post.updated_at,
      images: post.cover ? [post.cover] : undefined,
    },
    twitter: {
      card: post.cover ? "summary_large_image" : "summary",
      title: post.title,
      description: post.excerpt,
      images: post.cover ? [post.cover] : undefined,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const url = `${SITE}/blog/${post.slug}`;

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Link href="/blog" className="text-sm text-zinc-400 transition hover:text-red-500">
        ← Retour au blog
      </Link>

      <header className="mt-8">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <Link
              key={t.slug}
              href={`/blog?tag=${t.slug}`}
              className="rounded-full border border-red-500/40 px-3 py-1 text-xs uppercase tracking-wider text-red-500 transition hover:bg-red-500/10"
            >
              {t.name}
            </Link>
          ))}
        </div>

        <h1 className="mt-5 text-4xl font-bold leading-tight text-white md:text-5xl">
          {post.title}
        </h1>

        <p className="mt-4 text-lg text-zinc-400">{post.excerpt}</p>

        <p className="mt-5 text-sm text-zinc-500">
          Par David Botcholi · {formatDate(post.created_at)} · {post.reading_time} min de lecture
        </p>
      </header>

      {post.cover && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={post.cover}
          alt=""
          className="mt-8 w-full rounded-3xl border border-zinc-800 object-cover"
        />
      )}

      <article
        className="
          prose prose-invert prose-zinc mt-10 max-w-none
          prose-headings:font-bold prose-headings:text-white
          prose-p:leading-8 prose-p:text-zinc-300
          prose-a:text-red-500 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-white
          prose-blockquote:border-l-red-500 prose-blockquote:text-zinc-400
          prose-code:text-red-400
          prose-pre:rounded-2xl prose-pre:border prose-pre:border-zinc-800 prose-pre:bg-zinc-900
          prose-img:rounded-2xl
          [&_code::before]:content-none [&_code::after]:content-none
        "
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </article>

      <section className="mt-14 rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6">
        <p className="text-sm uppercase tracking-widest text-red-500">Partager</p>
        <h2 className="mt-2 text-xl font-bold text-white">Cet article vous a plu ?</h2>
        <p className="mb-5 mt-1 text-zinc-400">Partagez-le avec vos amis ou votre réseau.</p>
        <ShareButtons url={url} title={post.title} />
      </section>
    </main>
  );
}

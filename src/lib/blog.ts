const API = process.env.NEXT_PUBLIC_API_URL ?? "https://portfolioblog-d8kp.onrender.com/api";  
const REVALIDATE = 600; // secondes : limite aussi le nombre d'appels (throttling 100/h)

export type Tag = { name: string; slug: string };

export type PostSummary = {
  title: string;
  slug: string;
  excerpt: string;
  cover: string | null;
  tags: Tag[];
  created_at: string;
  reading_time: number;
};

export type PostDetail = PostSummary & { content: string; updated_at: string };

export type Paginated<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

async function request(path: string) {
  return fetch(`${API}${path}`, { next: { revalidate: REVALIDATE } });
}

export async function getPosts(
  params: { page?: number; tag?: string; search?: string } = {}
): Promise<Paginated<PostSummary>> {
  const qs = new URLSearchParams();
  if (params.page && params.page > 1) qs.set("page", String(params.page));
  if (params.tag) qs.set("tag", params.tag);
  if (params.search) qs.set("search", params.search);
  const query = qs.toString();

  const res = await request(`/posts/${query ? `?${query}` : ""}`);
  if (res.status === 404) return { count: 0, next: null, previous: null, results: [] };
  if (!res.ok) throw new Error(`API /posts/ : ${res.status}`);
  return res.json();
}

export async function getPost(slug: string): Promise<PostDetail | null> {
  const res = await request(`/posts/${encodeURIComponent(slug)}/`);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`API /posts/${slug}/ : ${res.status}`);
  return res.json();
}

export async function getTags(): Promise<Tag[]> {
  const res = await request("/tags/");
  if (!res.ok) return [];
  return res.json();
}

export async function getSitemapEntries(): Promise<{ slug: string; updated_at: string }[]> {
  try {
    const res = await request("/sitemap/");
    return res.ok ? res.json() : [];
  } catch {
    return []; // API indisponible pendant le build : on ne casse pas le déploiement
  }
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

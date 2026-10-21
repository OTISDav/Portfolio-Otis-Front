"use client";

import { useEffect, useState } from "react";

type Props = { url: string; title: string };

const btn =
  "rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:border-red-500 hover:text-red-500";

export default function ShareButtons({ url, title }: Props) {
  const [copied, setCopied] = useState(false);
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    setCanShare(typeof navigator !== "undefined" && "share" in navigator);
  }, []);

  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);

  const links = [
    { label: "WhatsApp", href: `https://wa.me/?text=${t}%20${u}` },
    { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
    { label: "X", href: `https://twitter.com/intent/tweet?text=${t}&url=${u}` },
    { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${u}` },
  ];

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copiez le lien :", url);
    }
  }

  async function nativeShare() {
    try {
      await navigator.share({ title, url });
    } catch {
      /* partage annulé */
    }
  }

  return (
    <div className="flex flex-wrap gap-3">
      {canShare && (
        <button onClick={nativeShare} className={btn}>
          Partager…
        </button>
      )}
      {links.map((l) => (
        <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className={btn}>
          {l.label}
        </a>
      ))}
      <button onClick={copyLink} className={btn}>
        {copied ? "Lien copié ✓" : "Copier le lien"}
      </button>
    </div>
  );
}

// src/components/layout/Header.tsx

import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3"
        >
          <span
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-red-600
              text-sm
              font-black
              text-white
              transition-transform
              duration-300
              group-hover:rotate-6
            "
          >
            O
          </span>

          <div className="leading-none">
            <p className="text-lg font-black tracking-tight text-white">
              OTISDAV
            </p>
{/* 
            <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-zinc-500">
              Digital Portfolio
            </p> */}
          </div>
        </Link>

        {/* Statut */}
        <div className="hidden items-center gap-3 sm:flex">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
          </span>

          <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
            Disponible for projects
          </span>
        </div>

        {/* Action */}
        <Link
          href="/contact"
          className="
            group
            flex
            items-center
            gap-3
            rounded-full
            border
            border-zinc-800
            bg-zinc-900/70
            px-4
            py-2.5
            text-sm
            font-medium
            text-zinc-200
            transition-all
            duration-300
            hover:border-red-500/50
            hover:bg-red-500
            hover:text-white
          "
        >
          <span>Discutons</span>

          {/* <span
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            ↗
          </span> */}
        </Link>

      </div>
    </header>
  );
}


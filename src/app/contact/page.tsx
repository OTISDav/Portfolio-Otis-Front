
import Link from "next/link";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { portfolio } from "@/data/portfolio";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">

        {/* Retour */}
        <Link
          href="/"
          className="
            inline-flex
            items-center
            gap-2
            text-sm
            text-zinc-400
            transition-colors
            hover:text-red-500
          "
        >
          ← Retour au portfolio
        </Link>

        {/* Header */}
        <header className="mt-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            Contact
          </p>

          <h1 className="mt-4 text-5xl font-extrabold tracking-tight md:text-7xl">
            Parlons de votre projet
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Vous avez une idée, un projet, une opportunité ou
            simplement envie d'échanger ? Choisissez le moyen
            de contact qui vous convient.
          </p>
        </header>

        {/* Moyens de contact */}
        <section className="mt-16 grid gap-5 md:grid-cols-2">

          {/* Email */}
          <a
            href={`mailto:${portfolio.contact.email}`}
            className="
              group
              rounded-3xl
              border
              border-zinc-800
              bg-zinc-900/50
              p-7
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-red-500/50
              hover:bg-zinc-900
            "
          >
            <div className="flex items-start justify-between">
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-zinc-950
                  text-red-500
                "
              >
                <FaEnvelope size={24} />
              </div>

              <span className="text-xl text-zinc-600 transition-colors group-hover:text-red-500">
                ↗
              </span>
            </div>

            <h2 className="mt-8 text-2xl font-bold">
              Email
            </h2>

            <p className="mt-2 break-all text-zinc-400">
              {portfolio.contact.email}
            </p>

            <p className="mt-6 font-medium text-red-500">
              Envoyer un email →
            </p>
          </a>

          {/* WhatsApp */}
          <a
            href={portfolio.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              rounded-3xl
              border
              border-zinc-800
              bg-zinc-900/50
              p-7
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-green-500/50
              hover:bg-zinc-900
            "
          >
            <div className="flex items-start justify-between">
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-zinc-950
                  text-green-500
                "
              >
                <FaWhatsapp size={26} />
              </div>

              <span className="text-xl text-zinc-600 transition-colors group-hover:text-green-500">
                ↗
              </span>
            </div>

            <h2 className="mt-8 text-2xl font-bold">
              WhatsApp
            </h2>

            <p className="mt-2 text-zinc-400">
              Contactez-moi directement sur WhatsApp.
            </p>

            <p className="mt-6 font-medium text-green-500">
              Ouvrir WhatsApp →
            </p>
          </a>

        </section>

        {/* Message */}
        <section
          className="
            mt-8
            rounded-3xl
            border
            border-red-500/20
            bg-red-950/10
            p-8
            md:p-10
          "
        >
          <p className="text-sm uppercase tracking-[0.25em] text-red-500">
            Disponible
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Une idée en tête ?
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
            N'hésitez pas à me contacter. Je suis ouvert aux
            discussions autour du développement web, de
            l'intelligence artificielle, des collaborations et
            de nouveaux projets.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`mailto:${portfolio.contact.email}`}
              className="
                rounded-full
                bg-red-600
                px-6
                py-3
                font-semibold
                text-white
                transition-colors
                hover:bg-red-500
              "
            >
              Envoyer un email
            </a>

            <a
              href={portfolio.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-full
                border
                border-zinc-700
                px-6
                py-3
                font-semibold
                text-zinc-200
                transition-colors
                hover:border-green-500
                hover:text-green-500
              "
            >
              WhatsApp
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}

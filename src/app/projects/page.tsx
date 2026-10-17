
 // src/app/projects/page.tsx

import Link from "next/link";

type Project = {
  name: string;
  category: string;
  status: string;
  description: string;
  technologies: string[];
  link: string | null;
  linkType: "website" | "github" | null;
};

const projects: Project[] = [
  {
    name: "Archi-Reflex",
    category: "Développement Backend · Projet client",
    status: "Projet livré",
    description:
      "Participation au développement du backend d'une plateforme web pour un client. Contribution à la logique applicative et aux fonctionnalités côté serveur dans le cadre d'un projet réel.",
    technologies: ["Python", "Django", "API REST"],
    link: "https://www.archi-reflex.com/",
    linkType: "website",
  },
  {
    name: "Photo Parfaite",
    category: "Backend · Traitement d'images",
    status: "Projet réalisé",
    description:
      "Développement d'une API permettant de téléverser plusieurs photos, de les traiter et de faciliter la sélection des images les plus adaptées grâce à un système de scoring.",
    technologies: [
      "Python",
      "Django REST Framework",
      "API REST",
      "Traitement d'images",
    ],
    link: "https://github.com/OTISDav/photo-parfaite-backend",
    linkType: "github",
  },
  {
    name: "ThesisFinder",
    category: "Application · Recherche académique",
    status: "Projet réalisé",
    description:
      "Conception d'une plateforme de recherche académique permettant de consulter des travaux universitaires grâce à une API backend et une application mobile.",
    technologies: [
      "Django REST Framework",
      "Flutter",
      "PostgreSQL",
    ],
    link: "https://github.com/OTISDav",
    linkType: "github",
  },
  {
    name: "KYC AI",
    category: "Backend · Intelligence artificielle",
    status: "En développement",
    description:
      "Développement d'une API de vérification de documents d'identité explorant l'OCR et la vision par ordinateur pour automatiser l'extraction et l'analyse d'informations.",
    technologies: ["Python", "Django", "OCR", "OpenCV"],
    link: null,
    linkType: null,
  },
  {
    name: "AyimolouMap",
    category: "Mobile · Géolocalisation",
    status: "Projet personnel",
    description:
      "Développement d'une application mobile associée à un backend pour exploiter des données géolocalisées, rechercher des points d'intérêt à proximité et intégrer une synthèse vocale en français.",
    technologies: [
      "Flutter",
      "Django",
      "PostgreSQL",
      "Cloudinary",
    ],
    link: "https://github.com/OTISDav",
    linkType: "github",
  },

{
  name: "ChainCacao",
  category: "Blockchain · AgriTech · Hackathon",
  status: "Projet de hackathon",
  description:
    "Conception d'une solution numérique de traçabilité de la filière cacao dans le cadre du Miabe Hackathon. Le projet explore l'utilisation de QR codes et de la blockchain pour améliorer la traçabilité et le suivi des produits.",
  technologies: [
    "Python",
    "Django",
    "PostgreSQL",
    "Polygon Amoy",
    "Cloudinary",
  ],
  link: "https://github.com/OTISDav",
  linkType: "github",
},

];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-red-500"
        >
          ← Retour au portfolio
        </Link>

        {/* En-tête */}
        <header className="mt-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            Portfolio
          </p>

          <h1 className="mt-4 text-5xl font-extrabold tracking-tight md:text-7xl">
            Mes projets<span className="text-red-500"></span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Découvrez mes réalisations en développement backend,
            applications web et mobiles, traitement d'images
            et solutions numériques.
          </p>
        </header>

        {/* Grille des projets */}
        <section
          aria-label="Liste de mes projets"
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <article
              key={project.name}
              className="group flex flex-col rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/50"
            >
              {/* Catégorie et statut */}
              <div className="flex flex-wrap items-start justify-between gap-3">
                <span className="text-xs font-medium uppercase tracking-wider text-red-400">
                  {project.category}
                </span>

                <span className="shrink-0 rounded-full border border-zinc-700 px-2.5 py-1 text-xs text-zinc-400">
                  {project.status}
                </span>
              </div>

              {/* Nom */}
              <h2 className="mt-6 text-2xl font-bold transition-colors group-hover:text-red-400">
                {project.name}
              </h2>

              {/* Description */}
              <p className="mt-4 flex-1 text-sm leading-7 text-zinc-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs text-zinc-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Lien du projet */}
              <div className="mt-8 border-t border-zinc-800 pt-5">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.linkType === "website" ? "Visiter le site" : "Voir le dépôt GitHub"} ${project.name} (nouvel onglet)`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-red-400"
                  >
                    {project.linkType === "website"
                      ? "Visiter le site"
                      : "Voir sur GitHub"}

                    <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span className="text-sm text-zinc-500">
                    Dépôt bientôt disponible
                  </span>
                )}
              </div>
            </article>
          ))}
        </section>

        {/* Contact */}
        <section className="mt-20 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            Une collaboration ?
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Construisons quelque chose ensemble.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
            Vous avez un projet web, backend ou une idée de solution
            numérique ? Je suis ouvert aux opportunités professionnelles
            et aux collaborations.
          </p>

          <a
            href="mailto:davidbotcholi2003@gmail.com"
            className="mt-8 inline-flex rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-500"
          >
            Me contacter
          </a>
        </section>
      </div>
    </main>
  );
}

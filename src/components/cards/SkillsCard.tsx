// src/components/cards/SkillsCard.tsx

import Card from "@/components/ui/Card";

const skills = [
  "Développement web & mobile",
  // "Intelligence artificielle",
  // "Bases de données",
];

export default function SkillsCard() {
  return (
    <Card
      href="/skills"
      className="
        h-full
        bg-gradient-to-br
        from-zinc-900
        to-zinc-950
      "
    >
      <div className="flex h-full flex-col justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-red-500">
            Expertise
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            MES COMPÉTENCES
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">
            Découvrez les domaines dans lesquels Otis
            développe ses compétences et réalise ses projets.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {skills.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="
                rounded-full
                border
                border-zinc-700
                bg-zinc-800/70
                px-3
                py-2
                text-xs
                font-medium
                text-zinc-300
                transition-colors
                group-hover:border-red-500
                group-hover:text-red-400
              "
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-2">
          <span className="font-medium text-red-500">
            Voir mes compétences →
          </span>
        </div>
      </div>
    </Card>
  );
}


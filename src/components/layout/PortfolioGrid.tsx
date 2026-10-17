// src/components/layout/PortfolioGrid.tsx

// import Card from "@/components/ui/Card";
import ProfileCard from "@/components/cards/ProfileCard";
import GithubCard from "@/components/cards/GithubCard";
import ProjectsCard from "../cards/ProjectCard";
import StackCard from "../cards/StackCard";
import SkillsCard from "../cards/SkillsCard";
import AboutCard from "../cards/AboutCard";
import ContactCard from "../cards/ContactCard";
import PhotoCard from "../cards/PhotoCard";
import SocialCard from "../cards/SocialCard";
import ExperienceCard from "../cards/ExperienceCard";
import EducationCard from "../cards/EducationCard";

export default function PortfolioGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid auto-rows-[250px] gap-4 lg:grid-cols-12">
        {/* Profil */}
        <div className="lg:col-span-3 lg:row-span-2">
          <ProfileCard />
        </div>

        {/* Mes projets */}
        <div className="lg:col-span-3">
          <ProjectsCard />
        </div>

        {/* GitHub */}
        <div className="lg:col-span-3">
          <GithubCard />
        </div>

        {/* Social */}
        <div className="lg:col-span-3">
          <SocialCard />
        </div>

        {/* Stack */}
        <div className="lg:col-span-3">
          <StackCard />
        </div>

        {/* Compétences */}
        <div className="lg:col-span-6">
          <SkillsCard />
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <ContactCard />
        </div>

        {/* Expérience */}
        <div className="lg:col-span-3">
          <ExperienceCard />
        </div>

        {/* Formation */}
        <div className="lg:col-span-3">
          <EducationCard />
        </div>

        {/* À propos */}
        {/* <div className="lg:col-span-3">
          <AboutCard />
        </div> */}

        {/* Photo */}
        <div className="lg:col-span-3">
          <PhotoCard />
        </div>
      </div>
    </section>
  );
}


import CRCI2NA from "@/assets/images/crcina-removebg.png";
import Danish from "@/assets/images/danish-cancer-society-logo-vector-removebg-preview.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import { useState } from "react";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
const portfolioProjects = [
  {
    company: "CRCI²NA",
    year: "Mars - Septembre 2024",
    title: "Stage de bioinformatique",
    results: [
      { title: "Mise en place en autonomie d'une pipeline Python" },
      { title: "Utilisations de librairies courantes : Pandas, Numpy, Matplotlib" },
      { title: "Création d'un outil d'analyse différentielle accessible à tous" },
    ],
    link: "https://crci2na.univ-nantes.fr/en/research/team-2",
    image: CRCI2NA,
  },
  {
    company: "Danish Cancer Society",
    year: "Mars - Juin 2023",
    title: "Stage de bioinformatique - Contribution au projet MAVISp",
    results: [
      { title: "Optimisation de pipelines Python" },
      { title: "Utilisation d'aplications de dynamique moléculaire" },
      { title: "Gestion de versions avec Git" },
    ],
    link: "https://www.biorxiv.org/content/10.1101/2022.10.22.513328v5",
    image: "",
  },
];

export const ProjectsSection = () => {

  return (
    <section id="projects" className="pb-16 lg:py-24">
    <div className="container">
      <SectionHeader eyebrow="Mes expériences " title="Accroissement de mes compétences auprès de professionnels" 
      description="Grâce à mes divers stages, j'ai développé mon savoir-faire sur plusieurs sujets." />

      <div className="mt-10 md:mt-20 flex flex-col gap-20">

          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style = {{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
              

                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2
                 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result) => (
                    <li className="flex gap-2 text-sm text-white/50 md:text-base">
                      <CheckCircleIcon className="size-5 md:size-6"/>
                    <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
                <a href={project.link}>
                  <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold
                   inline-flex items-center justify-center gap-2 mt-8">
                    <span>En savoir plus</span>
                    <ArrowUpRightIcon className="size-4"/>
                    </button>
                </a>
                </div>
                <div className="relative flex justify-center">
                {project.image && <Image src={project.image} alt={project.title}
                className="mt-8 -mb-4 mx-auto md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-full lg:max-w-none"/>}
                </div>
              </div>
              </Card>
          ))}
        </div>
      </div>
      </section>
  );
};

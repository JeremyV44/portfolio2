import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import grainImage from "@/assets/images/grain.jpg";
import { Card }from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Projet Stationnement Nantes",
    position: "Programme en Shell et en Python",
    text: "Cet outil permet de trouver une place de stationnement en fonction des parkings les plus proches, indiquant le tarif selon la durée. Pour cela, le programme télécharge les données de la ville de Nantes afin d'avoir les informations les plus récentes.",
    avatar: memojiAvatar1,
  },
  {
    name: "Outil d'analyse différentielle",
    position: "Programme en Python",
text: "Cet outil permet, à partir d'une matrice de comptage, de réaliser une analyse différentielle entre deux groupes de données. De nombreux résultats sous forme graphique sont mis à disposition. De plus, l'outil est accessible à tous grâce à une interface graphique.",
    avatar: memojiAvatar2,
  },
  {
    name: "Outil d'anonymisation de données",
    position: "Programme en C++ et en Python",
    text: "Cet outil permet d'anonymiser des données sensibles, en modifant les valeurs initiales, tout en conservant les tendances et les relations entre les données. Pour cela, un algorithme de k-anonymat est utilisé.",
    avatar: memojiAvatar3,
  },
  {
    name: "Premier pas en machine learning",
    position: "Programme en Python",
    text: "Ce programme utilise un jeu de données, portant sur divers maladies. Le but étant de le nettoyer, de le préparer pour l'entraînement d'un modèle de machine learning. Enfin, le modèle est entraîné et testé pour prédire la maladie d'un patient. Pour cela, différents algorithmes sont utilisés.",
    avatar: memojiAvatar4,
  },

];

export const TestimonialsSection = () => {
  return (
  <div className="py-16 lg:py-24">
    <div className="container">
    <SectionHeader eyebrow="Mes réalisations" title ="Mes compétences en pratique" 
    description="Durant mes expériences professionelles et mon parcours universitaire, j'ai développé des outils utiles et concret."/>

      <div className="mt-12 lg:mt-20 flex overflow-x-clip 
      [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
        <div className="flex gap-8 pr-2 flex-none animate-move-left
        [animation-duration:40s] hover:[animation-play-state:paused]">
          {[...new Array(2)].fill(0).map((_, index) => (
            <Fragment key={index}>
          {testimonials.map((testimonial) => (
            <Card 
            key={testimonial.name} className="max-w-xs md:max-w-md p-6 md:p-8 
            hover:-rotate-3 transition duration-300">
              <div>
          <div className="font-semibold">{testimonial.name}</div>
          <div className="text-sm text-white/40">{testimonial.position}</div>
          </div>
          <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
          </Card>

          ))}
          </Fragment>
  ))}
    </div>
    </div>
    </div>
  </div>
  );

};

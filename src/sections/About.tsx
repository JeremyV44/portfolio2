"use client";
import { useRef } from "react";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { CardHeader } from "@/components/CardHeader";
import {motion }  from "framer-motion";
import Image from "next/image";
import PythonIcon from "@/assets/images/python.svg";
import ReactIcon from "@/assets/icons/react.svg";
import PandasIcon from "@/assets/icons/pandas.svg";
import NumpyIcon from "@/assets/icons/numpy.svg";
import MatplotlibIcon from "@/assets/icons/matplotlib.svg";
import ScikitIcon from "@/assets/icons/learn.svg";
import PyTorchIcon from "@/assets/icons/pytorch.svg";
import CppIcon from "@/assets/icons/C.svg";
import JavaIcon from "@/assets/icons/java.svg";
import RIcon from "@/assets/icons/r.svg";
import ShellIcon from "@/assets/icons/bash.svg";
import PostgreIcon from "@/assets/icons/postgre.svg";
import GitIcon from "@/assets/icons/git.svg";
import MapsImage from "@/assets/images/montpellier.png";
import { ToolboxItems } from "@/components/ToolboxItems";


const toolboxItems = [
  {
    title: "Python",
    iconType: PythonIcon,
  },
  {
    title: "Pandas",
    iconType: PandasIcon,
  },
  {
    title: "Numpy",
    iconType: NumpyIcon,
  },
  {
    title: "Matplotlib",
    iconType: MatplotlibIcon,
  },
  {
    title: "scikit-learn",
    iconType: ScikitIcon,
  },
  {
    title: "PyTorch",
    iconType: PyTorchIcon,
  },

  {
    title: "C++",
    iconType: CppIcon,
  },
  {
    title: "Java",
    iconType: JavaIcon,
  },
  {
    title: "R",
    iconType: RIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Shell",
    iconType: ShellIcon,
  },
  {
    title: "PostgreSQL",
    iconType: PostgreIcon,
  },
  {
    title: "Git",
    iconType: GitIcon,
  },

]


const hobbies = [
  {
    title : "Littérature",
    emoji:"📚",
    left:"50%",
    top:"5%",
  },
  {
    title : "Escalade",
    emoji:"🧗",
    left:"10%",
    top:"35%",
  },
  {
    title : "Fitness",
    emoji:"🏋️",
    left:"35%",
    top:"40%",
  },
  {
    title : " Course à pied",
    emoji:"🏃",
    left:"70%",
    top:"45%",
  },
  {
    title : "Echecs",
    emoji:"♟️",
    left:"5%",
    top:"60%",
  },
  {
    title : "Diététique",
    emoji:"🍏",
    left:"45%",
    top:"70%",
  },

  {
    title : "Ecologie",
    emoji:"🌍",
    left:"10%",
    top:"5%",
  },
]


export const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <section id="about">
  <div className="py-20 lg:py-28">
    <div className="container">
    <SectionHeader eyebrow="A propos de moi" 
    title="Afin de mieux me connaître" 
    description="Explorez mes outils de programmation et mes centres d’intérêt"
    />
    <div className="mt-20 flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-8">

      <Card className="h-[320px]">
        <CardHeader 
        title="Ma toolbox" 
        description="Explorez les outils que j'utilise"
        className=""
        />
        <ToolboxItems items={toolboxItems} className="" 
        itemsWrapperClassName ="animate-move-left [animation-duration:50s]"/>
        <ToolboxItems items={toolboxItems}
                      className="mt-6" 
                      itemsWrapperClassName="animate-move-right [animation-duration:35s]"/>

      </Card>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">

      <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
        <CardHeader title="Mes loisirs" 
                description="Si je ne code pas, je pratique ces activités"
                    className="px-6 pt-6"/>
        <div className="relative flex-1" ref= {constraintRef}>
          {hobbies.map((hobbies) => ( 
            <motion.div 
             
              key={hobbies.title} 
              className="inline-flex items-center gap-2 px-6 
              bg-gradient-to-r from-emerald-300 to-sky-400 
              rounded-full py-1.5 absolute"
              style={{
                left: hobbies.left,
                top: hobbies.top,
              }}
              drag
              dragConstraints={constraintRef}
              >
              <span className="font-medium text-gray-950"> {hobbies.title} </span>
              <span>{hobbies.emoji}</span>

            </motion.div> 
              ))}
        </div>
      </Card >

      <Card className="h-[320px] p-0 md:col-span-2 lg:col-span-1">
      <Image src={MapsImage} alt="Map"
      className="h-full w-full object-cover" />
      </Card>
      </div>
    </div>

    </div>

  </div>
  </section>
  );
};

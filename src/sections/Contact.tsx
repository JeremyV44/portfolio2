'use client';
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import grainImage from "@/assets/images/grain.jpg"
import { useState } from "react";

export const ContactSection = () => {
  const [showContactInfo, setShowContactInfo] = useState(false);
  return (
    <section id="Contact">
  <div className="py-16 pt-12 lg:py-24 lg:pt-20">
    <div className="container">
      <div className="bg-gradient-to-t from-emerald-300 to-sky-400 text-gray-900
       py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
        <div className="absolute inset-0 opacity-5 -z-10" style= {{backgroundImage :`url(${grainImage.src})`}}>

        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center ">
          <div>
    <h2 className="font-serif text-2xl md:text-3xl">
       Collaborons ensemble ! </h2>
    <p className="text-sm md: text-base mt-2">
      Mon profil aura peut-être attiré votre curiosité. Si vous souhaitez obtenir plus d'informations, je suis joignable à tout moment ! </p>
      </div>
    <div>
    <button className="text-white bg-gray-900 inline-flex items-center
     px-6 h-12 rounded-xl gap-2 w-max border border-gray-900"
     onClick={() => setShowContactInfo(!showContactInfo)}>
      <span className="font-semibold">Contactez moi !</span>
      <ArrowUpRightIcon className="size-4" />
      </button>
      {showContactInfo && (
        <div className="mt-4 p-6 bg-gray-900 text-white rounded-xl">
          <p className="mb-2">
            <b>Email</b><br />
            vinhasjeremy@gmail.com</p>
          <p><b>Téléphone</b>  <br />
            06-42-46-08-41</p>
        </div>
      )}
      </div>
      </div>
      </div>
    </div>
  </div>
  </section>
  );
};

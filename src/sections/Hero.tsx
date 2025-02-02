import memojiImage from '@/assets/images/memoji-jerem.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import { HeroOrbit } from '@/components/HeroOrbit';
import SparkleIcon from '@/assets/icons/sparkle.svg';
export const HeroSection = () => {
  return (
    <section id="hero">
    <div className= "py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
  <div className="absolute inset-0 -z-30 opacity-5" 
    style={{ backgroundImage:`url(${grainImage.src})`,}}>

    </div>
    <div className="size-[620px] hero-ring"></div>
    <div className="size-[820px] hero-ring"></div>
    <div className="size-[1020px] hero-ring"></div>
    <div className="size-[1220px] hero-ring"></div>
    <HeroOrbit 
    size={430} 
    rotation={-14} 
    shouldOrbit 
    orbitDuration="30s"
    shouldSpin
    spinDuration="5s">
      <SparkleIcon className="size-8 text-emerald-300/25" />
    </HeroOrbit>
    <HeroOrbit 
    size={440} 
    rotation={79} 
    shouldOrbit
    orbitDuration ="32s"
    shouldSpin
    spinDuration="5s">
      <SparkleIcon className="size-5 text-emerald-300/25"  />
    </HeroOrbit>
    <HeroOrbit size={520} rotation={-41}shouldOrbit
      orbitDuration ="34s">
      <div className="size-2 bg-emerald-300/25 rounded-full" />
    </HeroOrbit>
    <HeroOrbit 
    size={530} 
    rotation={178} 
    shouldOrbit
    orbitDuration="36s"
    shouldSpin
    spinDuration="5s">
      <SparkleIcon className="size-10 text-emerald-300/25"  />
    </HeroOrbit>
    <HeroOrbit 
    size={550} 
    rotation={20} 
    shouldOrbit
    orbitDuration="38s"
    shouldSpin
    spinDuration="8s">
      <StarIcon className="size-12 text-emerald-300 "  />
    </HeroOrbit>
    <HeroOrbit 
    size={590}
    rotation={98}
    shouldOrbit
    orbitDuration ="40s"
    shouldSpin
    spinDuration="8s">
      <StarIcon className="size-8 text-emerald-300" />
    </HeroOrbit>
    <HeroOrbit size={650} rotation={-5} shouldOrbit
      orbitDuration ="42s">
      <div className="size-2 bg-emerald-300/25 rounded-full" />
    </HeroOrbit>
    <HeroOrbit 
    size={710} 
    rotation={140} 
    shouldOrbit
    orbitDuration ="44s"
    shouldSpin
    spinDuration="5s">
      <SparkleIcon className="size-14 text-emerald-300/25" />
    </HeroOrbit>  
    <HeroOrbit size={720} rotation={85} shouldOrbit
      orbitDuration ="46s">
      <div className="size-3 bg-emerald-300/25 rounded-full" />
    </HeroOrbit>
    <HeroOrbit 
    size={800} 
    rotation={-72} 
    shouldOrbit
   orbitDuration ="48s"
   shouldSpin
   spinDuration="8s">
      <StarIcon className="size-24 text-emerald-300" />
    </HeroOrbit>
    </div>
      <div className="container">
        <div className="flex flex-col items-center">
    <Image 
      src={memojiImage} 
      className ="size-[100px]" 
      alt ='Personne derrière son ordi.'
      />
      <div>
      <h2 className ="text-2xl font-semibold text-white/60">  Jérémy VINHAS</h2>
      </div>
    <div className ="bg-gray-950 border border-gray-800 px-5 py-1.5 inline-flex items-center gap-3 rounded-full">
      <div className ="bg-green-600 size-2.5 rounded-full relative">
      <div className="bg-green-600 absolute inset-0 rounded-full animate-ping-large"></div>
      </div>

      <div className="text-sm font-medium"> Actuellement disponible
      </div>
      </div>
      </div>
      <div className=' max-w-lg mx-auto'>
    <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
       <p>Bio-informaticien </p>
       <p>Développeur</p>
    </h1>
    <p className="mt-4 text-center text-white/60 md:text-lg">
      Passionné par mon domaine, je souhaite mettre mes compétences au profit d'un projet qui m'inspire.
      Découvrez-en plus sur mon parcours et mes réalisations.
    </p>
    </div>
    <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
      <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-10 rounded-xl">
        <a href="#projets"> <span className="font-semibold">Découvrez mes travaux</span></a>
        <ArrowDown className="size-4"/>
      </button>
      <button className="inline-flex items-center gap-2 border-white bg-white text-gray-900 h-10 px-6 rounded-xl">
        <span></span>
        <a href="#Contact"><span className="font">Contactez-moi !</span> </a>
      </button>
    </div>
  </div>
  </div>
  </section>
  );
};

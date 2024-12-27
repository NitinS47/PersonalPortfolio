import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { navItems } from "@/data";


export default function Home() {
  if(typeof window !== "undefined") {
  return (
    <main className="relative bg-yellow-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-0" />
<div className="max-w-7xl w-full">
      <ShootingStars/>
      <StarsBackground/>
        <FloatingNav navItems={navItems} />
        <Hero/>
        <Grid/>
        <RecentProjects/>
        <Experience/>
        <Clients/>
        <Footer/>
      </div>
    </main>
  );
}
}

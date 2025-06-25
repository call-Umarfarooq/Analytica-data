import About from "@/components/About";
import Contact from "@/components/Contact";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <Hero/>  
     <About/>
     <Feature/>
     <Contact/>
    </div>
  );
}

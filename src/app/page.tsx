'use client'
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Intro />
      <About />
      <Experience />
      <Work />
      <Contact />
    </>
  )
}

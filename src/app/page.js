"use client";
import About from "@/components/About";
import Contanct from "@/components/Contanct";
import Home from "@/components/Home";
import Project from "@/components/Project";
import Skills from "@/components/Skills";

export default function page() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Project />
      <Contanct />
    </>
  );
}

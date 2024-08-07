'use client'

import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

export default function Home() {

   return (
    <main className="bg-dark-green-mesh-gradient">
      <Navbar />
      <Hero />
      <Features />
    </main>
  );
}

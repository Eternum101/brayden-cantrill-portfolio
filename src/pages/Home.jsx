import React from "react";
import '../styles/Index.css';
import '../styles/Hero.css';
import '../styles/About.css';
import '../styles/Technical.css';
import '../styles/Portfolio.css';
import '../styles/Contact.css';
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Technical } from "../components/Technical";
import { Portfolio } from "../components/Portfolio";
import { Contact } from "../components/Contact";

export function Home() {
    return (
        <>
    <div className="layout">
      <Hero />
      <About />
      <Technical />
      <Portfolio />
      <Contact />
    </div>
        </>
    )
}
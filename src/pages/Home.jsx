import React from "react";
import '../styles/Index.css';
import '../styles/Hero.css';
import '../styles/About.css';
import '../styles/Technical.css';
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Technical } from "../components/Technical";

export function Home() {
    return (
        <>
    <div className="layout">
      <Hero />
      <About />
      <Technical />
    </div>
        </>
    )
}
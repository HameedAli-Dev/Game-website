"use client";
import React from "react";

import About from "./About";
import RoadmapSection from "./RoadmapSection";
import TeamSection from "./TeamSection";
import JoinUs from "../../components/JoinUs";
import SnapScroll from "../../components/SnapScrolling";

import "../../../assets/About/about.css";

function SectionAbout({ id, component: Component, className, ...rest }) {
  return (
    <div id={id} className={`section ${className ? className : ''}`}>
      <Component {...rest} />
    </div>
  );
}

export default function MainSection() {
  // useScrollSnap();
  return (
    <>
      <SectionAbout id="sectionAbout1" component={About} />
      <SectionAbout
        id="sectionAbout2"
        className="h-auto"
        component={TeamSection}
      />
      <SectionAbout id="sectionAbout3" className="w-full h-auto" component={RoadmapSection} />
      <SectionAbout id="sectionAbout4" component={JoinUs} />
      </>
  );
}

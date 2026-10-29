import React from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { GitHubSection } from './components/GitHubSection';
import { AnalyticsPanel } from './components/AnalyticsPanel';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { XRay } from './components/XRay';
import { marqueeSkills } from './data/portfolio';
function SkillsMarquee(){const items=[...marqueeSkills,...marqueeSkills,...marqueeSkills,...marqueeSkills];return <div className="overflow-hidden border-y border-primary/25 bg-card/50 backdrop-blur-md py-4 select-none"><div className="running-marquee-track items-center gap-10 pr-10">{items.map((skill,i)=><span key={`${skill}-${i}`} className="flex shrink-0 items-center gap-10 font-mono text-xs uppercase tracking-[0.25em] text-foreground/85 whitespace-nowrap">{skill}<span className="text-primary font-bold">✦</span></span>)}</div></div>}
export default function App(){return <><Nav/><main><Hero/><SkillsMarquee/><About/><Skills/><Education/><Projects/><GitHubSection/><AnalyticsPanel/><ResumeSection/><Contact/></main><Footer/><XRay/></>}

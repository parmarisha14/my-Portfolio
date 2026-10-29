import { useEffect, useState } from "react";
import { GraduationCap, Award, Github, Sparkles, FolderGit2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { profile } from "@/data/portfolio";
const ROLES = [
    "Full Stack Developer",
    "React & Node.js Builder",
    "BCA Final Year @ Naran Lala College",
];
function useTypedRole() {
    const [text, setText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    useEffect(() => {
        const currentRole = ROLES[roleIndex % ROLES.length] ?? "Full Stack Developer";
        let timer;
        if (!isDeleting && text === currentRole) {
            timer = window.setTimeout(() => setIsDeleting(true), 2000);
        }
        else if (isDeleting && text === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % ROLES.length);
            timer = window.setTimeout(() => { }, 250);
        }
        else {
            const speed = isDeleting ? 30 : 60;
            timer = window.setTimeout(() => {
                setText(currentRole.slice(0, text.length + (isDeleting ? -1 : 1)));
            }, speed);
        }
        return () => window.clearTimeout(timer);
    }, [text, isDeleting, roleIndex]);
    return text || ROLES[0];
}
export function Hero() {
    const typed = useTypedRole();
    return (<section id="hero" data-xray-section="hero" className="grain relative flex min-h-[70vh] sm:min-h-[75vh] items-center">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img src={heroBg} alt="" width={1920} height={1088} className="h-full w-full object-cover opacity-50"/>
        <div className="hero-vignette absolute inset-0"/>
      </div>

      <div className="container-x relative z-10 flex flex-col justify-center pt-20 pb-8 sm:pt-24 sm:pb-10 max-w-3xl">
        <div>
          <div className="inline-flex items-center gap-2">
            <span className="pill !py-0.5 !px-3 text-[0.65rem]">
              <span className="size-1.5 rounded-full bg-primary animate-pulse-dot"/>
              Open to work
            </span>
            <div className="flex items-center gap-1 rounded-full border border-border/80 bg-card/60 px-2.5 py-0.5 font-mono text-[0.65rem] text-muted-foreground">
              <img src="/stickers/wave.png" alt="Waving" className="size-3.5 object-contain inline-block"/>
              <span>Hello!</span>
            </div>
          </div>

          <h1 className="font-display font-extrabold tracking-tight text-3xl sm:text-4xl lg:text-5xl mt-3.5 leading-tight">
            Parmar Isha{" "}
            <span className="grad-ember">Miteshkumar</span>
          </h1>

          <p className="mt-2.5 font-mono text-xs sm:text-sm text-muted-foreground">
            <span className="text-primary font-bold">$</span> {typed}
            <span className="animate-blink text-primary">▍</span>
          </p>

          <p className="mt-2 max-w-xl text-xs sm:text-sm leading-relaxed text-muted-foreground/90">
            {profile.intro}
          </p>

          {/* Compact Credential Highlights */}
          <div className="mt-4 flex flex-wrap gap-2">
            <div className="rounded-lg border border-primary/30 bg-card/60 px-3 py-1.5 backdrop-blur-sm flex items-center gap-1.5 font-mono text-xs text-primary font-bold">
              <Award className="size-3.5 text-primary"/>
              <span>CGPA 7.36</span>
              <span className="text-[0.65rem] text-muted-foreground font-normal">• Academic Merit</span>
            </div>
            <div className="rounded-lg border border-border/60 bg-card/60 px-3 py-1.5 backdrop-blur-sm flex items-center gap-1.5 font-mono text-xs text-foreground font-semibold">
              <GraduationCap className="size-3.5 text-primary"/>
              <span>BCA Final Year</span>
              <span className="text-[0.65rem] text-muted-foreground font-normal">• Naran Lala College</span>
            </div>
            
            <div className="rounded-lg border border-border/60 bg-card/60 px-3 py-1.5 backdrop-blur-sm flex items-center gap-1.5 font-mono text-xs text-foreground font-semibold">
              <FolderGit2 className="size-3.5 text-primary"/>
              <span>60+ Repos</span>
              <span className="text-[0.65rem] text-muted-foreground font-normal">• Active</span>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-ember !py-2.5 !px-5 text-xs sm:text-sm">
              View Projects
            </a>
            <a href="./resume.pdf" download="Isha-Parmar-Resume.pdf" className="btn-outline !py-2.5 !px-5 text-xs sm:text-sm">
              Download Resume
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="glass flex size-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-primary">
              <Github className="size-4"/>
            </a>
          </div>
        </div>
      </div>
    </section>);
}

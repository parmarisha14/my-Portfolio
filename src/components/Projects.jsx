import { ArrowUpRight, Code2, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { githubProjects, resumeProjects } from "@/data/portfolio";
function StackChips({ stack }) {
    return (<ul className="flex flex-wrap gap-2">
      {stack.map((tech) => (<li key={tech} className="rounded-full border border-border/80 bg-muted/50 px-2.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground">
          {tech}
        </li>))}
    </ul>);
}
function ProjectLinks({ project }) {
    if (!project.liveUrl && !project.repoUrl) {
        return <p className="font-mono text-[0.7rem] text-muted-foreground">Source available on request</p>;
    }
    return (<div className="flex gap-4">
      {project.liveUrl ? (<a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-mono text-xs text-primary transition-colors hover:text-ember-glow">
          Live demo <ArrowUpRight className="size-3.5"/>
        </a>) : null}
      {project.repoUrl ? (<a href={project.repoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-primary">
          <Code2 className="size-3.5"/> Code
        </a>) : null}
    </div>);
}
export function Projects() {
    return (<Section id="projects" index="04" eyebrow="Projects" title="Things I've built.">
      <div className="mb-10 flex items-center justify-between gap-6 border-b border-border/40 pb-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Featured Projects & Live Prototypes
          </p>
          <p className="mt-1 text-sm text-muted-foreground max-w-xl">
            Real implementations built during courses and academic training — focusing on responsive design, component architecture, and server-side CRUD.
          </p>
        </div>
        <img src="/stickers/laptop-focused.png" alt="Focused coding" className="hidden sm:block size-16 object-contain shrink-0 drop-shadow"/>
      </div>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        {resumeProjects.map((project, i) => (<Reveal key={project.title} delay={(i % 2) * 90} className="h-full">
            <article className="glass group flex h-full flex-col p-5 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60">
              <div className="mb-4 flex items-center justify-between">
                <span className="glass flex size-9 items-center justify-center rounded-lg text-primary">
                  <Sparkles className="size-4"/>
                </span>
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                  Resume project
                </span>
              </div>
              <h3 className="font-display text-xl font-bold">{project.title}</h3>
              <div className="mt-4">
                <StackChips stack={project.stack}/>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-6">
                <ProjectLinks project={project}/>
              </div>
            </article>
          </Reveal>))}
      </div>

      <Reveal>
        <p className="eyebrow mt-16 mb-6">More live builds — from GitHub</p>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {githubProjects.map((project, i) => (<Reveal key={project.title} delay={(i % 4) * 70} className="h-full">
            <article className="glass flex h-full flex-col p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60">
              <h3 className="text-sm font-semibold leading-snug">{project.title}</h3>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                  {project.stack.slice(0, 2).join(" · ")}
                </span>
                {project.liveUrl ? (<a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live`} className="text-primary transition-colors hover:text-ember-glow">
                    <ArrowUpRight className="size-4"/>
                  </a>) : null}
              </div>
            </article>
          </Reveal>))}
      </div>
    </Section>);
}

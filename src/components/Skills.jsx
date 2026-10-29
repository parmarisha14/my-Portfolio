import { useEffect, useRef, useState } from "react";
import { Database, Layers, Server, Terminal } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { skillGroups } from "@/data/portfolio";
const ICONS = { layers: Layers, server: Server, database: Database, terminal: Terminal };
function SkillBar({ name, level, active }) {
    return (<div>
      <div className="mb-2 flex items-baseline justify-between">
        <span className="text-sm font-medium">{name}</span>
        <span className="font-mono text-[0.7rem] text-muted-foreground">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-muted">
        <div className="h-full rounded-full bg-gradient-to-r from-primary to-ember-glow transition-[width] duration-1000 ease-out" style={{ width: active ? `${level}%` : "0%" }}/>
      </div>
    </div>);
}
function SkillGroupCard({ groupIndex, label, icon, skills, }) {
    const ref = useRef(null);
    const [active, setActive] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el || typeof IntersectionObserver === "undefined") {
            setActive(true);
            return;
        }
        const io = new IntersectionObserver((entries) => {
            if (entries[0]?.isIntersecting) {
                setActive(true);
                io.disconnect();
            }
        }, { threshold: 0.3 });
        io.observe(el);
        return () => io.disconnect();
    }, []);
    const Icon = ICONS[icon] ?? Layers;
    return (<Reveal delay={groupIndex * 80}>
      <div ref={ref} className="glass h-full p-6 transition-colors hover:border-primary/50">
        <div className="mb-6 flex items-center gap-3">
          <span className="glass flex size-10 items-center justify-center rounded-lg text-primary">
            <Icon className="size-4"/>
          </span>
          <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {label}
          </h3>
        </div>
        <div className="space-y-4">
          {skills.map((skill) => (<SkillBar key={skill.name} name={skill.name} level={skill.level} active={active}/>))}
        </div>
      </div>
    </Reveal>);
}
export function Skills() {
    const [filter, setFilter] = useState("All");
    const filteredGroups = filter === "All" ? skillGroups : skillGroups.filter((g) => g.label.toLowerCase() === filter.toLowerCase());
    return (<Section id="skills" index="02" eyebrow="Skills" title="What I work with.">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-6 border-b border-border/40 pb-6">
        <div className="flex items-center gap-4">
          <img src="/stickers/think.png" alt="Thinking" className="size-14 object-contain drop-shadow"/>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Core Tech Stack & Problem Solving
            </p>
            <p className="text-sm text-muted-foreground">
              From low-level data structures in C/C++ to modern reactive web apps in React & Node.
            </p>
          </div>
        </div>

        {/* Interactive category filters */}
        <div className="flex flex-wrap gap-2">
          {["All", "Frontend", "Backend", "Database", "Core CS"].map((category) => (<button key={category} type="button" onClick={() => setFilter(category)} className={"rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-[0.14em] transition-all " +
                (filter === category
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "border border-border/70 bg-card/40 text-muted-foreground hover:border-primary/50 hover:text-foreground")}>
              {category}
            </button>))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredGroups.map((group, i) => (<SkillGroupCard key={group.label} groupIndex={i} label={group.label} icon={group.icon} skills={group.skills}/>))}
      </div>
    </Section>);
}

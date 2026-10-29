import { GraduationCap, MapPin, Sparkles, Trophy } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { profile } from "@/data/portfolio";
const FACTS = [
    { icon: GraduationCap, label: "BCA — Third Year", detail: "Naran Lala College, Navsari" },
    { icon: Trophy, label: "CGPA 7.36", detail: "Consistent academic performance" },

    { icon: MapPin, label: "Navsari, Gujarat", detail: profile.languages.join(" · ") },
];
export function About() {
    return (<Section id="about" index="01" eyebrow="About" title="Hi, I'm Isha.">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <Reveal>
          <div className="flex items-start gap-5 mb-6">
            <div className="hidden sm:block shrink-0">
              <img src="/stickers/speech.png" alt="Isha presenting" className="size-24 object-contain drop-shadow-md"/>
            </div>
            <div>
              <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">{profile.about}</p>
              <p className="mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-foreground/90">
                Right now I&apos;m looking for my first professional role — a collaborative team where I can ship real
                features, learn from code reviews, and grow into a dependable full stack engineer.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {FACTS.map((fact, i) => (<Reveal key={fact.label} delay={i * 90}>
              <div className="glass flex h-full items-start gap-3.5 sm:gap-4 p-4 sm:p-5 transition-colors hover:border-primary/50">
                <fact.icon className="mt-0.5 size-5 shrink-0 text-primary"/>
                <div>
                  <p className="text-sm font-semibold">{fact.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{fact.detail}</p>
                </div>
              </div>
            </Reveal>))}
        </div>
      </div>
    </Section>);
}

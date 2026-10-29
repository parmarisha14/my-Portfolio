import { Download, FileText } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
const HIGHLIGHTS = [
    "BCA — CGPA 7.36",
   
  "65+ public repos",
    "4 resume projects",
];
export function ResumeSection() {
    return (<Section id="resume" index="06" eyebrow="Resume" title="One page, whole story.">
      <Reveal>
        <div className="glass grain relative overflow-hidden p-5 sm:p-8 md:p-12">
          <div className="grid items-center gap-6 sm:gap-8 md:grid-cols-[auto_1fr_auto]">
            <span className="glass flex size-12 sm:size-16 items-center justify-center rounded-2xl text-primary shrink-0">
              <FileText className="size-6 sm:size-7"/>
            </span>
            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold">Isha Parmar — Resume (PDF)</h3>
              <ul className="mt-2.5 sm:mt-3 flex flex-wrap gap-2">
                {HIGHLIGHTS.map((item) => (<li key={item} className="rounded-full border border-border/80 bg-muted/50 px-2.5 sm:px-3 py-0.5 sm:py-1 font-mono text-[0.62rem] sm:text-[0.65rem] uppercase tracking-[0.12em] sm:tracking-[0.14em] text-muted-foreground">
                    {item}
                  </li>))}
              </ul>
            </div>
            <a href="./resume.pdf" download="Isha-Parmar-Resume.pdf" className="btn-ember w-full sm:w-auto text-center justify-center whitespace-nowrap">
              <Download className="size-4"/> Download PDF
            </a>
          </div>
        </div>
      </Reveal>
    </Section>);
}

import { education } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
export function Education() {
    return (<Section id="education" index="03" eyebrow="Education" title="Where I studied.">
      <div className="mb-8 sm:mb-10 flex items-center gap-4 sm:gap-5 rounded-2xl border border-border/60 bg-card/40 p-4 sm:p-5">
        <img src="/stickers/question.png" alt="Curious learner" className="size-12 sm:size-16 shrink-0 object-contain drop-shadow"/>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Continuous Academic &amp; Project Growth
          </p>
         
        </div>
      </div>

      <ol className="relative space-y-8 sm:space-y-10 pl-6 sm:pl-8">
        <span className="absolute left-[7px] top-2 bottom-6 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent"/>
        {education.map((item, i) => (<li key={item.title} className="relative">
            <Reveal delay={i * 80}>
              <span className={"absolute -left-6 sm:-left-8 top-1.5 size-[13px] sm:size-[15px] rounded-full border-2 " +
                (item.current
                    ? "border-primary bg-primary animate-pulse-dot"
                    : "border-primary/50 bg-background")}/>
              <div className="glass p-4 sm:p-6 transition-colors hover:border-primary/50">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-base font-semibold sm:text-lg">{item.title}</h3>
                  {item.current ? (<span className="pill !px-3 !py-1 text-primary">Ongoing</span>) : null}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{item.institute}</p>
                {item.detail ? (<p className="mt-3 inline-flex rounded-full bg-primary/10 px-3 py-1 font-mono text-[0.7rem] text-primary">
                    {item.detail}
                  </p>) : null}
              </div>
            </Reveal>
          </li>))}
      </ol>
    </Section>);
}

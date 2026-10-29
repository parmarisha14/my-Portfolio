import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
/** Shared section shell: anchor id, numbered eyebrow, display title. */
export function Section({ id, index, eyebrow, title, children, className }) {
    return (<section id={id} data-xray-section={id} className={cn("relative scroll-mt-20 sm:scroll-mt-24 py-14 sm:py-20 md:py-28", className)}>
      <div className="container-x">
        <Reveal>
          <div className="flex items-baseline gap-3 sm:gap-4">
            <span className="font-mono text-xs text-primary">{index}</span>
            <span className="eyebrow">{eyebrow}</span>
          </div>
          <h2 className="display-md mt-2.5 sm:mt-4">{title}</h2>
        </Reveal>
        <div className="mt-8 sm:mt-12">{children}</div>
      </div>
    </section>);
}

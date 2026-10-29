import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
/** Fades + slides content in the first time it scrolls into view. */
export function Reveal({ children, delay = 0, className }) {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el)
            return;
        if (typeof IntersectionObserver === "undefined") {
            el.classList.add("is-visible");
            return;
        }
        const io = new IntersectionObserver((entries) => {
            if (entries[0]?.isIntersecting) {
                el.classList.add("is-visible");
                io.disconnect();
            }
        }, { threshold: 0.12 });
        io.observe(el);
        return () => io.disconnect();
    }, []);
    return (<div ref={ref} className={cn("reveal", className)} style={{ "--reveal-delay": `${delay}ms` }}>
      {children}
    </div>);
}

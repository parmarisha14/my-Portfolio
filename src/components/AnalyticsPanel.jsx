import { useEffect, useRef, useState } from "react";
import { Activity, Clock, Eye, Info } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { DEMO_MODE, formatSession, getVisitorStats } from "@/lib/analytics";
function CountUp({ target }) {
    const [value, setValue] = useState(0);
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el || typeof IntersectionObserver === "undefined") {
            setValue(target);
            return;
        }
        const io = new IntersectionObserver((entries) => {
            if (!entries[0]?.isIntersecting)
                return;
            io.disconnect();
            const start = performance.now();
            const tick = (now) => {
                const progress = Math.min((now - start) / 1400, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                setValue(Math.round(target * eased));
                if (progress < 1)
                    requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
        });
        io.observe(el);
        return () => io.disconnect();
    }, [target]);
    return <span ref={ref}>{value.toLocaleString("en-IN")}</span>;
}
/** Visitor analytics strip — numbers are simulated (DEMO_MODE) until a backend is connected. */
export function AnalyticsPanel() {
    const [stats, setStats] = useState(getVisitorStats);
    useEffect(() => {
        const timer = setInterval(() => {
            setStats(getVisitorStats());
        }, 3500);
        return () => clearInterval(timer);
    }, []);
    return (<section className="container-x py-8 sm:py-10">
      <Reveal>
        <div className="glass relative p-5 sm:p-8 md:p-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/stickers/inspect.png" alt="Analyzing data" className="size-8 sm:size-10 object-contain drop-shadow"/>
              <div>
                <span className="eyebrow">Visitor Analytics</span>
                <p className="text-[0.72rem] sm:text-xs text-muted-foreground mt-0.5">Real-time session insights &amp; metrics</p>
              </div>
            </div>
            {DEMO_MODE ? (<span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-primary/40 bg-primary/10 px-2.5 sm:px-3 py-1 font-mono text-[0.62rem] sm:text-[0.65rem] uppercase tracking-[0.16em] sm:tracking-[0.2em] text-primary">
                <Info className="size-3 shrink-0"/> Demo data · Local simulation
              </span>) : null}
          </div>

          <div className="mt-6 sm:mt-8 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-3">
            <div className="rounded-xl border border-border/40 bg-card/40 p-4 sm:p-5">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Eye className="size-4 text-primary"/>
                <span className="text-xs uppercase tracking-[0.18em]">Total visits</span>
              </div>
              <p className="font-display mt-2 text-3xl sm:text-4xl font-extrabold">
                <CountUp target={stats.totalVisits}/>
              </p>
              <p className="mt-1 font-mono text-[0.68rem] text-muted-foreground">+18% this week</p>
            </div>
            <div className="rounded-xl border border-border/40 bg-card/40 p-4 sm:p-5">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Activity className="size-4 text-primary"/>
                <span className="text-xs uppercase tracking-[0.18em]">Live now</span>
              </div>
              <p className="font-display mt-2 flex items-center gap-3 text-3xl sm:text-4xl font-extrabold">
                {stats.liveNow}
                <span className="size-2.5 rounded-full bg-primary animate-pulse-dot"/>
              </p>
              <p className="mt-1 font-mono text-[0.68rem] text-muted-foreground">Simulated active sessions</p>
            </div>
            <div className="rounded-xl border border-border/40 bg-card/40 p-4 sm:p-5">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="size-4 text-primary"/>
                <span className="text-xs uppercase tracking-[0.18em]">Avg. visit</span>
              </div>
              <p className="font-display mt-2 text-3xl sm:text-4xl font-extrabold">
                {formatSession(stats.avgSessionSeconds)}
              </p>
              <p className="mt-1 font-mono text-[0.68rem] text-muted-foreground">Desktop &amp; Mobile</p>
            </div>
          </div>

          {/* Section Interest Breakdown */}
          <div className="mt-5 sm:mt-6 rounded-xl border border-border/40 bg-card/25 p-4 sm:p-5">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">
              Top Explored Sections
            </p>
            <div className="grid gap-3 sm:grid-cols-4">
              {[
            { name: "Projects", pct: 45 },
            { name: "Skills", pct: 25 },
            { name: "Resume", pct: 20 },
            { name: "Education", pct: 10 },
        ].map((sec) => (<div key={sec.name}>
                  <div className="flex justify-between font-mono text-[0.7rem] text-muted-foreground mb-1.5">
                    <span>{sec.name}</span>
                    <span className="text-primary">{sec.pct}%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-primary to-ember-glow" style={{ width: `${sec.pct}%` }}/>
                  </div>
                </div>))}
            </div>
          </div>

          {DEMO_MODE ? (<p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              These numbers are sample metrics for preview purposes — not real visitor telemetry. Real, private
              analytics switch on automatically once the Firebase backend is connected.
            </p>) : null}
        </div>
      </Reveal>
    </section>);
}

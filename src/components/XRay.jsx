import { useEffect, useMemo, useState } from "react";
import { Check, Code2, Copy, Crosshair, X } from "lucide-react";
import { xraySections } from "@/data/xray";
import { cn } from "@/lib/utils";
const TOKEN_RE = /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\/\/[^\n]*|<\/?[a-zA-Z][\w-]*|\b(?:function|const|let|return|await|async|import|from|export|if|else|for|class|new|style)\b)/g;
/** Lightweight tokenizer: keywords, strings, comments and tags get ember-tinted. */
function highlight(code) {
    const parts = code.split(TOKEN_RE);
    return parts.map((part, i) => {
        if (!part)
            return null;
        let cls = null;
        if (part.startsWith("//"))
            cls = "tok-c";
        else if (part.startsWith('"') || part.startsWith("'"))
            cls = "tok-s";
        else if (/^<\/?[a-zA-Z]/.test(part))
            cls = "tok-t";
        else if (/^(function|const|let|return|await|async|import|from|export|if|else|for|class|new|style)$/.test(part))
            cls = "tok-k";
        return cls ? (<span key={i} className={cls}>
        {part}
      </span>) : (<span key={i}>{part}</span>);
    });
}
/**
 * Learning Mode (X-Ray):
 * When enabled, tracks mouse cursor in real-time, highlights the component under
 * cursor with an interactive live inspector badge, and live-syncs the code drawer.
 */
export function XRay() {
    const [enabled, setEnabled] = useState(false);
    const [activeId, setActiveId] = useState("hero");
    const [tab, setTab] = useState(0);
    // Live cursor inspection state
    const [cursorPos, setCursorPos] = useState(null);
    const [cursorInfo, setCursorInfo] = useState(null);
    const active = useMemo(() => {
        const found = xraySections.find((s) => s.id === activeId);
        return found ?? xraySections[0];
    }, [activeId]);
    // Viewport intersection observer as baseline
    useEffect(() => {
        if (!enabled || typeof IntersectionObserver === "undefined")
            return;
        const sections = Array.from(document.querySelectorAll("[data-xray-section]"));
        const visible = new Set();
        const io = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                const id = entry.target.getAttribute("data-xray-section");
                if (!id)
                    continue;
                if (entry.isIntersecting)
                    visible.add(id);
                else
                    visible.delete(id);
            }
            if (visible.size > 0) {
                const next = [...visible][0];
                if (next) {
                    setActiveId((current) => (visible.has(current) ? current : next));
                }
            }
        }, { rootMargin: "-35% 0px -35% 0px", threshold: 0 });
        for (const el of sections)
            io.observe(el);
        return () => io.disconnect();
    }, [enabled]);
    // Live cursor inspection: tracks mouse and inspects element under cursor
    useEffect(() => {
        if (!enabled || typeof window === "undefined") {
            setCursorPos(null);
            setCursorInfo(null);
            return;
        }
        let rafId = 0;
        const onMouseMove = (e) => {
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                setCursorPos({ x: e.clientX, y: e.clientY });
                const target = document.elementFromPoint(e.clientX, e.clientY);
                if (!target)
                    return;
                const secEl = target.closest("[data-xray-section]");
                if (secEl) {
                    const secId = secEl.getAttribute("data-xray-section");
                    if (secId) {
                        setActiveId(secId);
                        const found = xraySections.find((s) => s.id === secId);
                        const rect = secEl.getBoundingClientRect();
                        setCursorInfo({
                            sectionId: secId,
                            component: found ? found.label : secId.toUpperCase(),
                            label: found ? found.blurb : "Component section",
                            dimensions: `${Math.round(rect.width)} × ${Math.round(rect.height)}px`,
                        });
                        return;
                    }
                }
                // Over interactive UI element outside standard sections
                setCursorInfo({
                    sectionId: activeId,
                    component: target.tagName.toLowerCase(),
                    label: target.className.slice(0, 32) || "UI Element",
                    dimensions: `${Math.round(target.clientWidth)} × ${Math.round(target.clientHeight)}px`,
                });
            });
        };
        const onMouseLeave = () => {
            setCursorPos(null);
        };
        window.addEventListener("mousemove", onMouseMove, { passive: true });
        document.addEventListener("mouseleave", onMouseLeave);
        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseleave", onMouseLeave);
        };
    }, [enabled, activeId]);
    // Highlight active section on page
    useEffect(() => {
        const sections = Array.from(document.querySelectorAll("[data-xray-section]"));
        for (const el of sections) {
            el.setAttribute("data-xray-active", String(enabled && el.getAttribute("data-xray-section") === activeId));
        }
        return () => {
            for (const el of sections)
                el.removeAttribute("data-xray-active");
        };
    }, [enabled, activeId]);
    const [copied, setCopied] = useState(false);
    // Keep the tab index valid when the active section changes
    useEffect(() => setTab(0), [activeId]);
    const copyCode = () => {
        const code = active.tabs[tab]?.code ?? "";
        void navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    // Safe screen-clamped coordinates for cursor badge
    const badgeCoords = useMemo(() => {
        if (!cursorPos || typeof window === "undefined")
            return null;
        const maxX = window.innerWidth - 260;
        const maxY = window.innerHeight - 80;
        const x = Math.min(cursorPos.x + 16, Math.max(10, maxX));
        const y = Math.min(cursorPos.y + 16, Math.max(10, maxY));
        return { x, y };
    }, [cursorPos]);
    return (<>
      {/* Floating Live Inspector Badge following the cursor when X-Ray is enabled */}
      {enabled && badgeCoords && cursorInfo ? (<div style={{
                transform: `translate3d(${badgeCoords.x}px, ${badgeCoords.y}px, 0)`,
            }} className="pointer-events-none fixed left-0 top-0 z-[100] flex items-center gap-2.5 rounded-xl border border-primary/70 bg-card/95 px-3 py-2 shadow-2xl backdrop-blur-xl ring-2 ring-primary/25 transition-transform duration-75">
          <div className="flex size-7 items-center justify-center rounded-lg bg-primary/20 text-primary border border-primary/30">
            <Code2 className="size-4 text-primary"/>
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-foreground">
              <span className="text-primary">&lt;{cursorInfo.component} /&gt;</span>
              <span className="text-[0.62rem] text-muted-foreground font-normal">
                {cursorInfo.dimensions}
              </span>
            </div>
            <p className="font-mono text-[0.62rem] text-muted-foreground truncate max-w-[190px]">
              Hovering · Live code in inspector
            </p>
          </div>
        </div>) : null}

      {/* X-Ray Trigger button */}
      <button onClick={() => setEnabled((v) => !v)} aria-pressed={enabled} className={cn("fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[60] inline-flex items-center gap-2 sm:gap-2.5 rounded-full px-3.5 py-2 sm:px-5 sm:py-3 font-mono text-[0.68rem] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.18em] shadow-2xl transition-all cursor-pointer hover:scale-105", enabled
            ? "bg-primary text-primary-foreground border-2 border-amber-300 ring-4 ring-primary/30"
            : "border border-border/80 bg-card/90 text-muted-foreground backdrop-blur-xl hover:border-primary/60 hover:text-primary")}>
        <img src="/stickers/inspect.png" alt="Inspect" className="size-4 sm:size-5 object-contain"/>
        <span>X-Ray {enabled ? "Active" : "Learn"}</span>
        <span className={cn("size-2 rounded-full", enabled ? "bg-amber-950 animate-pulse" : "bg-primary")}/>
      </button>

      {/* X-Ray Code Inspection Drawer */}
      {enabled ? (<aside className="fixed bottom-16 sm:bottom-6 left-3 sm:left-6 z-[60] w-[calc(100vw-1.5rem)] sm:w-[min(480px,calc(100vw-3rem))] shadow-2xl animate-fade-in">
          <div className="glass overflow-hidden border border-primary/40 bg-card/95 backdrop-blur-2xl">
            {/* Header */}
            <div className="flex items-start justify-between gap-3 border-b border-border/60 p-4">
              <div className="flex items-center gap-3">
                <img src="/stickers/inspect.png" alt="Inspector avatar" className="size-11 object-contain drop-shadow"/>
                <div>
                  <div className="flex items-center gap-1.5">
                    <Crosshair className="size-3.5 text-primary animate-spin-slow"/>
                    <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-primary font-bold">
                      Cursor Inspector · &lt;{active.label} /&gt;
                    </p>
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground leading-snug">{active.blurb}</p>
                </div>
              </div>
              <button onClick={() => setEnabled(false)} aria-label="Close X-Ray panel" className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-primary cursor-pointer">
                <X className="size-4"/>
              </button>
            </div>

            {/* Quick Section Picker */}
            <div className="flex items-center gap-1.5 overflow-x-auto border-b border-border/40 bg-background/50 px-3 py-2 scrollbar-none">
              <span className="font-mono text-[0.62rem] uppercase tracking-wider text-muted-foreground/70 shrink-0 mr-1">
                Sections:
              </span>
              {xraySections.map((sec) => (<button key={sec.id} onClick={() => setActiveId(sec.id)} className={cn("shrink-0 rounded px-2 py-1 font-mono text-[0.65rem] uppercase tracking-wider transition-colors cursor-pointer", sec.id === activeId
                    ? "bg-primary text-primary-foreground font-semibold"
                    : "text-muted-foreground hover:bg-card hover:text-foreground")}>
                  {sec.label}
                </button>))}
            </div>

            {/* Code Tabs & Copy */}
            <div className="flex items-center justify-between border-b border-border/60 bg-background/30 px-3 py-1.5">
              <div className="flex gap-1">
                {active.tabs.map((t, i) => (<button key={t.name} onClick={() => setTab(i)} className={cn("rounded-md px-3 py-1 font-mono text-[0.7rem] transition-colors cursor-pointer", i === tab ? "bg-primary/20 text-primary font-medium" : "text-muted-foreground hover:text-foreground")}>
                    {t.name}
                  </button>))}
              </div>

              <button onClick={copyCode} className="flex items-center gap-1 rounded px-2.5 py-1 font-mono text-[0.68rem] text-muted-foreground transition-colors hover:bg-card hover:text-primary cursor-pointer" title="Copy snippet">
                {copied ? (<>
                    <Check className="size-3 text-emerald-400"/>
                    <span className="text-emerald-400">Copied!</span>
                  </>) : (<>
                    <Copy className="size-3"/>
                    <span>Copy</span>
                  </>)}
              </button>
            </div>

            {/* Code Output */}
            <div className="code-panel max-h-64 overflow-y-auto rounded-none border-0 bg-transparent p-4">
              <pre>
                <code>{highlight(active.tabs[tab]?.code ?? "")}</code>
              </pre>
            </div>
          </div>
        </aside>) : null}
    </>);
}

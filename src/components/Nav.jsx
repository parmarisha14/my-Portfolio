import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
export function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (<header className={"fixed inset-x-0 top-0 z-50 transition-all duration-500 " +
            (scrolled ? "border-b border-border/60 bg-background/80 backdrop-blur-xl" : "bg-transparent")}>
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <a href="#hero" className="group flex items-center gap-2.5 font-mono text-sm tracking-tight">
          <div className="relative size-8 overflow-hidden rounded-full border border-primary/40 bg-card p-0.5 shadow-sm transition-transform duration-300 group-hover:scale-110">
            <img src="/stickers/circle-avatar.png" alt="Isha Avatar" className="size-full object-contain"/>
          </div>
          <span>
            isha<span className="text-primary">.dev</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (<a key={link.href} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
              {link.label}
            </a>))}
        </nav>

        <div className="flex items-center gap-3">
          {profile.openToWork ? (<span className="pill hidden md:inline-flex">
              <span className="size-2 rounded-full bg-primary animate-pulse-dot"/>
              Open to work
            </span>) : null}
          <a href="#contact" className="btn-ember hidden !px-5 !py-2 sm:inline-flex">
            Let&apos;s talk
          </a>
          <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} className="glass flex size-10 items-center justify-center lg:hidden">
            {open ? <X className="size-5"/> : <Menu className="size-5"/>}
          </button>
        </div>
      </div>

      {open ? (<nav className="border-t border-border/60 bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            <div className="mb-2 flex items-center gap-3 border-b border-border/40 pb-3">
              <img src="/stickers/wave.png" alt="Waving hello" className="size-11 object-contain"/>
              <div>
                <p className="text-xs font-semibold">Hey there!</p>
                <p className="text-[0.72rem] text-muted-foreground">Welcome to Isha&apos;s portfolio</p>
              </div>
            </div>
            {navLinks.map((link) => (<a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-primary">
                {link.label}
              </a>))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 flex items-center justify-between rounded-lg bg-primary/15 px-3.5 py-2.5 text-sm font-medium text-primary hover:bg-primary/25">
              <span>Get in touch</span>
              <span className="font-mono text-xs">→</span>
            </a>
          </div>
        </nav>) : null}
    </header>);
}

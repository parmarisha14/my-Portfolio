import { profile } from "@/data/portfolio";
export function Footer() {
    return (<footer className="border-t border-border/60 py-10">
      <div className="container-x flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div className="flex flex-col gap-1">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} {profile.name} · Full Stack Developer
          </p>
         
        </div>
        <a href="#hero" className="font-mono text-xs text-primary transition-colors hover:text-ember-glow">
          Back to top ↑
        </a>
      </div>
    </footer>);
}

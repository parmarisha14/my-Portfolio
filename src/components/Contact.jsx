import { Github, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { profile } from "@/data/portfolio";
export function Contact() {
    return (<Section id="contact" index="07" eyebrow="Contact" title="Let's build something." className="text-center">
      <Reveal>
        <div className="mx-auto mb-5 sm:mb-6 flex justify-center">
          <img src="/stickers/thumbs-up.png" alt="Thumbs up" className="size-16 sm:size-20 object-contain drop-shadow transition-transform duration-300 hover:scale-110"/>
        </div>
        <p className="mx-auto max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
          I&apos;m open to full-time roles, internships and freelance builds. If my work fits what
          your team needs, my inbox is the fastest way to reach me.
        </p>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
          <a href={`mailto:${profile.email}`} className="btn-ember max-w-full text-xs sm:text-sm truncate">
            <Mail className="size-4 shrink-0"/> <span className="truncate">{profile.email}</span>
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn-outline text-xs sm:text-sm">
            <Github className="size-4"/> GitHub
          </a>
        </div>
      </Reveal>

      <Reveal delay={220}>
        <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 gap-y-3 font-mono text-xs text-muted-foreground">
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 hover:text-primary">
            <Phone className="size-3.5 text-primary"/> {profile.phone}
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-3.5 text-primary"/> {profile.location}
          </span>
        </div>
      </Reveal>
    </Section>);
}

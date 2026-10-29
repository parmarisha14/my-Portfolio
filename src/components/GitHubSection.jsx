import { useEffect, useState } from "react";
import { Github, GitBranch, Users, Calendar } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { githubProjects, githubStats } from "@/data/portfolio";
export function GitHubSection() {
    const [reposCount, setReposCount] = useState(githubStats.publicRepos);
    const [followers, setFollowers] = useState(9);
    const [isLive, setIsLive] = useState(false);
    useEffect(() => {
        let mounted = true;
        fetch(`https://api.github.com/users/${githubStats.username}`)
            .then((res) => {
            if (!res.ok)
                throw new Error("GitHub API error");
            return res.json();
        })
            .then((data) => {
            if (!mounted)
                return;
            if (typeof data.public_repos === "number") {
                setReposCount(data.public_repos);
                setIsLive(true);
            }
            if (typeof data.followers === "number") {
                setFollowers(data.followers);
            }
        })
            .catch(() => {
            // Fallback to static data
        });
        return () => {
            mounted = false;
        };
    }, []);
    const stats = [
        {
            icon: GitBranch,
            value: String(reposCount),
            label: "Public repositories",
            hint: isLive ? "Live from GitHub API" : "Synced from profile",
        },
        {
            icon: Users,
            value: String(followers),
            label: "GitHub followers",
            hint: "parmarisha14",
        },
        {
            icon: Github,
            value: String(githubProjects.length),
            label: "Featured builds",
            hint: "Curated in portfolio",
        },
        {
            icon: Calendar,
            value: "2024",
            label: "Active builder since",
            hint: "Continuous shipping",
        },
    ];
    return (<Section id="myportfolio" index="05" eyebrow="My Portfolio" title="Code in the open.">
      <span id="github" className="sr-only"/>
      <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <div className="flex items-center gap-2 mb-4">
            <span className="pill text-[0.68rem]">
              <span className="size-2 rounded-full bg-primary animate-pulse-dot"/>
              {isLive ? "Live GitHub Synced" : "GitHub Verified"}
            </span>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            Almost everything I learn becomes a repository — course builds, clones, API dashboards
            and admin panels. Stats below are queried directly from my public GitHub account.
          </p>
          <a href={githubStats.url} target="_blank" rel="noreferrer" className="btn-ember mt-8 inline-flex items-center gap-2">
            <Github className="size-4"/> github.com/{githubStats.username}
          </a>
        </Reveal>

        <div className="grid gap-3 sm:gap-4 grid-cols-2">
          {stats.map((stat, i) => (<Reveal key={stat.label} delay={i * 80} className="h-full">
              <div className="glass flex h-full flex-col items-start p-4 sm:p-6 transition-all duration-300 hover:border-primary/50">
                <div className="flex items-center justify-between w-full">
                  <stat.icon className="size-4 sm:size-5 text-primary"/>
                  <span className="font-mono text-[0.58rem] sm:text-[0.62rem] text-primary/70 uppercase tracking-wider">{stat.hint}</span>
                </div>
                <span className="font-display mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold">{stat.value}</span>
                <span className="mt-1 text-xs text-muted-foreground">{stat.label}</span>
              </div>
            </Reveal>))}
        </div>
      </div>
    </Section>);
}

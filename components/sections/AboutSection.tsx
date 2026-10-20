import Link from "next/link";
import { SectionHeader } from "@/components/Layout";
import { Badge } from "@/components/Badge";
import { biography, internship, skills } from "@/utils/profile";
import { projects } from "@/utils/projects";
import { siteConfig } from "@/utils/site";

export function AboutSection() {
  const featuredProject = projects.find(
    (project) => project.slug === biography.featuredProjectSlug,
  );

  return (
    <section className="py-12">
      <SectionHeader label="About" title="About Me" />
      <div className="space-y-4 text-[14.5px] leading-[1.9] text-muted-foreground">
        <p>
          I&apos;m {siteConfig.name}, an {biography.age}-year-old self-taught full-stack developer based in {siteConfig.location}. I&apos;m currently in the {biography.studyStage} of my Computer Science degree. Since starting my coding journey in{" "}
          <time dateTime={biography.codingStartDate}>{biography.codingStartLabel}</time>, I&apos;ve focused on building web applications and strengthening my understanding of backend development, databases, and API design.
        </p>
        <p>
          I currently work remotely as a {internship.role} at {internship.company}.
          {featuredProject ? (
            <>
              {" "}My featured open-source project,{" "}
              <a
                href={featuredProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
              >
                {featuredProject.title}
              </a>
              , is {biography.featuredProjectSummary}. Alongside my work and studies, I{" "}
            </>
          ) : (
            " Alongside my work and studies, I "
          )}
          <Link
            href="/blog"
            className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
          >
            write about web development
          </Link>{" "}
          and share what I learn through building.
        </p>
        <p>
          I&apos;m open to internships and collaborative projects where I can contribute, learn from experienced developers, and keep growing alongside my studies.{" "}
          <Link
            href="/#contact"
            className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
          >
            Let&apos;s connect
          </Link>
          .
        </p>
      </div>
      <div className="mt-10 border-t border-border pt-8 sm:mt-12 sm:pt-10">
        <h3 className="font-serif text-lg font-semibold">Tech Stack</h3>
        <dl className="mt-6 space-y-6 text-sm">
          {skills.map((skill) => (
            <div key={skill.category}>
              <dt className="text-xs font-medium">{skill.category}</dt>
              <dd className="mt-2.5 flex flex-wrap gap-2">
                {skill.tools.map((tool) => (
                  <Badge key={tool}>{tool}</Badge>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

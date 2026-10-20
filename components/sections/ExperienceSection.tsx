import Image from "next/image";
import { SectionHeader } from "@/components/Layout";
import { internship } from "@/utils/profile";

export function ExperienceSection() {
  return (
    <section className="py-12">
      <SectionHeader label="Experience" title="Where I’m Working" />
      <article>
        <div className="flex items-center gap-3">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border">
            <Image
              src={internship.logo}
              width={28}
              height={28}
              alt=""
              className="size-7 object-contain"
            />
          </div>
          <h3 className="text-lg font-semibold">{internship.company}</h3>
        </div>
        <div className="ml-3 mt-4 border-l border-border pb-5 pl-5">
          <div className="flex items-center gap-2.5">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-[#c1bebe2d] text-muted-foreground dark:bg-[#a8a29e12]">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="size-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="7" width="18" height="14" rx="2" />
                <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12a20 20 0 0 0 18 0M10 12h4v4h-4z" />
              </svg>
            </span>
            <h4 className="text-sm font-medium sm:text-base">{internship.role}</h4>
          </div>
          <div className="ml-8.5 mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
            <p>
              <time dateTime={internship.startDate}>{internship.period}</time>
            </p>
            <span aria-hidden="true" className="text-border">
              |
            </span>
            <p title="Planned internship duration">{internship.duration}</p>
          </div>
          <p className="ml-8.5 mt-2 text-xs text-muted-foreground">{internship.location}</p>
        </div>
      </article>
    </section>
  );
}

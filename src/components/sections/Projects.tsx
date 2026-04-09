"use client";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { portfolioData } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/ui/FadeIn";

const { projects } = portfolioData;

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionLabel
            num="03."
            title="Academic Projects"
            subtitle="A showcase of projects that demonstrate my engineering skills and problem-solving approach."
          />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.name} delay={i * 0.1}>
              <motion.div
                className="group relative rounded-2xl border border-[#d6ccbc] bg-[#fdfaf6] overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
                style={
                  { "--accent": project.accentColor } as React.CSSProperties
                }
                whileHover={{ borderColor: project.accentColor + "80" }}
              >
                {/* Top accent bar */}
                <div
                  className="h-1 w-0 group-hover:w-full transition-all duration-500"
                  style={{
                    background: `linear-gradient(90deg, ${project.accentColor}, ${project.accentColor}60)`,
                  }}
                />

                <div className="p-6 flex flex-col h-full relative">
                  {/* Name + emoji + date */}
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                        style={{ background: project.accentColor + "15" }}
                      >
                        {project.emoji}
                      </div>

                      <h3
                        className="font-semibold text-ink text-lg leading-tight"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {project.name}
                      </h3>
                    </div>

                    {/* Right: date */}
                    <span
                      className="text-[11px] text-slate-400 whitespace-nowrap flex-shrink-0"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {project.period}
                    </span>
                  </div>

                  {/* Tagline */}
                  <p
                    className="text-xs text-slate-400 mb-3 ml-[52px]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p
                    className="text-sm text-slate-500 leading-relaxed mb-4"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-5">
                    {project.highlights.map((h, hi) => (
                      <li
                        key={hi}
                        className="flex items-start gap-2 text-xs text-slate-500"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: project.accentColor }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Bottom row: tech tags left, GitHub icon bottom-right */}
                  <div className="mt-auto flex items-end justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 text-xs rounded-md border"
                          style={{
                            fontFamily: "var(--font-mono)",
                            background: project.accentColor + "0d",
                            borderColor: project.accentColor + "40",
                            color: project.accentColor,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* GitHub icon — bottom-right */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-shrink-0 p-2 rounded-lg border border-[#d6ccbc] text-slate-400 hover:text-ink hover:bg-[#ede7d9] transition-colors"
                      aria-label={`${project.name} source code`}
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

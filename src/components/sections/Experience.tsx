"use client";
import { portfolioData } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/ui/FadeIn";
import { motion } from "framer-motion";

const { experience, achievements } = portfolioData;

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionLabel
            num="04."
            title="Experience"
            subtitle="Open source contributions and professional development activities."
          />
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative pl-6">
              <div className="absolute left-1 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400 via-emerald-200 to-transparent" />

              <div className="space-y-8">
                {experience.map((exp, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                    <div className="relative">
                      <div
                        className={`absolute -left-6 top-3 w-3 h-3 rounded-full border-2 ${exp.active ? "border-emerald-500 bg-emerald-500" : "border-slate-300 bg-white"}`}
                      />
                      {exp.active && (
                        <div className="absolute -left-[1.65rem] top-2 w-5 h-5 rounded-full bg-emerald-200 animate-ping opacity-50" />
                      )}
                      <div className="p-5 rounded-xl bg-white border border-[#d6ccbc] hover:border-emerald-200 transition-colors">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                          <div>
                            <h3
                              className="font-semibold text-ink text-base"
                              style={{ fontFamily: "var(--font-body)" }}
                            >
                              {exp.role}
                            </h3>
                            <div
                              className="text-sm text-emerald-700 font-medium mt-0.5"
                              style={{ fontFamily: "var(--font-body)" }}
                            >
                              {exp.org}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-slate-400 font-mono">
                              {exp.period}
                            </div>
                            <div
                              className={`text-xs mt-0.5 px-2 py-0.5 rounded-full inline-block ${exp.active ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"}`}
                            >
                              {exp.active ? "● Active" : exp.type}
                            </div>
                          </div>
                        </div>
                        <ul className="space-y-1.5">
                          {exp.highlights.map((h, hi) => (
                            <li
                              key={hi}
                              className="flex items-start gap-2 text-sm text-slate-500"
                              style={{ fontFamily: "var(--font-body)" }}
                            >
                              <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-400 flex-shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements sidebar */}
          <div className="lg:col-span-1">
            <FadeIn delay={0.2} direction="left">
              <h3
                className="text-2xl font-light text-ink mb-5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Achievements
              </h3>

              {/* Badge image card */}
              <motion.a
                href="https://www.holopin.io/hacktoberfest2025/userbadge/cmhjbpxht0029ie04ew6voumf"
                target="_blank"
                rel="noreferrer"
                className="group relative block rounded-2xl overflow-hidden border-2 border-[#c8a84b] bg-[#1a1400] shadow-lg shadow-amber-100/60 cursor-pointer"
                whileHover={{
                  y: -3,
                  boxShadow: "0 16px 40px rgba(200,168,75,0.25)",
                }}
                transition={{ duration: 0.22 }}
              >
                {/* Badge image */}
                <img
                  src="/certificates/holopin-badge.png"
                  alt="Holopin Supercontributor Badge"
                  className="w-full aspect-square object-cover group-hover:scale-[1.03] transition-transform duration-300"
                />

                {/* Text overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent px-4 pt-8 pb-4">
                  <div className="flex items-end justify-between">
                    <div>
                      <div
                        className="text-white font-semibold text-base leading-tight"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        Top 10,000 Global · Hacktoberfest 2025
                      </div>
                    </div>

                    {/* Corner arrow */}
                    <div className="w-8 h-8 rounded-lg bg-[#f5d060] flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-colors">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#1a1400"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.a>

              {/* Holopin Badges row below card */}
              <div className="mt-3 flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🏅</span>
                  <div>
                    <div
                      className="text-sm font-semibold text-ink"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Holopin Badges
                    </div>
                    <div
                      className="text-xs text-slate-400"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Hacktoberfest Verified
                    </div>
                  </div>
                </div>
                <a
                  href="https://www.holopin.io/@nurhasin"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1 transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  View all
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

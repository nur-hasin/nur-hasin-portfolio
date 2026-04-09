"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/ui/FadeIn";

const { skills } = portfolioData;

const groups = [
  {
    label: "Languages",
    items: skills.languages,
    color:
      "bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100",
    dot: "bg-emerald-500",
  },
  {
    label: "Frameworks & Libraries",
    items: skills.frameworks,
    color: "bg-violet-50 text-violet-800 border-violet-200 hover:bg-violet-100",
    dot: "bg-violet-500",
  },
  {
    label: "Databases & Tools",
    items: [...skills.databases, ...skills.tools],
    color: "bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100",
    dot: "bg-amber-500",
  },
  {
    label: "Core Concepts",
    items: skills.concepts,
    color: "bg-sky-50 text-sky-800 border-sky-200 hover:bg-sky-100",
    dot: "bg-sky-500",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionLabel
            num="02."
            title="Tech Stack"
            subtitle="The languages, frameworks, and tools I work with."
          />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((group, gi) => (
            <FadeIn key={group.label} delay={gi * 0.1}>
              <div className="p-6 rounded-2xl bg-white border border-[#d6ccbc] hover:border-emerald-200 transition-colors">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`w-2.5 h-2.5 rounded-full ${group.dot}`} />
                  <span
                    className="text-xs font-medium text-slate-500 uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {group.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, ii) => (
                    <motion.span
                      key={item}
                      className={`px-3 py-1.5 rounded-lg text-sm border font-medium cursor-default transition-all ${group.color}`}
                      style={{ fontFamily: "var(--font-body)" }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.05 + ii * 0.03 }}
                      whileHover={{ scale: 1.05, y: -1 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

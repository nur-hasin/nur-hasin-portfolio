"use client";
import { portfolioData } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/ui/FadeIn";
import { GraduationCap, MapPin } from "lucide-react";

const { personal, education } = portfolioData;

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="mb-4">
            <SectionLabel
              num="01."
              title="About Me"
              subtitle="A brief introduction to who I am and where I'm heading."
            />
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: bio + education (3 cols) */}
          <div className="lg:col-span-3 space-y-8">
            <FadeIn delay={0.1}>
              <div className="prose prose-slate max-w-none">
                <p
                  className="text-lg text-slate-600 leading-relaxed text-justify"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  I am a Computer Science and Engineering student with a major
                  in Software Engineering with a strong foundation in Data
                  Structures and Algorithms using Java, and I am focused on
                  building clean, scalable, and purposeful applications while
                  deepening my expertise in full stack development. My work
                  spans from developing full stack web applications with REST
                  APIs to building low level systems such as game engines, where
                  I focus on writing maintainable code, making sound
                  architecture decisions, and creating systems that are
                  efficient and reliable. I am currently mastering the MERN
                  stack through practical projects and strengthening my
                  understanding of modern web standards and backend architecture
                  through hands on development, while also exploring the
                  intersection of web development and artificial intelligence
                  with plans to work on agentic AI and large language model
                  integration. Beyond development, I actively contribute to open
                  source and continuously improve my problem solving skills
                  through platforms like LeetCode, and I am driven by curiosity,
                  consistency, and a desire to build meaningful software while
                  seeking opportunities to grow as a software engineer.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right: terminal card (2 cols) */}
          <div className="lg:col-span-2">
            <FadeIn delay={0.25} direction="left">
              <div className="rounded-2xl border border-[#d6ccbc] overflow-hidden shadow-xl shadow-slate-100 sticky top-24">
                {/* Terminal bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a2e]">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                  <span className="flex-1 text-center text-xs text-slate-500 font-mono">
                    nur-hasin-ahammad ~ profile.sh
                  </span>
                </div>
                <div className="bg-[#0d1117] p-5 font-mono text-sm">
                  {[
                    { cmd: "$ whoami", out: "nur_hasin_ahammad" },
                    {
                      cmd: "$ cat role.txt",
                      out: "Software Engineer · Full Stack Developer",
                    },
                    {
                      cmd: "$ cat focus.txt",
                      out: "Full Stack Development\nMERN Stack · Scalable Systems",
                    },
                    { cmd: "$ cat location.txt", out: "📍 Dhaka, Bangladesh" },
                    {
                      cmd: "$ cat stack.txt",
                      out: "React · Node.js · TypeScript\nC++ · Java · PHP · Python",
                    },
                    {
                      cmd: "$ cat interests.txt",
                      out: "AI Integration · System Design · Problem Solving",
                    },
                    {
                      cmd: "$ git log --oneline -1",
                      out: "🟢 main • Always learning, always shipping",
                    },
                  ].map((line, i) => (
                    <div key={i} className="mb-3">
                      <div className="text-emerald-400">{line.cmd}</div>
                      {line.out.split("\n").map((o, j) => (
                        <div key={j} className="text-slate-400 pl-2">
                          {o}
                        </div>
                      ))}
                    </div>
                  ))}
                  <div className="text-emerald-400">
                    ${" "}
                    <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse ml-1 align-middle" />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";

const certs = [
  {
    id: "bsc",
    image: null, // No certificate image for bachelor's yet
    degree: "Bachelor's of Science (BSc)",
    major: "Computer Science & Engineering",
    specialization: "Major in Software Engineering",
    institution: "American International University-Bangladesh (AIUB)",
    year: "2023 – 2027 (Expected)",
    gpa: "3.71 / 4.00",
    status: "In Progress",
    color: "emerald",
  },
  {
    id: "hsc",
    image: "/certificates/cert1.jpg",
    degree: "Higher Secondary Certificate (HSC)",
    major: "Science",
    specialization: "",
    institution: "Padma Govt. College, Rajshahi",
    year: "2021",
    gpa: "5.00 / 5.00",
    status: "Verified",
    color: "amber",
  },
  {
    id: "ssc",
    image: "/certificates/cert2.jpg",
    degree: "Secondary School Certificate (SSC)",
    major: "Science",
    specialization: "",
    institution: "Harimohan Govt. High School, Chapainawabganj",
    year: "2019",
    gpa: "4.83 / 5.00",
    status: "Verified",
    color: "sky",
  },
];

const colorMap: Record<
  string,
  { badge: string; gpa: string; border: string; accent: string }
> = {
  emerald: {
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    gpa: "bg-emerald-50 text-emerald-700 border-emerald-200",
    border: "border-emerald-200",
    accent: "from-emerald-400 to-emerald-200",
  },
  amber: {
    badge: "bg-amber-50 text-amber-700 border-amber-200",
    
    gpa: "bg-amber-50 text-amber-700 border-amber-200",
    border: "border-amber-200",
    accent: "from-amber-400 to-amber-200",
  },
  sky: {
    badge: "bg-sky-50 text-sky-700 border-sky-200",
    
    gpa: "bg-sky-50 text-sky-700 border-sky-200",
    border: "border-sky-200",
    accent: "from-sky-400 to-sky-200",
  },
};

export default function Certificates() {
  return (
    <section id="education" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionLabel
            num="05."
            title="Education"
            subtitle="Academic credentials and verified qualifications."
          />
        </FadeIn>

        <div className="flex flex-col gap-6">
          {certs.map((cert, i) => {
            const c = colorMap[cert.color];
            return (
              <FadeIn key={cert.id} delay={i * 0.12}>
                <motion.div
                  className={`group relative flex flex-col md:flex-row overflow-hidden rounded-2xl border border-[#d6ccbc] bg-[#fdfaf6] hover:${c.border} transition-all duration-300`}
                  whileHover={{
                    y: -2,
                    boxShadow: "0 16px 40px rgba(0,0,0,0.07)",
                  }}
                >
                  {/* Left: image or placeholder */}
                  <div className="md:w-80 lg:w-96 flex-shrink-0 relative overflow-hidden bg-[#f0ede6] aspect-[4/3] md:aspect-auto">
                    {cert.image ? (
                      <>
                        <img
                          src={cert.image}
                          alt={`${cert.degree} certificate`}
                          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display =
                              "none";
                          }}
                        />
                        {/* Subtle dark overlay on hover */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                      </>
                    ) : (
                      /* No certificate yet — placeholder */
                      <div className="w-full h-full min-h-[200px] flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-emerald-50 via-[#f5f2ea] to-emerald-100/60 p-8">
                        <div className="w-16 h-16 rounded-full border-2 border-dashed border-emerald-300 flex items-center justify-center">
                          <svg
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#059669"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="12" y1="18" x2="12" y2="12" />
                            <line x1="9" y1="15" x2="15" y2="15" />
                          </svg>
                        </div>
                        <div className="text-center">
                          <div
                            className="text-xs font-medium text-emerald-600"
                            style={{ fontFamily: "var(--font-mono)" }}
                          >
                            Certificate
                          </div>
                          <div
                            className="text-xs text-slate-400 mt-0.5"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            Issued upon graduation
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right: details */}
                  <div className="flex-1 flex flex-col justify-center px-8 py-8 md:py-10">
                    {/* Degree */}
                    <h3
                      className="text-2xl md:text-3xl font-bold text-ink leading-tight mb-2"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {cert.degree}
                    </h3>

                    {/* Major */}
                    <div
                      className="text-base md:text-lg font-semibold text-emerald-700 mb-1"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {cert.major}
                      {cert.specialization && (
                        <span className="text-slate-400 font-normal">
                          {" "}
                          ({cert.specialization})
                        </span>
                      )}
                    </div>

                    {/* Institution */}
                    <div
                      className="text-sm text-slate-500 mb-6"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {cert.institution}
                    </div>

                    {/* Meta row */}
                    <div className="flex flex-wrap items-center gap-3">
                      {/* GPA */}
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold border ${c.gpa}`}
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        GPA {cert.gpa}
                      </span>

                      {/* Year */}
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm border border-[#d6ccbc] bg-[#faf8f4] text-slate-500"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {cert.year}
                      </span>
                    </div>
                  </div>

                  {/* Bottom hover accent line */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${c.accent} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  />
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

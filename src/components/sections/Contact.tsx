"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Code2,
} from "lucide-react";
import { portfolioData } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/ui/FadeIn";

const { personal } = portfolioData;

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    color:
      "hover:border-emerald-300 hover:bg-emerald-50/50 hover:text-emerald-700",
  },
  {
    icon: Phone,
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone}`,
    color: "hover:border-sky-300 hover:bg-sky-50/50 hover:text-sky-700",
  },
  {
    icon: MapPin,
    label: "Location",
    value: personal.location,
    href: "https://maps.google.com/?q=Dhaka,Bangladesh",
    color: "hover:border-amber-300 hover:bg-amber-50/50 hover:text-amber-700",
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    href: personal.links.linkedin,
    label: "LinkedIn",
    color: "hover:border-[#0077b5] hover:text-[#0077b5]",
  },
  {
    icon: Github,
    href: personal.links.github,
    label: "GitHub",
    color: "hover:border-ink hover:text-ink",
  },
  {
    icon: Code2,
    href: personal.links.leetcode,
    label: "LeetCode",
    color: "hover:border-amber-500 hover:text-amber-600",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("idle");
      alert("Failed to send message. Try again.");
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionLabel
            num="06."
            title="Get in Touch"
            subtitle="Have a project, opportunity, or just want to say hi? My inbox is always open."
          />
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: info */}
          <FadeIn delay={0.1}>
            <div className="space-y-8">
              <p
                className="text-slate-500 leading-relaxed text-base"
                style={{ fontFamily: "var(--font-body)" }}
              >
                I&apos;m currently open to internship roles, freelance projects,
                and open-source collaborations. Whether you have a question or
                just want to connect, feel free to reach out.
              </p>

              {/* Contact cards */}
              <div className="space-y-3">
                {contactLinks.map(
                  ({ icon: Icon, label, value, href, color }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className={`flex items-center gap-4 p-4 rounded-xl bg-white border border-[#d6ccbc] transition-all duration-200 group ${color}`}
                      whileHover={{ x: 4 }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#f5f0e8] flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-colors">
                        <Icon
                          size={18}
                          className="text-slate-400 group-hover:text-current transition-colors"
                        />
                      </div>
                      <div>
                        <div
                          className="text-xs text-slate-400 mb-0.5"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {label}
                        </div>
                        <div
                          className="text-sm font-medium text-ink"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {value}
                        </div>
                      </div>
                    </motion.a>
                  ),
                )}
              </div>

              {/* Social row */}
              <div>
                <p
                  className="text-xs text-slate-400 uppercase tracking-widest mb-3"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Find me online
                </p>
                <div className="flex gap-3">
                  {socialLinks.map(({ icon: Icon, href, label, color }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className={`p-3 bg-white border border-[#d6ccbc] text-slate-400 rounded-xl transition-all ${color}`}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: form */}
          <FadeIn delay={0.2} direction="left">
            <div className="bg-white rounded-2xl border border-[#d6ccbc] p-8 shadow-sm">
              {status === "sent" ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-12 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-4">
                    <Send size={28} className="text-emerald-600" />
                  </div>
                  <h3
                    className="text-xl font-light text-ink mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Message Sent!
                  </h3>
                  <p
                    className="text-sm text-slate-500"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-xs text-emerald-600 underline underline-offset-4"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <div className="space-y-5">
                  <h3
                    className="text-2xl font-light text-ink"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Send a Message
                  </h3>

                  {/* Name */}
                  <div>
                    <label
                      className="block text-xs text-slate-400 mb-1.5 uppercase tracking-widest"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-[#d6ccbc] bg-[#fdfaf6] text-ink text-sm placeholder:text-slate-300 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all"
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      className="block text-xs text-slate-400 mb-1.5 uppercase tracking-widest"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#d6ccbc] bg-[#fdfaf6] text-ink text-sm placeholder:text-slate-300 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all"
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      className="block text-xs text-slate-400 mb-1.5 uppercase tracking-widest"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full px-4 py-3 rounded-xl border border-[#d6ccbc] bg-[#fdfaf6] text-ink text-sm placeholder:text-slate-300 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all resize-none"
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </div>

                  <motion.button
                    onClick={handleSubmit}
                    disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-emerald-600 text-white rounded-xl text-sm font-medium hover:bg-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed transition-all hover:shadow-lg hover:shadow-emerald-200"
                    style={{ fontFamily: "var(--font-body)" }}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {status === "sending" ? (
                      <>
                        <motion.span
                          className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

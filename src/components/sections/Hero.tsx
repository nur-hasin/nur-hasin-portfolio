"use client";
import { motion } from "framer-motion";
import { MapPin, Github, Linkedin, Code2, Play, Pause } from "lucide-react";
import { portfolioData } from "@/lib/data";
import { useState, useRef, useEffect } from "react";

const { personal, stats, video } = portfolioData;

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function Hero() {
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    return () => clearTimer();
  }, []);

  const togglePlay = async () => {
    if (!videoRef.current) return;

    try {
      if (playing) {
        videoRef.current.pause();
        setPlaying(false);
        clearTimer();
      } else {
        await videoRef.current.play(); //npm wait for play
        setPlaying(true);

        intervalRef.current = setInterval(() => {
          if (!videoRef.current) return;
          setCurrentTime(videoRef.current.currentTime);
        }, 500);
      }
    } catch (err) {
      console.warn("Video play interrupted:", err);
    }
  };

  const handleEnded = () => {
    setPlaying(false);
    setCurrentTime(0);
    clearTimer();
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-20 md:pt-24 pb-16 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* ── Left: Text ── */}
          <div>
            {/* Full name — one line, uniform weight & color, no italic */}
            <motion.h1
              className="font-semibold leading-[1.15] whitespace-normal sm:whitespace-nowrap text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(30px, 6vw, 68px)",
              }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Nur Hasin Ahammad
            </motion.h1>

            {/* Subtitle line */}
            <motion.div
              className="flex items-start gap-3 mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              <div className="h-px w-8 bg-emerald-400 mt-3 flex-shrink-0" />
              <span
                className="text-slate-500 text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                CSE@AIUB · Aspiring AI-Powered Software Engineer · Full-Stack
                Developer · Open Source Contributor
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="text-lg text-slate-600 leading-relaxed mb-5 max-w-lg"
              style={{ fontFamily: "var(--font-body)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              I build clean and scalable web applications. My work spans REST
              APIs to game engines, with a strong focus on quality and
              efficiency.
            </motion.p>

            {/* CTAs — LinkedIn first, then GitHub, then LeetCode */}
            <motion.div
              className="flex flex-wrap gap-3 mb-12"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
            >
              <a
                href="#projects"
                className="px-6 py-3 bg-emerald-600 text-white rounded-xl text-sm font-medium hover:bg-emerald-700 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-200"
                style={{ fontFamily: "var(--font-body)" }}
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-white border border-[#d6ccbc] text-ink rounded-xl text-sm font-medium hover:border-emerald-400 hover:text-emerald-700 transition-all hover:-translate-y-0.5"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Get in Touch
              </a>
              {/* LinkedIn first */}
              <a
                href={personal.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white border border-[#d6ccbc] text-slate-500 rounded-xl hover:border-[#0077b5] hover:text-[#0077b5] transition-all hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              {/* GitHub second */}
              <a
                href={personal.links.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white border border-[#d6ccbc] text-slate-500 rounded-xl hover:border-ink hover:text-ink transition-all hover:-translate-y-0.5"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              {/* LeetCode third */}
              <a
                href={personal.links.leetcode}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white border border-[#d6ccbc] text-slate-500 rounded-xl hover:border-amber-500 hover:text-amber-600 transition-all hover:-translate-y-0.5"
                aria-label="LeetCode"
              >
                <Code2 size={18} />
              </a>
            </motion.div>

            {/* Stats row — Hacktoberfest shows 10,000 */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {stats.map((s, i) => {
                const isHacktoberfest = s.label
                  .toLowerCase()
                  .includes("hacktoberfest");
                return (
                  <motion.div
                    key={s.label}
                    className="text-center p-3 rounded-xl bg-white border border-[#d6ccbc] hover:border-emerald-300 transition-colors"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.75 + i * 0.07 }}
                  >
                    <div
                      className="text-xl font-bold text-emerald-700"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {s.suffix && (
                        <span className="text-sm text-slate-400 mr-0.5">
                          {s.suffix}
                        </span>
                      )}
                      {s.value}
                    </div>
                    <div
                      className="text-xs text-slate-400 mt-0.5 leading-tight break-words"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {s.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* ── Right: Video card ── */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {/* Available for opportunities pill — above the video box */}
            <motion.div
              className="flex justify-center mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            ></motion.div>

            <div className="w-full max-w-sm md:max-w-md lg:ml-auto">
              {/* Intro Text */}
              <div className="mb-3 flex justify-center lg:justify-end">
                <div className="w-full max-w-sm text-center">
                  <div className="inline-block px-3 py-1.5 bg-black/5 rounded-lg text-xs text-slate-600">
                    Intro - a glimpse of who I am & what I do
                  </div>
                </div>
              </div>

              {/* Video box — no floating badges, no corner decorations */}
              <div className="relative w-full max-w-sm lg:ml-auto rounded-2xl overflow-hidden border border-[#d6ccbc] shadow-2xl shadow-emerald-50 bg-[#0d1117]">
                {/* Video — object-contain so nothing is cropped */}
                <video
                  ref={videoRef}
                  className="w-full h-auto object-contain bg-black"
                  poster={video.poster}
                  playsInline
                  onEnded={handleEnded}
                  onLoadedMetadata={handleLoadedMetadata}
                >
                  <source src={video.src} type="video/mp4" />
                </video>

                {/* Bottom bar inside the video box */}
                <div className="absolute bottom-0 left-0 right-0 z-20 px-4 py-3 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-between gap-3">
                  {/* Watch Intro / Pause button */}
                  <button
                    onClick={togglePlay}
                    className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl border border-white/60 text-ink hover:bg-white transition-all shadow-sm text-sm font-medium"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {playing ? <Pause size={15} /> : <Play size={15} />}
                    {playing ? "Pause" : "Watch Intro"}
                  </button>

                  {/* Elapsed / total — no resolution */}
                  <span
                    className="text-xs text-white/80 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg tabular-nums"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {formatTime(currentTime)} /{" "}
                    {duration > 0 ? formatTime(duration) : video.duration}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

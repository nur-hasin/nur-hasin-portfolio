"use client";

export default function Footer() {
  return (
    <footer className="bg-[#f5f0e8] px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-5">
        {/* Center divider line only */}
        <div className="w-full h-px bg-[#d6ccbc]" />
        <p
          className="text-xs text-slate-400"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          © {new Date().getFullYear()} Nur Hasin Ahammad. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

interface SectionLabelProps {
  num: string;
  title: string;
  subtitle?: string;
}

export default function SectionLabel({
  num,
  title,
  subtitle,
}: SectionLabelProps) {
  return (
    <div className="mb-14">
      <div className="flex items-center gap-3 mb-3">
        <span
          className="font-mono text-xs text-emerald-600 tracking-widest uppercase"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {num}
        </span>
        <div className="h-px w-12 bg-emerald-200" />
      </div>
      <h2
        className="text-4xl md:text-5xl font-light text-ink leading-tight"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-3 text-slate-500 text-sm sm:text-base leading-relaxed break-words"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

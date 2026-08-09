import SplitReveal from './SplitReveal'

export default function SectionLabel({ index, title, detail }) {
  return (
    <div className="mb-10 flex items-end justify-between gap-6 md:mb-16">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-accent">
          {index}
        </p>
        <SplitReveal
          as="h2"
          className="mt-3 font-display text-[clamp(2.5rem,7vw,6.5rem)] uppercase leading-[0.95] tracking-tight"
        >
          {title}
        </SplitReveal>
      </div>
      {detail && (
        <p className="hidden max-w-[16rem] text-right font-mono text-xs leading-relaxed text-muted md:block">
          {detail}
        </p>
      )}
    </div>
  )
}

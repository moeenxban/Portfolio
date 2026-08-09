export default function Marquee({ items, className = '' }) {
  const doubled = [...items, ...items]
  return (
    <div className={'overflow-hidden border-y border-line py-5 md:py-6 ' + className}>
      <div className="marquee-track flex w-max items-center whitespace-nowrap will-change-transform">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center font-display text-2xl text-fg/70 md:text-4xl"
          >
            <span className="px-6 md:px-10">{item}</span>
            <span className="h-2 w-2 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  )
}

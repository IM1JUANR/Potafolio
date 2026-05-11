const baseItems = [
  { text: 'Web Developer',   cls: '' },
  { dot: true },
  { text: 'React · Node.js', cls: 'marquee__item--outline' },
  { dot: true },
  { text: 'IM1JUAN',         cls: 'marquee__item--accent' },
  { dot: true },
  { text: 'Multimedia Eng',  cls: '' },
  { dot: true },
  { text: 'REST APIs · AWS', cls: 'marquee__item--outline' },
  { dot: true },
  { text: 'MongoDB · SQL',   cls: '' },
  { dot: true },
]

export default function Marquee({ reverse = false }) {
  const track = [...baseItems, ...baseItems]

  return (
    <div className="marquee" aria-hidden="true">
      <div className={`marquee__track ${reverse ? 'marquee__track--rev' : ''}`}>
        {track.map((item, i) =>
          item.dot
            ? <div key={i} className="marquee__dot" />
            : <span key={i} className={`marquee__item ${item.cls}`}>{item.text}</span>
        )}
      </div>
    </div>
  )
}

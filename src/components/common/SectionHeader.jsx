export default function SectionHeader({ tag, title, subtitle, light = false, center = true }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {tag && <span className="tag mb-4 inline-block">{tag}</span>}
      <h2 className={`font-serif text-4xl md:text-5xl font-bold mb-4 leading-tight ${light ? 'text-white' : 'text-dark-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${center ? 'mx-auto' : ''} leading-relaxed ${light ? 'text-white/60' : 'text-dark-400'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

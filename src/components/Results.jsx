function Section({ title, items }){
  if (!items || items.length === 0) return null
  return (
    <div>
      <h3 className="text-lg font-semibold text-white/90 mb-3">{title}</h3>
      <ul className="space-y-2 list-disc list-inside text-blue-100/90">
        {items.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  )
}

function Results({ data, onReset }){
  if (!data) return null
  return (
    <div className="relative z-10 mt-8 bg-slate-900/50 border border-blue-400/20 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white">Your tailored plan</h2>
        <button onClick={onReset} className="text-sm px-3 py-1 rounded bg-slate-800 text-blue-100 border border-slate-700 hover:bg-slate-700">Start over</button>
      </div>

      {data.profile_summary && (
        <div className="mb-6 text-sm text-blue-200/80">
          <span className="font-semibold text-white/80">Profile: </span>
          {Object.entries(data.profile_summary).map(([k,v]) => v && (
            <span key={k} className="mr-3"><span className="capitalize text-blue-100/70">{k.replace('_',' ')}:</span> {v}</span>
          ))}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <Section title="Makeup" items={data.makeup} />
        <Section title="Skincare" items={data.skincare} />
        <Section title="Clothing" items={data.clothing} />
        <Section title="Accessories" items={data.accessories} />
      </div>
    </div>
  )
}

export default Results

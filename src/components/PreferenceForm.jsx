import { useState } from 'react'

const toneOptions = ['Fair','Light','Medium','Tan','Deep']
const undertones = ['Cool','Warm','Neutral']
const bodyTypes = ['Hourglass','Pear','Rectangle','Inverted_Triangle']
const styles = ['Minimal','Classic','Streetwear','Edgy','Boho']
const occasions = ['Work','Casual','Party','Formal']
const accessories = ['Gold','Silver','Pearls','Minimalist']
const budgets = ['Budget','Mid','Premium']

function Chip({ label, selected, onClick }){
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-1 rounded-full border text-sm transition-all ${selected ? 'bg-sky-500 text-white border-sky-400' : 'bg-slate-800/50 text-blue-100 border-slate-700 hover:bg-slate-800'}`}
    >
      {label.replace('_',' ')}
    </button>
  )
}

function PreferenceForm({ onResults }) {
  const [form, setForm] = useState({
    name: '',
    body_type: '',
    skin_tone: '',
    undertone: '',
    style_preferences: [],
    occasions: [],
    accessories_pref: [],
    budget: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const toggleArray = (key, value) => {
    setForm(prev => {
      const arr = new Set(prev[key])
      if (arr.has(value)) arr.delete(value)
      else arr.add(value)
      return { ...prev, [key]: Array.from(arr) }
    })
  }

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/recommend`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed to get recommendations')
      const data = await res.json()
      onResults(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={submit} className="relative z-10 grid md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <label className="block">
          <span className="text-sm text-blue-100">Name</span>
          <input
            value={form.name}
            onChange={e=>setForm(v=>({ ...v, name: e.target.value }))}
            className="mt-1 w-full rounded-lg bg-slate-900/60 border border-slate-700 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Your name"
          />
        </label>

        <div>
          <span className="text-sm text-blue-100">Skin tone</span>
          <div className="mt-2 flex flex-wrap gap-2">
            {toneOptions.map(t => (
              <Chip key={t} label={t} selected={form.skin_tone===t.toLowerCase()} onClick={()=>setForm(v=>({ ...v, skin_tone: t.toLowerCase() }))} />
            ))}
          </div>
        </div>

        <div>
          <span className="text-sm text-blue-100">Undertone</span>
          <div className="mt-2 flex flex-wrap gap-2">
            {undertones.map(t => (
              <Chip key={t} label={t} selected={form.undertone===t.toLowerCase()} onClick={()=>setForm(v=>({ ...v, undertone: t.toLowerCase() }))} />
            ))}
          </div>
        </div>

        <div>
          <span className="text-sm text-blue-100">Body type</span>
          <div className="mt-2 flex flex-wrap gap-2">
            {bodyTypes.map(t => (
              <Chip key={t} label={t} selected={form.body_type===t.toLowerCase()} onClick={()=>setForm(v=>({ ...v, body_type: t.toLowerCase() }))} />
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <span className="text-sm text-blue-100">Style preferences</span>
          <div className="mt-2 flex flex-wrap gap-2">
            {styles.map(s => (
              <Chip key={s} label={s} selected={form.style_preferences.includes(s.toLowerCase())} onClick={()=>toggleArray('style_preferences', s.toLowerCase())} />
            ))}
          </div>
        </div>
        <div>
          <span className="text-sm text-blue-100">Occasions</span>
          <div className="mt-2 flex flex-wrap gap-2">
            {occasions.map(s => (
              <Chip key={s} label={s} selected={form.occasions.includes(s.toLowerCase())} onClick={()=>toggleArray('occasions', s.toLowerCase())} />
            ))}
          </div>
        </div>
        <div>
          <span className="text-sm text-blue-100">Accessories</span>
          <div className="mt-2 flex flex-wrap gap-2">
            {accessories.map(s => (
              <Chip key={s} label={s} selected={form.accessories_pref.includes(s.toLowerCase())} onClick={()=>toggleArray('accessories_pref', s.toLowerCase())} />
            ))}
          </div>
        </div>
        <div>
          <span className="text-sm text-blue-100">Budget</span>
          <div className="mt-2 flex flex-wrap gap-2">
            {budgets.map(s => (
              <Chip key={s} label={s} selected={form.budget===s.toLowerCase()} onClick={()=>setForm(v=>({ ...v, budget: s.toLowerCase() }))} />
            ))}
          </div>
        </div>
        <div className="pt-2">
          <button disabled={loading} className="w-full md:w-auto px-5 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-white font-semibold disabled:opacity-60">
            {loading ? 'Analyzing...' : 'Get my recommendations'}
          </button>
          {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
        </div>
      </div>
    </form>
  )
}

export default PreferenceForm

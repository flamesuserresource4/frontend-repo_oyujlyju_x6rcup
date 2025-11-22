import { useState } from 'react'
import Hero from './components/Hero'
import PreferenceForm from './components/PreferenceForm'
import Results from './components/Results'

function App() {
  const [results, setResults] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Hero />

      <main className="relative max-w-6xl mx-auto px-6 md:px-10 pb-20 -mt-10">
        <div className="relative z-10 bg-slate-900/50 border border-blue-400/20 rounded-3xl p-6 md:p-8 shadow-[0_0_50px_rgba(56,189,248,0.15)]">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Tell us about you</h2>
          <p className="text-blue-200/80 mb-6">We’ll analyze your profile to craft a personalized beauty and style plan.</p>
          <PreferenceForm onResults={setResults} />
          <Results data={results} onReset={()=>setResults(null)} />
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 text-blue-100/90">
          <div className="bg-slate-900/40 rounded-2xl p-5 border border-blue-400/10">
            <h3 className="font-semibold text-white mb-1">On-trend</h3>
            <p className="text-sm">Our suggestions reflect current looks across beauty and fashion.</p>
          </div>
          <div className="bg-slate-900/40 rounded-2xl p-5 border border-blue-400/10">
            <h3 className="font-semibold text-white mb-1">Made for you</h3>
            <p className="text-sm">We tailor every recommendation to your tone, shape, and style.</p>
          </div>
          <div className="bg-slate-900/40 rounded-2xl p-5 border border-blue-400/10">
            <h3 className="font-semibold text-white mb-1">Actionable</h3>
            <p className="text-sm">Clear tips you can use today for skincare, makeup, and outfits.</p>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-800/80 py-6 text-center text-blue-200/70">
        <p>StyleSense AI — personalized beauty and wardrobe guidance</p>
      </footer>
    </div>
  )
}

export default App

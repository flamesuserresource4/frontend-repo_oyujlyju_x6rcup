import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Iridescent overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-slate-900/80" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        <div className="backdrop-blur-sm bg-slate-900/40 border border-blue-400/20 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_0_40px_rgba(56,189,248,0.15)]">
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm text-blue-200/80 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-400/20">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            AI-powered personal styling
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Get tailored beauty and style guidance made just for you
          </h1>
          <p className="mt-3 md:mt-4 text-blue-100/90 text-sm sm:text-base md:text-lg max-w-2xl">
            Share your body type, skin tone, and vibe. We’ll craft makeup, skincare, clothing, and accessory picks that align with trends and your taste.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero

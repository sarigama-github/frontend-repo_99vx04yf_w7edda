import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-70">
        <Spline scene="https://prod.spline.design/c1w2QYixcPkptHWE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 sm:pt-32 sm:pb-28 lg:pt-40 lg:pb-40">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 ring-1 ring-rose-200 text-rose-800 pointer-events-none">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Live OS for luxury med spas
            </div>
            <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-rose-950 leading-tight">
              Elevate every treatment with a beautiful operating system
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-rose-900/80 max-w-xl">
              From bookings to memberships, LuxeGlow unifies your client journey in a single elegant platform.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a href="#cta" className="inline-flex justify-center rounded-full bg-rose-600 text-white px-6 py-3 font-medium shadow-lg shadow-rose-200 hover:bg-rose-700 transition-colors">
                Get a Demo
              </a>
              <a href="#features" className="inline-flex justify-center rounded-full bg-white/80 backdrop-blur px-6 py-3 font-medium text-rose-900 ring-1 ring-rose-200 hover:bg-white">
                Explore Platform
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-rose-900/70">
              {[
                ['+24%', 'Retention'],
                ['2x', 'Bookings'],
                ['98%', 'Satisfaction'],
                ['<7d', 'Onboarding'],
              ].map(([stat, label]) => (
                <div key={label} className="rounded-2xl bg-white/70 backdrop-blur p-4 ring-1 ring-rose-200">
                  <div className="text-2xl font-semibold text-rose-950">{stat}</div>
                  <div className="text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}

export default Hero

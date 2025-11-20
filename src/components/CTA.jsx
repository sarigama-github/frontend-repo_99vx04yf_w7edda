function CTA() {
  return (
    <section id="cta" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-600 via-rose-500 to-amber-400 text-white p-8 sm:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.25),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.25),transparent_35%)]" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Bring LuxeGlow to your spa</h3>
              <p className="mt-3 text-white/90 max-w-prose">We onboard your team in under a week with white-glove setup and training. See how a luxury OS can transform your day-to-day.</p>
            </div>
            <form className="grid sm:grid-cols-3 gap-3">
              <input type="email" required placeholder="Work email" className="col-span-2 rounded-full px-4 py-3 text-rose-900 placeholder:text-rose-900/60 focus:outline-none" />
              <button className="rounded-full bg-rose-900 px-6 py-3 font-medium hover:bg-rose-950 transition-colors">Request Demo</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

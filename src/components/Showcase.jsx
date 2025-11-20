function Showcase() {
  return (
    <section id="treatments" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-rose-100 text-rose-800 px-3 py-1">
              Featured Workflows
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-rose-950">Delightful flows from consult to aftercare</h2>
            <p className="mt-3 text-rose-900/80">Package treatments, sell retail, and capture before/after seamlessly. LuxeGlow removes friction so your team can focus on care.</p>
            <ul className="mt-6 space-y-3 text-rose-900/80">
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" /> Smart intake with e-consent</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-amber-500" /> Chairside product recommendations</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-rose-500" /> Photo-safe before/after gallery</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              ['Gentle Peel', 'Refine texture & glow'],
              ['Hydra Infusion', 'Deep hydration therapy'],
              ['Laser Clear', 'Blemish & tone care'],
              ['Sculpt RF', 'Lift & contour'],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-3xl overflow-hidden ring-1 ring-rose-200 bg-gradient-to-br from-rose-50 to-amber-50">
                <div className="aspect-[4/3] bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM2MjQzMTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-90" />
                <div className="p-4">
                  <h4 className="font-semibold text-rose-950">{title}</h4>
                  <p className="text-sm text-rose-900/80">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Showcase

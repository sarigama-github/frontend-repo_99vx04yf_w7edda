import { Sparkles, CalendarRange, Gauge, Users } from 'lucide-react'

function Features() {
  const items = [
    {
      icon: <CalendarRange className="h-5 w-5" />,
      title: 'Unified Scheduling',
      desc: 'Beautiful calendars, automated reminders, and seamless room assignments.',
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: 'Client Journeys',
      desc: 'Personalized intake, consent, and aftercare — all in one place.',
    },
    {
      icon: <Gauge className="h-5 w-5" />,
      title: 'Real-time Analytics',
      desc: 'Track utilization, conversion, and revenue with live dashboards.',
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: 'Memberships & Upsells',
      desc: 'Design memberships and curated product pairings that sell themselves.',
    },
  ]

  return (
    <section id="features" className="relative py-20 sm:py-28 bg-gradient-to-b from-white via-rose-50/50 to-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-rose-950">A spa OS that feels like luxury</h2>
          <p className="mt-3 text-rose-900/80 max-w-xl">Crafted for modern medispa teams who value design, simplicity, and results.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="rounded-3xl bg-white p-6 ring-1 ring-rose-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-700">
                {item.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-rose-950">{item.title}</h3>
              <p className="mt-2 text-sm text-rose-900/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

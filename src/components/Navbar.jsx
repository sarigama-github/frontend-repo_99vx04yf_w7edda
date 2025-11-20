import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Platform', href: '#features' },
    { label: 'Treatments', href: '#treatments' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/60 border-b border-rose-100/60">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-rose-300 via-amber-200 to-rose-400 shadow-inner" />
          <span className="text-lg sm:text-xl font-semibold tracking-tight text-rose-900">LuxeGlow Med Spa OS</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-rose-900/80 hover:text-rose-900 transition-colors">
              {item.label}
            </a>
          ))}
          <a
            href="#cta"
            className="inline-flex items-center rounded-full bg-rose-600 text-white px-5 py-2.5 font-medium shadow-lg shadow-rose-200 hover:bg-rose-700 transition-colors"
          >
            Book Consultation
          </a>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-full p-2 text-rose-900 hover:bg-rose-100"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-rose-100 bg-white/70 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6 py-4 grid gap-3">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-rose-900/80 hover:text-rose-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-full bg-rose-600 text-white px-5 py-2.5 font-medium shadow-lg shadow-rose-200 hover:bg-rose-700 transition-colors"
            >
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

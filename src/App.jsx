import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-rose-900">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(60%_60%_at_10%_10%,rgba(253,164,175,0.15),transparent),radial-gradient(50%_50%_at_90%_0%,rgba(251,191,36,0.12),transparent)]" />

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <CTA />
      </main>

      <footer className="relative border-t border-rose-100 bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-rose-900/70">© {new Date().getFullYear()} LuxeGlow Med Spa OS. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-rose-950">Privacy</a>
            <a href="#" className="hover:text-rose-950">Terms</a>
            <a href="/test" className="hover:text-rose-950">System Check</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

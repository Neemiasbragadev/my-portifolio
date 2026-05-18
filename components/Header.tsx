'use client'
import { Code, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#about', label: 'Sobre' },
  { href: '#experience', label: 'Experiência' },
  { href: '#skills', label: 'Habilidades' },
  { href: '#projects', label: 'Projetos' },
  { href: '#education', label: 'Formação' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.35 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="glass-header fixed w-full top-0 left-0 z-20 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-400 to-purple-400 shadow-md">
            <Code className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold neon-text">Neemias Braga Kelly dos Santos</h1>
            <p className="text-sm text-gray-300">Desenvolvedor PHP / FullStack • Laravel • MySQL</p>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-4 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-200 ${
                activeSection === link.href.slice(1)
                  ? 'text-cyan-300 font-semibold'
                  : 'text-gray-300 hover:text-cyan-200'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`btn-neon text-sm ${
              activeSection === 'contact' ? 'border-cyan-300/40' : ''
            }`}
          >
            Contato
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-300 hover:text-cyan-300 transition-colors p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass-header border-t border-white/5 px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm py-1 transition-colors ${
                activeSection === link.href.slice(1)
                  ? 'text-cyan-300 font-semibold'
                  : 'text-gray-300 hover:text-cyan-200'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="btn-neon text-sm text-center justify-center"
          >
            Contato
          </a>
        </div>
      )}
    </header>
  )
}


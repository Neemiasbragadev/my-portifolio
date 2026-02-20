import { Code } from 'lucide-react'

export default function Header() {
  return (
    <header className="glass-header fixed w-full top-0 left-0 z-20 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-400 to-purple-400 shadow-md">
            <Code className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold neon-text">Neemias Braga</h1>
            <p className="text-sm text-gray-300">Desenvolvedor FullStack</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-4 items-center">
          <a href="#about" className="text-sm text-gray-200 hover:underline">Sobre</a>
          <a href="#experience" className="text-sm text-gray-200 hover:underline">Experiência</a>
          <a href="#skills" className="text-sm text-gray-200 hover:underline">Habilidades</a>
          <a href="#contact" className="btn-neon text-sm">Contato</a>
        </nav>
      </div>
    </header>
  )
}


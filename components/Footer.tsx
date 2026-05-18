import { Github, Linkedin, Mail, Code } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-4">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-400 to-purple-400 shadow-md">
              <Code className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm neon-text font-semibold">Neemias Braga</span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/neemiasbragadev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/neemiasbragadev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyan-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:neemiasbragadev@gmail.com"
              className="text-gray-500 hover:text-cyan-300 transition-colors"
              aria-label="Enviar e-mail"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Neemias Braga Kelly dos Santos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

import { Mail, Phone, Linkedin, Github, MapPin, Globe } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="glass-card p-6 rounded-xl transition-colors duration-200">
      <h2 className="text-2xl font-bold mb-4 text-gray-100">Contato</h2>
      <ul className="space-y-3 text-gray-300">
        <li className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-cyan-300" />
          <span>(24) 99263-3921</span>
        </li>
        <li className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-cyan-300" />
          <span>neemiasbragadev@gmail.com</span>
        </li>
        <li className="flex items-center gap-3">
          <Linkedin className="w-5 h-5 text-cyan-300" />
          <a href="https://www.linkedin.com/in/neemiasbragadev/" className="text-cyan-200 underline">linkedin.com/in/neemiasbragadev</a>
        </li>
        <li className="flex items-center gap-3">
          <Github className="w-5 h-5 text-cyan-300" />
          <a href="https://github.com/neemiasbragadev" className="text-cyan-200 underline">github.com/neemiasbragadev</a>
        </li>
        <li className="flex items-center gap-3">
          <Globe className="w-5 h-5 text-cyan-300" />
          <a href="https://neemiasbragadev.vercel.app/" className="text-cyan-200 underline">neemiasbragadev.vercel.app</a>
        </li>
        <li className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-cyan-300" />
          <span>Rio de Janeiro (RJ) • Independência - Mendes</span>
        </li>
      </ul>

      <div className="mt-4 flex flex-wrap gap-3">
        <a className="btn-neon" href="mailto:neemiasbragadev@gmail.com">Enviar E-mail</a>
        <a className="btn-neon" href="https://www.linkedin.com/in/neemiasbragadev/">LinkedIn</a>
        <a className="btn-neon" href="https://github.com/neemiasbragadev">GitHub</a>
      </div>
    </section>
  )
}


import { GraduationCap } from 'lucide-react'

export default function Education() {
  return (
    <section className="mb-12 glass-card p-6 rounded-xl transition-colors duration-200">
      <div className="flex items-center mb-4">
        <GraduationCap className="w-6 h-6 mr-2 text-cyan-300" />
        <h2 className="text-2xl font-bold text-gray-100">Formação Acadêmica</h2>
      </div>
      <ul className="space-y-2 text-gray-300">
        <li className="flex items-center">
          <span className="w-3 h-3 bg-cyan-300 rounded-full mr-2"></span>
          Graduação em Análise e Desenvolvimento de Sistemas — Unicesumar
        </li>
        <li className="flex items-center">
          <span className="w-3 h-3 bg-cyan-300 rounded-full mr-2"></span>
          Técnico em Informática para Internet — Instituto Federal do Rio de Janeiro (IFRJ)
        </li>
      </ul>
    </section>
  )
}


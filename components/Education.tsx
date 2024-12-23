import { GraduationCap } from 'lucide-react'

export default function Education() {
  return (
    <section className="mb-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-colors duration-200">
      <div className="flex items-center mb-4">
        <GraduationCap className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Formação Acadêmica</h2>
      </div>
      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
        <li className="flex items-center">
          <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
          Grad. em Analise e Desenvolvimento de Sistemas: Unicesumar
        </li>
        <li className="flex items-center">
          <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
          Técnico em Informática para internet: Instituto Federal do Rio de Janeiro (IFRJ)
        </li>
        <li className="flex items-center">
          <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
          Ensino Médio: Colégio Estadual Joao Kopke
        </li>
      </ul>
    </section>
  )
}


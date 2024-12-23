import { Cpu } from 'lucide-react'

export default function Skills() {
  return (
    <section className="mb-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-colors duration-200">
      <div className="flex items-center mb-4">
        <Cpu className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Habilidades Técnicas</h2>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
        <li className="flex items-center">
          <span className="w-4 h-4 bg-blue-400 rounded-full mr-2"></span>
          <strong className="mr-2">Linguagens:</strong> PHP, Java, JavaScript
        </li>
        <li className="flex items-center">
          <span className="w-4 h-4 bg-purple-400 rounded-full mr-2"></span>
          <strong className="mr-2">Frameworks:</strong> Laravel
        </li>
        <li className="flex items-center">
          <span className="w-4 h-4 bg-green-400 rounded-full mr-2"></span>
          <strong className="mr-2">Plataformas:</strong> VSCode, NetBeans
        </li>
        <li className="flex items-center">
          <span className="w-4 h-4 bg-yellow-400 rounded-full mr-2"></span>
          <strong className="mr-2">Banco de Dados:</strong> SQL, MySQL, PL/SQL
        </li>
        <li className="flex items-center">
          <span className="w-4 h-4 bg-red-400 rounded-full mr-2"></span>
          <strong className="mr-2">Front-End:</strong> HTML, CSS, JavaScript, jQuery, Ajax
        </li>
        <li className="flex items-center">
          <span className="w-4 h-4 bg-indigo-400 rounded-full mr-2"></span>
          <strong className="mr-2">Metodologias:</strong> Scrum, ITIL
        </li>
      </ul>
    </section>
  )
}


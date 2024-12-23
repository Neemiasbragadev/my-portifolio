import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-colors duration-200">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Contato</h2>
      <ul className="space-y-3 text-gray-600 dark:text-gray-300">
        <li className="flex items-center">
          <Phone className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
          (24) 99263-3921
        </li>
        <li className="flex items-center">
          <Mail className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
          neemiasbragadev@gmail.com
        </li>
        <li className="flex items-center">
          <Linkedin className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
          <a href="https://www.linkedin.com/in/neemiasbragadev/" className="text-blue-600 dark:text-blue-400 hover:underline">linkedin.com/in/neemiasbragadev</a>
        </li>
        <li className="flex items-center">
          <Github className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
          <a href="https://github.com/neemiasbragadev" className="text-blue-600 dark:text-blue-400 hover:underline">github.com/neemiasbragadev</a>
        </li>
        <li className="flex items-center">
          <MapPin className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
          Independência, Mendes, RJ
        </li>
      </ul>
    </section>
  )
}


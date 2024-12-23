import { Code } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 text-white py-6">
      <div className="container mx-auto px-4 flex items-center">
        <Code className="w-10 h-10 mr-4" />
        <div>
          <h1 className="text-3xl font-bold">Neemias Braga Kelly dos Santos</h1>
          <p className="text-xl">Desenvolvedor FullStack | PHP | Laravel | Java</p>
        </div>
      </div>
    </header>
  )
}


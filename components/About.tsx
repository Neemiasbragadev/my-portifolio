import { User } from 'lucide-react'
import Image from 'next/image'
import PerfilLinkedin from '/public/imagens/PerfilLinkedin.jpeg'

export default function About() {
  return (
    <section className="mb-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-colors duration-200">
      <div className="flex items-center mb-4">
        <User className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Sobre Mim</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-6 items-start mb-6">
        <Image
          src={PerfilLinkedin}
          alt="Profile photo"
          width={200}
          height={200}
          className="rounded-full shadow-lg"
          priority
        />
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Graduado em Analise e Desenvolvimento, sou um profissional com experiência em desenvolvimento de software, gestão de projetos e liderança de equipes. Especializado em
          PHP, Laravel, SQL, Análise de Requisitos e tecnologias de front-end, busco oportunidades para aplicar meus
          conhecimentos e habilidades, contribuindo para o crescimento e sucesso das organizações.
        </p>
      </div>
    </section>
  )
}


import { User } from 'lucide-react'
import Image from 'next/image'
import PerfilLinkedin from '/public/imagens/PerfilLinkedin.jpeg'

export default function About() {
  return (
    <section id="about" className="mb-12 glass-card p-6 rounded-xl transition-colors duration-200">
      <div className="flex items-center mb-4">
        <User className="w-6 h-6 mr-2 text-cyan-300" />
        <h2 className="text-2xl font-bold text-gray-100">Sobre Mim</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-6 items-start mb-6">
        <Image
          src={PerfilLinkedin}
          alt="Profile photo"
          width={200}
          height={200}
          className="rounded-full shadow-xl border border-white/5"
          priority
        />
        <div>
          <p className="text-gray-300 leading-relaxed mb-4">
            Desenvolvedor PHP / FullStack com mais de 5 anos de experiência em sistemas web voltados para órgãos públicos e empresas privadas. Atuação destacada no Exército Brasileiro, com foco em
            Laravel, PHP e MySQL, além de boas práticas de arquitetura e segurança de software. Tenho experiência com metodologias ágeis (Scrum) e gestão de serviços de TI (ITIL), com forte habilidade
            em analisar, otimizar e integrar sistemas legados com novas tecnologias, garantindo eficiência e confiabilidade.
          </p>
          <div className="flex gap-3">
            <a href="#contact" className="btn-neon">Contratar</a>
            <a href="#experience" className="text-sm text-gray-300 underline">Ver Experiência</a>
          </div>
        </div>
      </div>
    </section>
  )
}


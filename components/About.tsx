import { User, Download, Calendar, Building2, Award } from 'lucide-react'
import Image from 'next/image'
import PerfilLinkedin from '/public/imagens/PerfilLinkedin.jpeg'

const metrics = [
  { icon: Calendar, value: '5+', label: 'Anos de Experiência', color: 'text-cyan-300' },
  { icon: Building2, value: '3', label: 'Empresas / Órgãos', color: 'text-purple-300' },
  { icon: Award, value: '20+', label: 'Sistemas Entregues', color: 'text-emerald-300' },
]

export default function About() {
  return (
    <section id="about" className="mb-12 glass-card p-6 rounded-xl transition-colors duration-200">
      <div className="flex items-center mb-6">
        <User className="w-6 h-6 mr-2 text-cyan-300" />
        <h2 className="text-2xl font-bold text-gray-100">Sobre Mim</h2>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="p-3 rounded-lg border border-white/5 bg-white/[0.02] text-center"
          >
            <m.icon className={`w-5 h-5 mx-auto mb-1 ${m.color}`} />
            <p className={`text-2xl font-bold ${m.color}`}>{m.value}</p>
            <p className="text-xs text-gray-400 mt-0.5 leading-tight">{m.label}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        <Image
          src={PerfilLinkedin}
          alt="Foto de perfil de Neemias Braga"
          width={200}
          height={200}
          className="rounded-full shadow-xl border border-white/5 shrink-0"
          priority
        />
        <div>
          <p className="text-gray-300 leading-relaxed mb-5">
            Desenvolvedor Backend Sênior com mais de 5 anos de experiência em sistemas críticos de grande escala, atualmente atuando no TRF2. Forte atuação em arquitetura de software, APIs REST,
            otimização de performance e modernização de sistemas legados. Experiência com PHP, Laravel, Symfony, Java e Spring Boot, além de integrações com serviços governamentais.
            Atuação com metodologias ágeis (Scrum), testes automatizados (PHPUnit), code review e boas práticas de arquitetura (SOLID, Clean Code).
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="btn-neon">Contatar</a>
            <a
              href="/cv-neemias-braga.pdf"
              download
              className="btn-neon"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
            <a href="#experience" className="text-sm text-gray-400 underline self-center">
              Ver Experiência
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


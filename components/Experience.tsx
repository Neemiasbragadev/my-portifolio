import { Briefcase } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" className="mb-12 glass-card p-6 rounded-xl transition-colors duration-200">
      <div className="flex items-center mb-4">
        <Briefcase className="w-6 h-6 mr-2 text-cyan-300" />
        <h2 className="text-2xl font-bold text-gray-100">Experiência Profissional</h2>
      </div>
      <div className="mb-6 space-y-4">
        <article className="p-4 bg-transparent border-l-2 border-cyan-400/30 rounded pl-4">
          <h3 className="text-lg font-semibold text-cyan-200">Analista Desenvolvedor PHP</h3>
          <p className="text-sm text-gray-300">Hospital Central do Exército - Divisão de TI | Fev 2023 - Presente</p>
          <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
            <li>Desenvolvimento e manutenção de Sistemas Web utilizando PHP, Laravel, HTML, CSS e JavaScript</li>
            <li>Correção de sistemas para atender às necessidades dos usuários</li>
            <li>Análise de desempenho e resolução de problemas técnicos</li>
          </ul>
        </article>

        <article className="p-4 bg-transparent border-l-2 border-purple-400/30 rounded pl-4">
          <h3 className="text-lg font-semibold text-purple-200">Técnico em Informática</h3>
          <p className="text-sm text-gray-300">Deposito Central do Exército - Divisão de TI | Mar 2018 - Jan 2023</p>
          <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
            <li>Atendimento direto ao usuário e suporte técnico</li>
            <li>Montagem e manutenção de computadores</li>
            <li>Criação e desenvolvimento de websites</li>
          </ul>
        </article>
      </div>
    </section>
  )
}


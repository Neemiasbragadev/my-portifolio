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
          <h3 className="text-lg font-semibold text-cyan-200">Analista Programador PHP Sênior</h3>
          <p className="text-sm text-gray-300">BASIS (alocado no TRF2) | Fev 2023 - Nov 2025</p>
          <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
            <li>Desenvolvimento e manutenção de sistemas web utilizando PHP</li>
            <li>Correção de sistemas para atender às necessidades dos usuários</li>
            <li>Suporte e assistência à equipe de análise de sistemas</li>
            <li>Análise de desempenho e resolução de problemas técnicos</li>
          </ul>
        </article>

        <article className="p-4 bg-transparent border-l-2 border-purple-400/30 rounded pl-4">
          <h3 className="text-lg font-semibold text-purple-200">Analista Desenvolvedor FullStack</h3>
          <p className="text-sm text-gray-300">Hospital Central do Exército - Divisão de TI | Fev 2023 - Nov 2025</p>
          <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
            <li>Desenvolvimento e manutenção de sistemas web com PHP, Laravel, HTML, CSS e JavaScript</li>
            <li>Documentação de processos e estudo de viabilidade técnica para novos sistemas</li>
            <li>Implementação de integrações com sistemas externos, atendendo exigências regulatórias</li>
            <li>Entrega de funcionalidades em PHP/Laravel, aumentando a eficiência de processos internos em 30%</li>
            <li>Otimização de rotinas críticas e banco de dados, reduzindo tempo de execução em até 80%</li>
          </ul>
        </article>

        <article className="p-4 bg-transparent border-l-2 border-emerald-400/30 rounded pl-4">
          <h3 className="text-lg font-semibold text-emerald-200">Técnico em Informática</h3>
          <p className="text-sm text-gray-300">Depósito Central do Exército - Divisão de TI | Mar 2018 - Jan 2023</p>
          <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
            <li>Suporte técnico e manutenção de equipamentos</li>
            <li>Criação de websites e sistemas internos com PHP e MySQL</li>
            <li>Gerenciamento de rede e configuração de ambientes de trabalho</li>
            <li>Desenvolvimento de soluções para controle interno e gestão de dados</li>
          </ul>
        </article>
      </div>
    </section>
  )
}


import { Briefcase } from 'lucide-react'

const experiences = [
  {
    role: 'Analista Programador PHP Sênior',
    company: 'BASIS – Alocado no TRF2 (sede administrativa)',
    period: 'Nov 2025 – Atualmente',
    color: 'cyan',
    items: [
      'Desenvolvimento e evolução de sistema governamental de missão crítica (TRF2), atendendo alto volume de usuários e regras complexas de negócio',
      'Otimização de queries complexas e rotinas de banco de dados (MySQL/PL-SQL), reduzindo tempo de resposta e melhorando performance geral da aplicação',
      'Atuação direta na análise e resolução de problemas em produção (debugging avançado e troubleshooting)',
      'Refatoração de código legado aplicando boas práticas de arquitetura (SOLID, Clean Code)',
      'Implementação e consumo de APIs REST integrando serviços externos governamentais',
      'Manutenção e evolução de módulos backend em PHP utilizando Laravel e componentes do ecossistema Symfony',
      'Participação ativa em code reviews e padronização de código da equipe',
      'Escrita e manutenção de testes automatizados (PHPUnit)',
      'Atuação em ambiente de alta criticidade com impacto direto em serviços públicos, garantindo estabilidade, segurança e confiabilidade',
      'Aplicação de conceitos de arquitetura compatíveis com ecossistemas modernos (incluindo padrões utilizados em Java/Spring)',
    ],
  },
  {
    role: 'Analista Desenvolvedor FullStack',
    company: 'Hospital Central do Exército – Divisão de TI',
    period: 'Fev 2023 – Nov 2025',
    color: 'purple',
    items: [
      'Contratado para atuação com desenvolvimento backend em Java, com participação em atividades de arquitetura e construção de serviços',
      'Desenvolvimento e manutenção de sistemas web utilizando PHP, Laravel, Symfony, HTML, CSS e JavaScript',
      'Aplicação de conceitos de orientação a objetos, arquitetura em camadas e boas práticas compatíveis com o ecossistema Java (SOLID, Clean Code)',
      'Desenvolvimento e estruturação de APIs REST seguindo boas práticas de mercado',
      'Participação na manutenção de aplicações backend utilizando arquitetura baseada em frameworks PHP modernos, incluindo Symfony',
      'Implementação de integrações com o sistema gov.br, garantindo conformidade com exigências regulatórias',
      'Desenvolveu funcionalidades que aumentaram a eficiência dos processos internos em 30%',
      'Otimização de rotinas críticas e banco de dados, reduzindo tempo de execução em até 80%',
      'Análise de desempenho, resolução de problemas técnicos e documentação de processos',
    ],
  },
  {
    role: 'Técnico em Informática',
    company: 'Depósito Central do Exército – Divisão de TI',
    period: 'Mar 2018 – Jan 2023',
    color: 'emerald',
    items: [
      'Suporte técnico e manutenção de equipamentos de hardware e rede',
      'Criação de websites e sistemas internos com PHP e MySQL',
      'Gerenciamento de rede e configuração de ambientes de trabalho',
      'Desenvolvimento de soluções para controle interno e gestão de dados',
    ],
  },
]

const dotColor: Record<string, string> = {
  cyan: 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]',
  purple: 'bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.6)]',
  emerald: 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]',
}

const titleColor: Record<string, string> = {
  cyan: 'text-cyan-200',
  purple: 'text-purple-200',
  emerald: 'text-emerald-200',
}

const borderColor: Record<string, string> = {
  cyan: 'border-l-cyan-400/40',
  purple: 'border-l-purple-400/40',
  emerald: 'border-l-emerald-400/40',
}

const bulletColor: Record<string, string> = {
  cyan: 'bg-cyan-400/70',
  purple: 'bg-purple-400/70',
  emerald: 'bg-emerald-400/70',
}

export default function Experience() {
  return (
    <section id="experience" className="mb-12 glass-card p-6 rounded-xl transition-colors duration-200">
      <div className="flex items-center mb-6">
        <Briefcase className="w-6 h-6 mr-2 text-cyan-300" />
        <h2 className="text-2xl font-bold text-gray-100">Experiência Profissional</h2>
      </div>

      <div className="relative">
        {/* Linha vertical da timeline */}
        <div className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-cyan-400/50 via-purple-400/30 to-emerald-400/20" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-9">
              {/* Bolinha marcadora */}
              <span
                className={`absolute left-0 top-2 w-4 h-4 rounded-full shrink-0 ${dotColor[exp.color]}`}
              />

              <article
                className={`p-4 rounded-lg border-l-2 bg-white/[0.02] ${borderColor[exp.color]}`}
              >
                <h3 className={`text-lg font-semibold ${titleColor[exp.color]}`}>{exp.role}</h3>
                <p className="text-sm text-gray-400 mt-0.5 mb-3">
                  {exp.company} &nbsp;|&nbsp; {exp.period}
                </p>
                <ul className="space-y-2">
                  {exp.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                      <span
                        className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${bulletColor[exp.color]}`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


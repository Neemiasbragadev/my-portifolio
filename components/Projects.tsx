import { FolderGit2, ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    name: 'ConectaAgenda',
    description:
      'SaaS de agendamentos online multi-tenant — profissionais e estabelecimentos contratam o plano e gerenciam sua agenda, clientes e serviços em ambiente isolado. Conta com autenticação, painel administrativo, gestão de planos e interface totalmente responsiva.',
    tech: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'TailwindCSS', 'SaaS'],
    color: 'cyan',
    live: 'https://conectaagenda.com/',
  },
  {
    name: 'Sistema de Gestão Hospitalar',
    description:
      'Sistema web para gerenciamento de processos internos do Hospital Central do Exército, com integração ao gov.br, integrando múltiplos setores e reduzindo tempo de execução de rotinas em até 80%.',
    tech: ['PHP', 'Laravel', 'Symfony', 'MySQL', 'JavaScript'],
    color: 'purple',
  },
  {
    name: 'Portal de Serviços Judiciais (TRF2)',
    description:
      'Sistema de missão crítica para o TRF2, com integrações a APIs REST e serviços governamentais. Atende alto volume de usuários com foco em estabilidade, segurança e performance.',
    tech: ['PHP', 'Laravel', 'PL/SQL', 'Oracle', 'PHPUnit'],
    color: 'emerald',
  },
  {
    name: 'Portfólio Pessoal',
    description:
      'Este portfólio desenvolvido com Next.js, TypeScript e TailwindCSS. Totalmente responsivo, com animações scroll, dark mode e boas práticas de SEO.',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'React'],
    color: 'sky',
    github: 'https://github.com/neemiasbragadev',
    live: 'https://neemiasbragadev.vercel.app/',
  },
]

const badgeMap: Record<string, string> = {
  cyan: 'text-cyan-300 bg-cyan-400/10 border-cyan-400/20',
  purple: 'text-purple-300 bg-purple-400/10 border-purple-400/20',
  emerald: 'text-emerald-300 bg-emerald-400/10 border-emerald-400/20',
  sky: 'text-sky-300 bg-sky-400/10 border-sky-400/20',
}

const titleMap: Record<string, string> = {
  cyan: 'text-cyan-200',
  purple: 'text-purple-200',
  emerald: 'text-emerald-200',
  sky: 'text-sky-200',
}

const cardMap: Record<string, string> = {
  cyan: 'border-cyan-400/20 from-cyan-400/5',
  purple: 'border-purple-400/20 from-purple-400/5',
  emerald: 'border-emerald-400/20 from-emerald-400/5',
  sky: 'border-sky-400/20 from-sky-400/5',
}

export default function Projects() {
  return (
    <section id="projects" className="mb-12 glass-card p-6 rounded-xl transition-colors duration-200">
      <div className="flex items-center mb-6">
        <FolderGit2 className="w-6 h-6 mr-2 text-cyan-300" />
        <h2 className="text-2xl font-bold text-gray-100">Projetos</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.name}
            className={`p-5 rounded-lg border bg-gradient-to-br ${cardMap[project.color]} to-transparent flex flex-col justify-between gap-4`}
          >
            <div>
              <h3 className={`font-semibold text-base mb-2 ${titleMap[project.color]}`}>
                {project.name}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">{project.description}</p>
            </div>
            <div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className={`px-2 py-0.5 text-xs rounded-full border font-medium ${badgeMap[project.color]}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-200 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" /> GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-200 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Ver ao vivo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

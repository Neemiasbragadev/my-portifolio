import { Cpu } from 'lucide-react'

const skillGroups = [
  {
    title: 'Backend',
    color: 'purple',
    skills: ['PHP 7.4/8.x', 'Laravel', 'Symfony', 'CodeIgniter', 'Java', 'Spring Boot', 'APIs RESTful', 'SOLID / Clean Code', 'PHPUnit', 'Redis'],
  },
  {
    title: 'Banco de Dados',
    color: 'emerald',
    skills: ['MySQL', 'PostgreSQL', 'Oracle', 'PL/SQL', 'JPA / Hibernate', 'Otimização de queries'],
  },
  {
    title: 'DevOps & Versionamento',
    color: 'sky',
    skills: ['Docker', 'CI/CD (GitLab/GitHub)', 'Git', 'GitHub', 'GitLab'],
  },
  {
    title: 'Frontend',
    color: 'cyan',
    skills: ['Angular', 'Vue.js', 'React', 'Next.js', 'JavaScript', 'TypeScript', 'TailwindCSS'],
  },
  {
    title: 'Metodologias',
    color: 'yellow',
    skills: ['Scrum', 'ITIL', 'Code Review', 'Clean Code', 'Arquitetura em Camadas'],
  },
  {
    title: 'Ferramentas',
    color: 'pink',
    skills: ['VSCode', 'Jira', 'Notion', 'Postman', 'PHPUnit', 'Linux'],
  },
]

const badgeMap: Record<string, string> = {
  cyan: 'text-cyan-300 bg-cyan-400/10 border-cyan-400/20',
  purple: 'text-purple-300 bg-purple-400/10 border-purple-400/20',
  emerald: 'text-emerald-300 bg-emerald-400/10 border-emerald-400/20',
  sky: 'text-sky-300 bg-sky-400/10 border-sky-400/20',
  yellow: 'text-yellow-300 bg-yellow-400/10 border-yellow-400/20',
  pink: 'text-pink-300 bg-pink-400/10 border-pink-400/20',
}

const titleColorMap: Record<string, string> = {
  cyan: 'text-cyan-200',
  purple: 'text-purple-200',
  emerald: 'text-emerald-200',
  sky: 'text-sky-200',
  yellow: 'text-yellow-200',
  pink: 'text-pink-200',
}

export default function Skills() {
  return (
    <section id="skills" className="mb-12 glass-card p-6 rounded-xl transition-colors duration-200">
      <div className="flex items-center mb-6">
        <Cpu className="w-6 h-6 mr-2 text-cyan-300" />
        <h2 className="text-2xl font-bold text-gray-100">Habilidades Técnicas</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="p-4 rounded-lg border border-white/5 bg-white/[0.02]"
          >
            <h4 className={`font-semibold text-sm mb-3 ${titleColorMap[group.color]}`}>
              {group.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-2.5 py-1 text-xs rounded-full border font-medium ${badgeMap[group.color]}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


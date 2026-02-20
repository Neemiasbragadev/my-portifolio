import { Cpu } from 'lucide-react'

export default function Skills() {
  return (
    <section id="skills" className="mb-12 glass-card p-6 rounded-xl transition-colors duration-200">
      <div className="flex items-center mb-4">
        <Cpu className="w-6 h-6 mr-2 text-cyan-300" />
        <h2 className="text-2xl font-bold text-gray-100">Habilidades Técnicas</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
        <div className="p-4 rounded border border-white/5">
          <h4 className="font-semibold text-cyan-200">Frontend</h4>
          <p className="text-sm mt-1">ReactJS, NextJS, TailwindCSS, TypeScript</p>
        </div>

        <div className="p-4 rounded border border-white/5">
          <h4 className="font-semibold text-purple-200">Backend</h4>
          <p className="text-sm mt-1">PHP, Laravel, CodeIgniter, Java (Spring Boot), RESTful APIs</p>
        </div>

        <div className="p-4 rounded border border-white/5">
          <h4 className="font-semibold text-emerald-200">Bancos de Dados</h4>
          <p className="text-sm mt-1">MySQL, PostgreSQL, Oracle, PL/SQL</p>
        </div>

        <div className="p-4 rounded border border-white/5">
          <h4 className="font-semibold text-sky-200">DevOps</h4>
          <p className="text-sm mt-1">Docker, CI/CD</p>
        </div>

        <div className="p-4 rounded border border-white/5">
          <h4 className="font-semibold text-yellow-200">Ferramentas</h4>
          <p className="text-sm mt-1">Git, GitHub, GitLab</p>
        </div>

        <div className="p-4 rounded border border-white/5">
          <h4 className="font-semibold text-pink-200">Metodologias</h4>
          <p className="text-sm mt-1">Scrum, ITIL</p>
        </div>
      </div>
    </section>
  )
}


import { GraduationCap, Award } from 'lucide-react'

const education = [
  {
    degree: 'Graduação em Análise e Desenvolvimento de Sistemas',
    institution: 'Unicesumar',
    color: 'cyan',
  },
  {
    degree: 'Técnico em Informática para Internet',
    institution: 'Instituto Federal do Rio de Janeiro (IFRJ)',
    color: 'purple',
  },
]

const certifications = [
  { name: 'Programação em PHP', issuer: 'Digital Innovation One' },
  { name: 'Laravel PHP Framework', issuer: 'Digital Innovation One' },
  { name: 'Certificações adicionais disponíveis sob demanda', issuer: 'Java, MySQL, Front-End, SQL, entre outras' },
]

export default function Education() {
  return (
    <section id="education" className="mb-12 glass-card p-6 rounded-xl transition-colors duration-200">
      <div className="flex items-center mb-6">
        <GraduationCap className="w-6 h-6 mr-2 text-cyan-300" />
        <h2 className="text-2xl font-bold text-gray-100">Formação Acadêmica</h2>
      </div>

      <div className="space-y-3 mb-8">
        {education.map((edu) => (
          <div
            key={edu.degree}
            className={`p-4 rounded-lg border bg-white/[0.02] flex items-start gap-3 ${
              edu.color === 'cyan' ? 'border-cyan-400/20' : 'border-purple-400/20'
            }`}
          >
            <span
              className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 ${
                edu.color === 'cyan' ? 'bg-cyan-400' : 'bg-purple-400'
              }`}
            />
            <div>
              <p className={`font-semibold text-sm ${
                edu.color === 'cyan' ? 'text-cyan-200' : 'text-purple-200'
              }`}>{edu.degree}</p>
              <p className="text-xs text-gray-400 mt-0.5">{edu.institution}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 mb-4">
        <Award className="w-5 h-5 text-yellow-400" />
        <h3 className="text-lg font-semibold text-gray-100">Certificações</h3>
      </div>

      <div className="space-y-2">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="flex items-start gap-3 p-3 rounded-lg border border-yellow-400/10 bg-yellow-400/[0.03]"
          >
            <span className="w-2 h-2 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
            <div>
              <p className="text-sm text-gray-200 font-medium">{cert.name}</p>
              <p className="text-xs text-gray-400">{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


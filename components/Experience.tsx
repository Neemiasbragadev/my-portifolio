import { Briefcase } from 'lucide-react'

export default function Experience() {
  return (
    <section className="mb-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-colors duration-200">
      <div className="flex items-center mb-4">
        <Briefcase className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Experiência Profissional</h2>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Analista Desenvolvedor PHP</h3>
        <p className="text-gray-600 dark:text-gray-400">Hospital Central do Exército - Divisão de TI | Fev 2023 - Presente</p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2">
          <li>Desenvolvimento e manutenção de Sistemas Web utilizando PHP, Laravel, HTML, CSS e JavaScript</li>
          <li>Correção de sistemas para atender às necessidades dos usuários</li>
          <li>Suporte e assistência a equipe de análise de sistemas</li>
          <li>Análise de desempenho e resolução de problemas técnicos</li>
          <li>Documentação de processos e estudo de viabilidade técnica para novos sistemas</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Técnico em Informática</h3>
        <p className="text-gray-600 dark:text-gray-400">Deposito Central do Exército - Divisão de TI | Mar 2018 - Jan 2023</p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2">
          <li>Atendimento direto ao usuário e suporte técnico</li>
          <li>Montagem e manutenção de computadores</li>
          <li>Criação e desenvolvimento de websites</li>
          <li>Configuração de acesso à internet e roteamento de modems</li>
          <li>Suporte técnico em ambientes de escritório e residenciais</li>
        </ul>
      </div>
    </section>
  )
}


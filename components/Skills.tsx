import { Cpu } from 'lucide-react'

export default function Skills() {
  return (
    <section id="skills" className="mb-12 glass-card p-6 rounded-xl transition-colors duration-200">
      <div className="flex items-center mb-4">
        <Cpu className="w-6 h-6 mr-2 text-cyan-300" />
        <h2 className="text-2xl font-bold text-gray-100">Habilidades Técnicas</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
        <div className="p-3 bg-transparent rounded border border-white/4">
          <h4 className="font-semibold">PHP / Laravel</h4>
          <div className="h-2 bg-white/6 rounded mt-2 overflow-hidden">
            <div className="h-2 bg-cyan-400 rounded" style={{ width: '85%' }}></div>
          </div>
        </div>
        <div className="p-3 bg-transparent rounded border border-white/4">
          <h4 className="font-semibold">Java / OOP</h4>
          <div className="h-2 bg-white/6 rounded mt-2 overflow-hidden">
            <div className="h-2 bg-purple-400 rounded" style={{ width: '75%' }}></div>
          </div>
        </div>
        <div className="p-3 bg-transparent rounded border border-white/4">
          <h4 className="font-semibold">Front-end (HTML, CSS, JS)</h4>
          <div className="h-2 bg-white/6 rounded mt-2 overflow-hidden">
            <div className="h-2 bg-cyan-300 rounded" style={{ width: '70%' }}></div>
          </div>
        </div>
        <div className="p-3 bg-transparent rounded border border-white/4">
          <h4 className="font-semibold">SQL / MySQL</h4>
          <div className="h-2 bg-white/6 rounded mt-2 overflow-hidden">
            <div className="h-2 bg-green-400 rounded" style={{ width: '80%' }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}


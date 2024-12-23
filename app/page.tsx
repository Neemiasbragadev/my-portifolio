import Header from '@/components/Header'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import AnimatedBackground from '@/components/AnimatedBackground'
import DarkModeToggle from '@/components/DarkModeToggle'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </div>
      <AnimatedBackground />
      <DarkModeToggle />
    </main>
  )
}


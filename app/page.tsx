import Header from '@/components/Header'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'
import AnimatedBackground from '@/components/AnimatedBackground'
import DarkModeToggle from '@/components/DarkModeToggle'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export default function Home() {
  return (
    <main className="min-h-screen transition-colors duration-200">
      <Header />
      <div className="pt-24 container mx-auto px-4 py-8 space-y-8">
        <AnimateOnScroll><About /></AnimateOnScroll>
        <AnimateOnScroll delay={80}><Experience /></AnimateOnScroll>
        <AnimateOnScroll delay={80}><Skills /></AnimateOnScroll>
        <AnimateOnScroll delay={80}><Projects /></AnimateOnScroll>
        <AnimateOnScroll delay={80}><Education /></AnimateOnScroll>
        <AnimateOnScroll delay={80}><Contact /></AnimateOnScroll>
      </div>
      <Footer />
      <AnimatedBackground />
      <DarkModeToggle />
    </main>
  )
}


import Navbar from './components/layout/Navbar';
import Hero from './components/sections/hero';
import About from './components/sections/about';
import Skills from './components/sections/skills';
import Projects from './components/sections/projects';
import Contact from './components/sections/contact';
import Footer from './components/layout/Footer';
function App() {
  return (
    <main className="app">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
export default App
import { ThemeProvider } from "./components/contexts/ThemeContext"
import { PortfolioLayout } from "./components/PortfolioLayout"
import { HeroSection, AboutSection, ProjectsSection, ContactSection } from "./components/PortfolioSections"

function App() {
  return (
    <ThemeProvider>
      <PortfolioLayout>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </PortfolioLayout>
    </ThemeProvider>
  )
}

export default App

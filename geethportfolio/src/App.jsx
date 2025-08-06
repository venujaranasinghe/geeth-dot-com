import { ThemeProvider } from "./components/contexts/ThemeContext"
import { PortfolioLayout } from "./components/PortfolioLayout"
import { HeroSection, AboutSection, ProjectsSection, EducationSection, BlogSection, ContactSection } from "./components/PortfolioSections"

function App() {
  return (
    <ThemeProvider>
      <PortfolioLayout>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EducationSection /> {/* New section */}
        <BlogSection />      {/* New section */}
        <ContactSection />
      </PortfolioLayout>
    </ThemeProvider>
  )
}

export default App

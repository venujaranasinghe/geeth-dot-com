import { ThemeProvider } from "./contexts/ThemeContext"
import { PortfolioLayout } from "./components/PortfolioLayout"
// Import individual sections from the new 'sections' directory
import { HomePage } from "./sections/HeroSection"
import { AboutPage } from "./sections/AboutSection"
import { ProjectsPage } from "./sections/ProjectsSection"
import { EducationPage } from "./sections/EducationSection"
import { BlogPage } from "./sections/BlogSection"
import { ContactPage } from "./sections/ContactSection"

function App() {
  return (
    <ThemeProvider>
      <PortfolioLayout>
        <HomePage />
        <AboutPage />
        <ProjectsPage />
        <EducationPage />
        <BlogPage />
        <ContactPage />
      </PortfolioLayout>
    </ThemeProvider>
  )
}

export default App

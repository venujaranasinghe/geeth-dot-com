import React from 'react'

export function ProjectsPage() {
  const projects = [
    {
      title: "Project One",
      description: "A beautiful web application built with React and JavaScript",
      tech: ["React", "JavaScript", "Tailwind CSS"],
      image: "/modern-web-app-dashboard.png"
    },
    {
      title: "Project Two",
      description: "Full-stack application with real-time features",
      tech: ["Next.js", "Node.js", "PostgreSQL"],
      image: "/mobile-app-interface.png"
    },
    {
      title: "Project Three",
      description: "Mobile-first responsive design with smooth animations",
      tech: ["React Native", "Framer Motion", "Firebase"],
      image: "/data-visualization-dashboard.png"
    }
  ]

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

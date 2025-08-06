import React from 'react'

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          I'm a passionate developer creating amazing digital experiences
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            View My Work
          </button>
          <button className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-left">
            <p className="text-lg text-muted-foreground">
              I'm a full-stack developer with a passion for creating beautiful, functional, and user-friendly applications.
            </p>
            <p className="text-lg text-muted-foreground">
              With expertise in React, JavaScript, Node.js, and modern web technologies, I bring ideas to life through code.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'JavaScript', 'Node.js', 'Python', 'Tailwind CSS', 'Framer Motion'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ProjectsSection() {
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

export function EducationSection() {
  const educationItems = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Example",
      year: "2023",
      details: "Specialized in AI and Machine Learning. Thesis on Neural Network Optimization."
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "Tech Institute",
      year: "2021",
      details: "Focused on full-stack web development and data structures. Graduated with honors."
    }
  ]

  return (
    <section id="education" className="min-h-screen flex items-center justify-center px-4 py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">Education</h2>
        <div className="space-y-8">
          {educationItems.map((item, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl p-6 text-left">
              <h3 className="text-2xl font-semibold mb-2">{item.degree}</h3>
              <p className="text-lg text-muted-foreground mb-1">{item.institution} - {item.year}</p>
              <p className="text-muted-foreground">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function BlogSection() {
  const blogPosts = [
    {
      title: "Mastering React Hooks for Better Performance",
      date: "July 25, 2025",
      excerpt: "A deep dive into optimizing React components using useCallback, useMemo, and React.memo.",
      link: "#"
    },
    {
      title: "Building Scalable APIs with Node.js and Express",
      date: "June 10, 2025",
      excerpt: "Best practices for structuring your Node.js API, handling authentication, and database integration.",
      link: "#"
    },
    {
      title: "The Future of Web Development: AI and Beyond",
      date: "May 1, 2025",
      excerpt: "Exploring how AI is transforming front-end and back-end development workflows.",
      link: "#"
    }
  ]

  return (
    <section id="blog" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">My Blog</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl p-6 text-left hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{post.date}</p>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <a href={post.link} className="text-primary hover:underline">Read More &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Get In Touch</h2>
        <p className="text-xl text-muted-foreground mb-8">
          I'm always open to discussing new opportunities and interesting projects.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Contact Info</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 your.email@example.com</p>
              <p>📱 +1 (555) 123-4567</p>
              <p>📍 Your City, Country</p>
            </div>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-border rounded-lg bg-background"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-border rounded-lg bg-background"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background"
            />
            <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

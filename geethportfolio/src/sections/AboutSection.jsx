import React from 'react'

export function AboutPage() {
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

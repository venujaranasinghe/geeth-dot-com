import React from 'react'

export function HomePage() {
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

import React from 'react'

export function EducationPage() {
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

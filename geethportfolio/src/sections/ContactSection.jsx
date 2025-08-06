import React from 'react'

export function ContactPage() {
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

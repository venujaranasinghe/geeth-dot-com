import React from 'react'

export function BlogPage() {
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

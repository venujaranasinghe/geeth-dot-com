"use client"

import { useEffect } from "react"
import "./Skills.css"

const Skills = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-bar-fill')
            skillBars.forEach((bar) => {
              const targetWidth = bar.getAttribute('data-width')
              if (targetWidth) {
                setTimeout(() => {
                  bar.style.width = targetWidth + '%'
                }, 500)
              }
            })
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    const skillsSection = document.querySelector('.skills-section')
    if (skillsSection) {
      observer.observe(skillsSection)
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection)
      }
    }
  }, [])

  return (
    <div id="skills" className="skills">
      <div className="skills-title">
        <h1 className="animated-title">Programming Languages & Tools</h1>
        <div className="underline animated-underline"></div>
      </div>
      <div className="skills-section">
        <div className="skills-grid">
          <div className="skill-item animated-skill" style={{ animationDelay: "0.2s" }}>
            <div className="skill-info">
              <p>HTML & CSS</p>
              <span className="skill-percentage">90%</span>
            </div>
            <div className="skill-bar-container">
              <div className="skill-bar-fill" style={{ width: "0%", "--target-width": "90%" }} data-width="90"></div>
            </div>
          </div>
          <div className="skill-item animated-skill" style={{ animationDelay: "0.4s" }}>
            <div className="skill-info">
              <p>React JS</p>
              <span className="skill-percentage">75%</span>
            </div>
            <div className="skill-bar-container">
              <div className="skill-bar-fill" style={{ width: "0%", "--target-width": "75%" }} data-width="75"></div>
            </div>
          </div>
          <div className="skill-item animated-skill" style={{ animationDelay: "0.6s" }}>
            <div className="skill-info">
              <p>Java</p>
              <span className="skill-percentage">85%</span>
            </div>
            <div className="skill-bar-container">
              <div className="skill-bar-fill" style={{ width: "0%", "--target-width": "85%" }} data-width="85"></div>
            </div>
          </div>
          <div className="skill-item animated-skill" style={{ animationDelay: "0.8s" }}>
            <div className="skill-info">
              <p>Python</p>
              <span className="skill-percentage">70%</span>
            </div>
            <div className="skill-bar-container">
              <div className="skill-bar-fill" style={{ width: "0%", "--target-width": "70%" }} data-width="70"></div>
            </div>
          </div>
          <div className="skill-item animated-skill" style={{ animationDelay: "1.0s" }}>
            <div className="skill-info">
              <p>Arduino & IoT</p>
              <span className="skill-percentage">80%</span>
            </div>
            <div className="skill-bar-container">
              <div className="skill-bar-fill" style={{ width: "0%", "--target-width": "80%" }} data-width="80"></div>
            </div>
          </div>
          <div className="skill-item animated-skill" style={{ animationDelay: "1.2s" }}>
            <div className="skill-info">
              <p>Database Management</p>
              <span className="skill-percentage">78%</span>
            </div>
            <div className="skill-bar-container">
              <div className="skill-bar-fill" style={{ width: "0%", "--target-width": "78%" }} data-width="78"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills

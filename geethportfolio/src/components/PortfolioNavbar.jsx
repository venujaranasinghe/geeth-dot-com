import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Home, User, FolderOpen, BookOpen, Rss, Mail } from 'lucide-react'
import { useTheme } from "../contexts/ThemeContext"
import { ThemeToggle } from "./ThemeToggle"

const menuItems = [
  {
    icon: <Home className="h-5 w-5" />,
    label: "Home",
    href: "#home",
    gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-500",
  },
  {
    icon: <User className="h-5 w-5" />,
    label: "About",
    href: "#about",
    gradient: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "text-green-500",
  },
  {
    icon: <FolderOpen className="h-5 w-5" />,
    label: "Projects",
    href: "#projects",
    gradient: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
    iconColor: "text-orange-500",
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    label: "Education",
    href: "#education",
    gradient: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(139,92,246,0.06) 50%, rgba(124,58,237,0) 100%)",
    iconColor: "text-purple-500",
  },
  {
    icon: <Rss className="h-5 w-5" />,
    label: "Blog",
    href: "#blog",
    gradient: "radial-gradient(circle, rgba(236,72,153,0.15) 0%, rgba(219,39,119,0.06) 50%, rgba(190,18,60,0) 100%)",
    iconColor: "text-pink-500",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Contact",
    href: "#contact",
    gradient: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
    iconColor: "text-red-500",
  },
]

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
}

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
}

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
}

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

const sharedTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5,
}

// Smooth scroll function
const smoothScroll = (targetId) => {
  const element = document.getElementById(targetId.replace('#', ''))
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

export function PortfolioNavbar() {
  const { theme } = useTheme()
  const isDarkTheme = theme === "dark"
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navbarClasses = `
    p-2 rounded-full relative overflow-hidden
    transition-all duration-300 ease-in-out
    ${isScrolled
      ? 'bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-xl border border-border/40 shadow-lg'
      : 'bg-gradient-to-b from-background/60 to-background/10 backdrop-blur-lg border border-border/30 shadow-md'
    }
  `

  const glowColors = `
    absolute -inset-2 bg-gradient-radial from-transparent rounded-full z-0 pointer-events-none
    ${isScrolled
      ? (isDarkTheme
          ? "via-blue-400/30 via-30% via-purple-400/30 via-60% via-red-400/30 via-90%"
          : "via-blue-400/20 via-30% via-purple-400/20 via-60% via-red-400/20 via-90%")
      : (isDarkTheme
          ? "via-blue-400/20 via-30% via-purple-400/20 via-60% via-red-400/20 via-90%"
          : "via-blue-400/10 via-30% via-purple-400/10 via-60% via-red-400/10 via-90%")
    }
  `

  const handleNavClick = (e, href) => {
    e.preventDefault()
    smoothScroll(href)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <motion.nav
        className={navbarClasses}
        initial="initial"
        whileHover="hover"
      >
        <motion.div
          className={glowColors}
          variants={navGlowVariants}
        />
        <div className="flex items-center gap-1 relative z-10">
          <ul className="flex items-center gap-1">
            {menuItems.map((item) => (
              <motion.li key={item.label} className="relative">
                <motion.div
                  className="block rounded-full overflow-visible group relative"
                  style={{ perspective: "600px" }}
                  whileHover="hover"
                  initial="initial"
                >
                  <motion.div
                    className="absolute inset-0 z-0 pointer-events-none"
                    variants={glowVariants}
                    style={{
                      background: item.gradient,
                      opacity: 0,
                      borderRadius: "9999px",
                    }}
                  />
                  <motion.a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="flex items-center gap-1.5 px-3 py-1.5 relative z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-full cursor-pointer"
                    variants={itemVariants}
                    transition={sharedTransition}
                  >
                    <span className={`transition-colors duration-300 group-hover:${item.iconColor}`}>
                      {item.icon}
                    </span>
                    <span className="hidden sm:inline">{item.label}</span>
                  </motion.a>
                  <motion.a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="flex items-center gap-1.5 px-3 py-1.5 absolute inset-0 z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-full cursor-pointer"
                    variants={backVariants}
                    transition={sharedTransition}
                  >
                    <span className={`transition-colors duration-300 group-hover:${item.iconColor}`}>
                      {item.icon}
                    </span>
                    <span className="hidden sm:inline">{item.label}</span>
                  </motion.a>
                </motion.div>
              </motion.li>
            ))}
          </ul>
          <div className="ml-2 pl-2 border-l border-border/40">
            <ThemeToggle />
          </div>
        </div>
      </motion.nav>
    </header>
  )
}

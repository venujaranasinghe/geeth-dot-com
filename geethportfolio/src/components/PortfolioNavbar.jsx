import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Home, User, FolderOpen, BookOpen, Rss, Mail, Menu } from 'lucide-react' // Added Menu icon
import { useTheme } from "../contexts/ThemeContext"
import { ThemeToggle } from "./ThemeToggle"
import { cn } from "../lib/util"
import { Button } from "../components/ui/button" // Import Button for hamburger
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "../components/ui/sheet" // Import Sheet components

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) // State for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navbarBaseClasses = `
    p-2 rounded-full relative overflow-hidden
    transition-all duration-300 ease-in-out
  `

  const desktopNavbarClasses = cn(
    navbarBaseClasses,
    isScrolled
      ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200/40 dark:border-gray-700/40 shadow-lg'
      : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200/30 dark:border-gray-700/30 shadow-md'
  )

  const mobileNavbarClasses = cn(
    "fixed top-4 right-4 z-50 p-2 rounded-full",
    isScrolled
      ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200/40 dark:border-gray-700/40 shadow-lg'
      : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200/30 dark:border-gray-700/30 shadow-md'
  )

  const handleNavClick = (e, href) => {
    e.preventDefault()
    smoothScroll(href)
    setIsMobileMenuOpen(false) // Close mobile menu on click
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      {/* Desktop Navigation */}
      <motion.nav
        className={cn(desktopNavbarClasses, "hidden md:flex")} // Show on medium screens and up
        initial="initial"
        whileHover="hover"
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"
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
                    className="flex items-center gap-1.5 px-3 py-1.5 relative z-10 bg-transparent text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors rounded-full cursor-pointer"
                    variants={itemVariants}
                    transition={sharedTransition}
                  >
                    <span className={`transition-colors duration-300 group-hover:${item.iconColor}`}>
                      {item.icon}
                    </span>
                    <span className="hidden lg:inline">{item.label}</span>
                  </motion.a>
                  <motion.a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="flex items-center gap-1.5 px-3 py-1.5 absolute inset-0 z-10 bg-transparent text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors rounded-full cursor-pointer"
                    variants={backVariants}
                    transition={sharedTransition}
                  >
                    <span className={`transition-colors duration-300 group-hover:${item.iconColor}`}>
                      {item.icon}
                    </span>
                    <span className="hidden lg:inline">{item.label}</span>
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

      {/* Mobile Navigation (Hamburger Menu) */}
      <div className={cn(mobileNavbarClasses, "md:hidden")}> {/* Show only on small to medium screens */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-xs bg-background/95 backdrop-blur-lg border-l border-border/40 flex flex-col">
            <div className="flex justify-end p-4">
              {/* SheetClose is automatically added by SheetContent, no need for explicit button here */}
            </div>
            <nav className="flex flex-col gap-4 p-4 flex-grow">
              {menuItems.map((item) => (
                <SheetClose asChild key={item.label}> {/* Use SheetClose to close on click */}
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="flex items-center gap-3 text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    <span className={item.iconColor}>{item.icon}</span>
                    {item.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
            <div className="p-4 border-t border-border/40 flex justify-center">
              <ThemeToggle />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

import React from 'react'
import { PortfolioNavbar } from './PortfolioNavbar'

export function PortfolioLayout({ children }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <PortfolioNavbar />
      <main className="pt-20">
        {children} {/* This is where the section components will be rendered */}
      </main>
    </div>
  )
}

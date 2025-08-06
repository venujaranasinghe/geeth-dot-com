import React from 'react'
import { PortfolioNavbar } from './PortfolioNavbar'

export function PortfolioLayout({ children }) {
  return (
    <div className="min-h-screen bg-background">
      <PortfolioNavbar />
      <main className="pt-20">
        {children}
      </main>
    </div>
  )
}

import Globe from './components/Globe'
import './App.css'

function App() {
  return (
    <div className="App">
      <Globe />
      
      {/* Your portfolio content goes here */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header/Navigation */}
        <header className="p-6">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Your Name</h1>
            <ul className="flex space-x-6 text-white">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-6">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Welcome to My Portfolio
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Full Stack Developer & Creative Technologist
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              View My Work
            </button>
          </div>
        </main>

        {/* Footer */}
        <footer className="p-6 text-center text-gray-400">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default App

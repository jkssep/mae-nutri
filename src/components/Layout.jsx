import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Heart } from 'lucide-react'

function Layout({ children }) {
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-pink-500" />
              <h1 className="text-2xl font-bold text-gray-900">Mãe Nutri</h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link 
                to="/" 
                className={`${isActive('/') ? 'text-pink-600 font-medium' : 'text-gray-700'} hover:text-pink-600 transition-colors`}
              >
                Início
              </Link>
              <Link 
                to="/blog" 
                className={`${isActive('/blog') ? 'text-pink-600 font-medium' : 'text-gray-700'} hover:text-pink-600 transition-colors`}
              >
                Blog
              </Link>
              <Link 
                to="/ebook" 
                className={`${isActive('/ebook') ? 'text-pink-600 font-medium' : 'text-gray-700'} hover:text-pink-600 transition-colors`}
              >
                E-book
              </Link>
              <Link 
                to="/newsletter" 
                className={`${isActive('/newsletter') ? 'text-pink-600 font-medium' : 'text-gray-700'} hover:text-pink-600 transition-colors`}
              >
                Newsletter
              </Link>
            </nav>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-pink-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-pink-500" />
                <h4 className="text-xl font-bold">Mãe Nutri</h4>
              </div>
              <p className="text-gray-400">
                Orientações nutricionais práticas para mães no pós-parto e amamentação.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Navegação</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-white transition-colors">Início</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/ebook" className="hover:text-white transition-colors">E-book</Link></li>
                <li><Link to="/newsletter" className="hover:text-white transition-colors">Newsletter</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Categorias</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/blog" className="hover:text-white transition-colors">Amamentação</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Receitas</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Organização</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Nutrição</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contato</h5>
              <p className="text-gray-400">
                contato@maenutri.com.br
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Mãe Nutri. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout


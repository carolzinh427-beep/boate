import React, { useState, useEffect } from 'react'

interface NavbarProps {
  currentPath: string
  onNavigate: (path: string) => void
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const navItems = [
    { label: 'Cardápio', path: '/cardapio' },
    { label: 'Programação', path: '/programacao' },
    { label: 'O bar', path: '/o-bar' },
    { label: 'Meus ingressos', path: '/meus-ingressos' }
  ]

  const handleLinkClick = (path: string) => {
    onNavigate(path)
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled || mobileMenuOpen
          ? 'bg-[#160f0c]/98 backdrop-blur-md border-b border-[#542A30]/50 shadow-md'
          : 'bg-[#160f0c]/90 backdrop-blur-sm border-b border-[#542A30]/30'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">
        {/* Logotipo tipográfico proporcional */}
        <button
          onClick={() => handleLinkClick('/')}
          className="text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C48A46] rounded-xs py-1"
          aria-label="Âmbar Bar Página Inicial"
        >
          <span className="font-serif text-2xl sm:text-3xl tracking-widest text-[#F2E8D8] uppercase font-light">
            Âmbar <span className="font-normal text-[#C48A46]">Bar</span>
          </span>
          <span className="block text-[9px] sm:text-[10px] tracking-[0.2em] text-[#d5c8b5]/70 uppercase font-sans">
            Vitória, Espírito Santo
          </span>
        </button>

        {/* Navegação desktop */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8" aria-label="Navegação principal">
          {navItems.map((item) => {
            const isActive = currentPath === item.path
            return (
              <button
                key={item.path}
                onClick={() => handleLinkClick(item.path)}
                className={`text-xs uppercase tracking-widest py-2 cursor-pointer transition-colors focus:outline-none focus:ring-1 focus:ring-[#C48A46] ${
                  isActive
                    ? 'text-[#C48A46] font-medium border-b border-[#C48A46]'
                    : 'text-[#F2E8D8]/80 hover:text-[#F2E8D8]'
                }`}
              >
                {item.label}
              </button>
            )
          })}

          <button
            onClick={() => handleLinkClick('/programacao')}
            className="text-xs uppercase tracking-widest bg-[#C48A46] text-[#211713] px-5 py-2.5 rounded-xs font-semibold hover:bg-[#d89f5e] transition-colors cursor-pointer min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#F2E8D8]"
          >
            Comprar ingresso
          </button>
        </nav>

        {/* Botão de menu mobile com área de toque mínima de 44x44px */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-xs uppercase tracking-widest px-4 py-2.5 border border-[#C48A46]/70 text-[#F2E8D8] rounded-xs cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center hover:bg-[#542A30]/30 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C48A46]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          >
            {mobileMenuOpen ? 'Fechar' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Menu mobile acessível sem saltos de layout */}
      {mobileMenuOpen && (
        <div
          className="md:hidden bg-[#160f0c] border-b border-[#542A30]/60 px-4 py-6 shadow-2xl animate-soft-in"
          role="dialog"
          aria-modal="true"
          aria-label="Menu móvel de navegação"
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleLinkClick(item.path)}
                className={`text-left text-sm uppercase tracking-wider py-3 px-2 rounded-xs cursor-pointer min-h-[44px] flex items-center transition-colors ${
                  currentPath === item.path
                    ? 'text-[#C48A46] bg-[#211713] font-medium'
                    : 'text-[#F2E8D8] hover:bg-[#211713]/60'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-3 border-t border-[#542A30]/40 flex flex-col space-y-3">
              <button
                onClick={() => handleLinkClick('/programacao')}
                className="w-full text-center text-xs uppercase tracking-widest bg-[#C48A46] text-[#211713] py-3.5 rounded-xs font-semibold hover:bg-[#d89f5e] transition-colors cursor-pointer min-h-[44px] flex items-center justify-center"
              >
                Comprar ingresso
              </button>

              <div className="text-[11px] text-[#d5c8b5]/60 text-center pt-1 font-light">
                Praia do Canto, Vitória, Espírito Santo
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

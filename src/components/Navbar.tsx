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
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fecha o menu mobile ao trocar de rota ou ao pressionar Escape
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#160f0c]/95 backdrop-blur-md border-b border-[#542A30]/40 py-3 shadow-xl'
          : 'bg-gradient-to-b from-[#160f0c]/90 via-[#160f0c]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logotipo exclusivamente tipográfico sem símbolos */}
        <button
          onClick={() => handleLinkClick('/')}
          className="text-left group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C48A46] rounded-sm px-1 py-0.5"
          aria-label="Âmbar Bar Página Inicial"
        >
          <span className="font-serif text-2xl sm:text-3xl tracking-widest text-[#F2E8D8] uppercase font-light">
            Âmbar <span className="font-normal text-[#C48A46]">Bar</span>
          </span>
          <span className="block text-[10px] tracking-[0.25em] text-[#d5c8b5]/70 uppercase font-sans">
            Vitória, Espírito Santo
          </span>
        </button>

        {/* Navegação desktop */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Navegação principal">
          {navItems.map((item) => {
            const isActive = currentPath === item.path
            return (
              <button
                key={item.path}
                onClick={() => handleLinkClick(item.path)}
                className={`text-sm tracking-wider uppercase transition-colors py-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C48A46] rounded-sm ${
                  isActive
                    ? 'text-[#C48A46] font-medium border-b-2 border-[#C48A46]'
                    : 'text-[#F2E8D8]/80 hover:text-[#F2E8D8]'
                }`}
              >
                {item.label}
              </button>
            )
          })}

          <button
            onClick={() => handleLinkClick('/programacao')}
            className="text-xs uppercase tracking-widest bg-[#C48A46] text-[#211713] px-5 py-2.5 rounded-sm font-semibold hover:bg-[#d89f5e] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C48A46] focus:ring-offset-[#211713]"
          >
            Comprar ingresso
          </button>
        </nav>

        {/* Controle textual para celular sem ícones */}
        <div className="md:hidden flex items-center space-x-3">
          <button
            onClick={() => handleLinkClick('/programacao')}
            className="text-xs uppercase tracking-wider bg-[#C48A46] text-[#211713] px-3 py-1.5 rounded-sm font-semibold hover:bg-[#d89f5e] transition-colors cursor-pointer"
          >
            Ingressos
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-xs uppercase tracking-widest px-3 py-1.5 border border-[#C48A46]/60 text-[#F2E8D8] hover:border-[#C48A46] hover:bg-[#542A30]/30 transition-all rounded-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C48A46]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          >
            {mobileMenuOpen ? 'Fechar' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Menu mobile acessível com controles textuais */}
      {mobileMenuOpen && (
        <div
          className="md:hidden bg-[#160f0c] border-b border-[#542A30]/60 px-6 py-6 animate-fadeInLines"
          role="dialog"
          aria-modal="true"
          aria-label="Menu móvel"
        >
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-[#542A30]/30">
              <span className="text-xs uppercase tracking-widest text-[#d5c8b5]/60 font-sans">
                Navegação
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs uppercase tracking-wider text-[#C48A46] hover:underline cursor-pointer"
              >
                Fechar
              </button>
            </div>

            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleLinkClick(item.path)}
                className={`text-left text-base tracking-wider uppercase py-2 cursor-pointer transition-colors ${
                  currentPath === item.path ? 'text-[#C48A46] font-medium' : 'text-[#F2E8D8]/90'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-4 border-t border-[#542A30]/30 flex flex-col space-y-3">
              <button
                onClick={() => handleLinkClick('/programacao')}
                className="w-full text-center text-xs uppercase tracking-widest bg-[#C48A46] text-[#211713] py-3 rounded-sm font-semibold hover:bg-[#d89f5e] transition-colors cursor-pointer"
              >
                Comprar ingresso
              </button>

              <div className="text-[11px] text-[#d5c8b5]/70 pt-2 text-center">
                Praia do Canto, Vitória, Espírito Santo
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}


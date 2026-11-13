import { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { MenuPage } from './pages/MenuPage'
import { SchedulePage } from './pages/SchedulePage'
import { EventDetailPage } from './pages/EventDetailPage'
import { CheckoutPage } from './pages/CheckoutPage'
import { MyTicketsPage } from './pages/MyTicketsPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { TermsPage } from './pages/TermsPage'
import { CreditsPage } from './pages/CreditsPage'
import { EVENTS } from './data/barData'
import type { EventSchedule, PurchasedTicket } from './data/barData'

export function App() {
  const [currentPath, setCurrentPath] = useState<string>('/')
  const [selectedEvent, setSelectedEvent] = useState<EventSchedule | null>(null)
  const [checkoutData, setCheckoutData] = useState<{
    event: EventSchedule
    ticketId: string
    quantity: number
  } | null>(null)
  const [recentlyPurchasedTicket, setRecentlyPurchasedTicket] = useState<PurchasedTicket | null>(null)

  // Sincroniza com hash para compatibilidade total com navegação e refresh
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || '/'
      if (hash.startsWith('/evento/')) {
        const eventId = hash.replace('/evento/', '')
        const found = EVENTS.find((e) => e.id === eventId)
        if (found) {
          setSelectedEvent(found)
          setCurrentPath('/evento')
          return
        }
      }
      setCurrentPath(hash)
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navigate = (path: string) => {
    window.location.hash = path
    setCurrentPath(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSelectEvent = (event: EventSchedule) => {
    setSelectedEvent(event)
    window.location.hash = `/evento/${event.id}`
    setCurrentPath('/evento')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleProceedToCheckout = (
    event: EventSchedule,
    ticketId: string,
    quantity: number
  ) => {
    setCheckoutData({ event, ticketId, quantity })
    navigate('/checkout')
  }

  const handleCheckoutSuccess = (ticket: PurchasedTicket) => {
    setRecentlyPurchasedTicket(ticket)
    setCheckoutData(null)
    navigate('/meus-ingressos')
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#211713] text-[#F2E8D8] font-sans selection:bg-[#C48A46] selection:text-[#211713]">
      {/* Barra de navegação com logotipo exclusivamente tipográfico */}
      <Navbar currentPath={currentPath} onNavigate={navigate} />

      {/* Roteamento e renderização da página ativa */}
      <main className="flex-1">
        {currentPath === '/' && (
          <HomePage onNavigate={navigate} onSelectEvent={handleSelectEvent} />
        )}

        {currentPath === '/cardapio' && <MenuPage />}

        {currentPath === '/programacao' && (
          <SchedulePage onSelectEvent={handleSelectEvent} />
        )}

        {currentPath === '/evento' && selectedEvent && (
          <EventDetailPage
            event={selectedEvent}
            onBack={() => navigate('/programacao')}
            onProceedToCheckout={handleProceedToCheckout}
          />
        )}

        {currentPath === '/checkout' && checkoutData && (
          <CheckoutPage
            event={checkoutData.event}
            ticketId={checkoutData.ticketId}
            quantity={checkoutData.quantity}
            onSuccess={handleCheckoutSuccess}
            onCancel={() => {
              if (selectedEvent) {
                navigate('/evento')
              } else {
                navigate('/programacao')
              }
            }}
          />
        )}

        {/* Fallback caso acesse /checkout direto sem evento selecionado */}
        {currentPath === '/checkout' && !checkoutData && (
          <div className="pt-32 pb-24 max-w-xl mx-auto px-6 text-center space-y-6">
            <h2 className="font-serif text-3xl text-[#F2E8D8]">
              Nenhum ingresso selecionado para compra
            </h2>
            <p className="text-sm text-[#d5c8b5]/80 font-light">
              Escolha uma noite na programação para selecionar seus ingressos e prosseguir com o pagamento
            </p>
            <div>
              <button
                onClick={() => navigate('/programacao')}
                className="px-6 py-3 bg-[#C48A46] text-[#211713] text-xs uppercase tracking-widest font-semibold rounded-sm hover:bg-[#d89f5e] cursor-pointer"
              >
                Ver programação
              </button>
            </div>
          </div>
        )}

        {currentPath === '/meus-ingressos' && (
          <MyTicketsPage
            initialTicket={recentlyPurchasedTicket}
            onNavigate={navigate}
          />
        )}

        {currentPath === '/o-bar' && <AboutPage onNavigate={navigate} />}

        {currentPath === '/atendimento' && <ContactPage />}

        {currentPath === '/privacidade' && <PrivacyPage />}

        {currentPath === '/termos' && <TermsPage />}

        {currentPath === '/creditos' && <CreditsPage />}

        {/* Página não encontrada */}
        {![
          '/',
          '/cardapio',
          '/programacao',
          '/evento',
          '/checkout',
          '/meus-ingressos',
          '/o-bar',
          '/atendimento',
          '/privacidade',
          '/termos',
          '/creditos'
        ].includes(currentPath) && (
          <div className="pt-36 pb-24 max-w-xl mx-auto px-6 text-center space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#C48A46] font-semibold block">
              Página não encontrada
            </span>
            <h2 className="font-serif text-4xl text-[#F2E8D8]">
              O endereço solicitado não está disponível
            </h2>
            <p className="text-sm text-[#d5c8b5]/80 font-light">
              Retorne à página inicial para explorar o cardápio e a programação musical do Âmbar
            </p>
            <div>
              <button
                onClick={() => navigate('/')}
                className="px-6 py-3 bg-[#C48A46] text-[#211713] text-xs uppercase tracking-widest font-semibold rounded-sm hover:bg-[#d89f5e] cursor-pointer"
              >
                Voltar ao início
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Rodapé com links institucionais e aviso legal */}
      <Footer onNavigate={navigate} />
    </div>
  )
}

export default App

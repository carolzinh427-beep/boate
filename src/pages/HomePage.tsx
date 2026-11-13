import React from 'react'
import { Hero } from '../components/Hero'
import { DrinkCard } from '../components/DrinkCard'
import { EventCard } from '../components/EventCard'
import { AtmosphereGallery } from '../components/AtmosphereGallery'
import { FaqAccordion } from '../components/FaqAccordion'
import { DRINKS, EVENTS, BAR_INFO } from '../data/barData'
import type { EventSchedule } from '../data/barData'

interface HomePageProps {
  onNavigate: (path: string) => void
  onSelectEvent: (event: EventSchedule) => void
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectEvent }) => {
  const nextEvent = EVENTS[0]

  const featuredDrinks = [
    DRINKS.find((d) => d.id === 'ambar-da-casa') || DRINKS[6],
    DRINKS.find((d) => d.id === 'negroni') || DRINKS[1],
    DRINKS.find((d) => d.id === 'brisa-de-vitoria') || DRINKS[7],
    DRINKS.find((d) => d.id === 'maracuja-fresh') || DRINKS[9]
  ]

  const upcomingEvents = EVENTS.slice(1, 5)

  return (
    <div className="bg-[#211713] text-[#F2E8D8] font-sans">
      {/* 1. Hero objetivo e proporcional */}
      <Hero onNavigate={onNavigate} />

      {/* 2. Seleção de drinks com fotografias grandes */}
      <section className="py-12 sm:py-16 md:py-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 border-b border-[#542A30]/40 pb-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#C48A46] font-semibold block mb-1">
              Destaques da coquetelaria
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#F2E8D8] font-light">
              Coquetéis em primeiro plano
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/cardapio')}
            className="text-xs uppercase tracking-wider text-[#C48A46] hover:text-[#d89f5e] transition-colors cursor-pointer py-2 self-start sm:self-auto min-h-[44px] flex items-center"
          >
            Ver cardápio completo
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDrinks.map((drink) => (
            <DrinkCard key={drink.id} drink={drink} />
          ))}
        </div>
      </section>

      {/* 3. Próximo evento com acesso à compra */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#160f0c] border-t border-b border-[#542A30]/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-6 sm:mb-8">
            <span className="text-xs uppercase tracking-widest text-[#C48A46] font-semibold block mb-1">
              Próxima noite no bar
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#F2E8D8] font-light">
              Música ao vivo nesta semana
            </h2>
          </div>

          <EventCard event={nextEvent} onSelectEvent={onSelectEvent} featured />
        </div>
      </section>

      {/* 4. Apresentação curta do bar sem excesso de cartões */}
      <section className="py-12 sm:py-16 md:py-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs uppercase tracking-widest text-[#C48A46] font-semibold block">
              O conceito do Âmbar
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#F2E8D8] font-light leading-snug">
              Um refúgio para desacelerar o ritmo da noite
            </h2>
            <div className="space-y-3.5 text-sm sm:text-base text-[#d5c8b5]/85 font-light leading-relaxed">
              <p>
                O Âmbar Bar foi planejado para quem valoriza coquetéis bem dosados, conversas tranquilas e música ao vivo em formato acústico
              </p>
              <p>
                A casa não possui pista de dança nem iluminação frenética. O salão prioriza o acolhimento com madeira escura, luz de velas e atendimento cuidadoso
              </p>
              <p>
                Localizado na Praia do Canto em Vitória, o bar reúne receitas históricas, criações autorais com botânicos brasileiros e opções equilibradas sem álcool
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onNavigate('/o-bar')}
                className="px-6 py-3 border border-[#C48A46] text-[#C48A46] text-xs uppercase tracking-widest font-semibold hover:bg-[#C48A46] hover:text-[#211713] transition-colors cursor-pointer text-center min-h-[44px] flex items-center justify-center"
              >
                Conhecer a história do bar
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="h-60 sm:h-80 rounded-xs overflow-hidden border border-[#542A30]/50 bg-[#160f0c]">
              <img
                src="/images/bar/balcao-madeira.jpg"
                alt="Balcão de madeira escura no Âmbar Bar"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Galeria de atmosfera limpa */}
      <AtmosphereGallery />

      {/* 6. Programação das próximas semanas */}
      <section className="py-12 sm:py-16 md:py-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 border-b border-[#542A30]/40 pb-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#C48A46] font-semibold block mb-1">
              Agenda musical
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#F2E8D8] font-light">
              Próximas semanas no Âmbar
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/programacao')}
            className="text-xs uppercase tracking-wider text-[#C48A46] hover:text-[#d89f5e] transition-colors cursor-pointer py-2 self-start sm:self-auto min-h-[44px] flex items-center"
          >
            Ver programação completa
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} onSelectEvent={onSelectEvent} />
          ))}
        </div>
      </section>

      {/* 7. Perguntas frequentes e canais diretos */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#160f0c] border-t border-[#542A30]/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs uppercase tracking-widest text-[#C48A46] font-semibold block">
                Dúvidas comuns
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#F2E8D8] font-light leading-snug">
                Perguntas frequentes e atendimento
              </h2>
              <p className="text-sm text-[#d5c8b5]/85 font-light leading-relaxed">
                Informações essenciais sobre reserva de mesas, ingressos antecipados para noites musicais, documentos e funcionamento
              </p>

              <div className="p-5 bg-[#1a120f] border border-[#542A30]/50 rounded-xs space-y-3">
                <span className="text-xs uppercase tracking-wider text-[#C48A46] font-semibold block">
                  Canais diretos de contato
                </span>
                <div className="space-y-2 text-xs text-[#d5c8b5]/90">
                  <div>
                    <span className="text-[#F2E8D8] font-medium">Endereço: </span>
                    {BAR_INFO.address}
                  </div>
                  <div>
                    <span className="text-[#F2E8D8] font-medium">WhatsApp: </span>
                    {BAR_INFO.whatsapp}
                  </div>
                  <div>
                    <span className="text-[#F2E8D8] font-medium">Telefone: </span>
                    {BAR_INFO.phone}
                  </div>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('/atendimento')}
                    className="text-xs uppercase tracking-wider text-[#C48A46] hover:underline cursor-pointer min-h-[44px] flex items-center"
                  >
                    Abrir página de atendimento
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <FaqAccordion />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

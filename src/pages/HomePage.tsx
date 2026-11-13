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
  // Próximo evento em destaque
  const nextEvent = EVENTS[0]

  // Seleção de 4 drinks para a primeira dobra pós-hero (2 clássicos, 1 autoral, 1 sem álcool)
  const featuredDrinks = [
    DRINKS.find((d) => d.id === 'ambar-da-casa') || DRINKS[6],
    DRINKS.find((d) => d.id === 'negroni') || DRINKS[1],
    DRINKS.find((d) => d.id === 'brisa-de-vitoria') || DRINKS[7],
    DRINKS.find((d) => d.id === 'maracuja-fresh') || DRINKS[9]
  ]

  // Próximas semanas de eventos (eventos 1 a 4)
  const upcomingEvents = EVENTS.slice(1, 5)

  return (
    <div className="bg-[#211713] text-[#F2E8D8] font-sans">
      {/* 1. Primeira dobra cinematográfica: Hero */}
      <Hero onNavigate={onNavigate} />

      {/* 2. Seleção de drinks com fotografias grandes */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-[#542A30]/40 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#C48A46] font-semibold block mb-2">
              Destaques da coquetelaria
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F2E8D8] font-light">
              Coquetéis em primeiro plano
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/cardapio')}
            className="text-xs uppercase tracking-widest text-[#C48A46] hover:text-[#d89f5e] transition-colors cursor-pointer py-1 self-start md:self-auto border-b border-[#C48A46]"
          >
            Ver cardápio completo
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredDrinks.map((drink) => (
            <DrinkCard key={drink.id} drink={drink} large />
          ))}
        </div>
      </section>

      {/* 3. O próximo evento com acesso à compra */}
      <section className="py-20 bg-[#160f0c] border-t border-b border-[#542A30]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest text-[#C48A46] font-semibold block mb-2">
              Próxima noite no bar
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F2E8D8] font-light">
              Música ao vivo nesta semana
            </h2>
          </div>

          <EventCard event={nextEvent} onSelectEvent={onSelectEvent} featured />
        </div>
      </section>

      {/* 4. Apresentação curta do bar */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#C48A46] font-semibold block">
              O conceito do Âmbar
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F2E8D8] font-light leading-tight">
              Um refúgio para desacelerar o ritmo da noite
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#d5c8b5]/85 font-light leading-relaxed">
              <p>
                O Âmbar Bar foi concebido para quem aprecia bons coquetéis, conversas sem pressa e música acústica executada com sensibilidade
              </p>
              <p>
                Não operamos pistas de dança, luzes frenéticas ou som amplificado em excesso. O ambiente é guiado por iluminação baixa, poltronas acolhedoras, balcão em madeira escura e atendimento atento
              </p>
              <p>
                Localizado na Praia do Canto em Vitória, o bar reúne receitas históricas, criações autorais com botânicos brasileiros e opções equilibradas sem álcool
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('/o-bar')}
                className="px-6 py-3 border border-[#C48A46] text-[#C48A46] text-xs uppercase tracking-widest font-semibold hover:bg-[#C48A46] hover:text-[#211713] transition-colors cursor-pointer text-center"
              >
                Conhecer a história do bar
              </button>
              <button
                onClick={() => onNavigate('/atendimento')}
                className="px-6 py-3 border border-[#542A30] text-[#F2E8D8] text-xs uppercase tracking-widest font-medium hover:border-[#C48A46] transition-colors cursor-pointer text-center"
              >
                Informações de atendimento
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-4 sm:space-y-6">
              <div className="h-64 sm:h-80 rounded-sm overflow-hidden border border-[#542A30]/50 bg-[#1a120f]">
                <img
                  src="/images/bar/balcao-madeira.jpg"
                  alt="Balcão de madeira escura no Âmbar Bar"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 bg-[#1a120f] border border-[#542A30]/40 rounded-sm text-xs text-[#d5c8b5]/80">
                Balcão exclusivo para acompanhar o preparo de cada drink
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 pt-8 sm:pt-12">
              <div className="p-5 bg-[#1a120f] border border-[#542A30]/40 rounded-sm text-xs text-[#d5c8b5]/80">
                Luz de velas e pendentes pontuais que garantem intimidade
              </div>
              <div className="h-64 sm:h-80 rounded-sm overflow-hidden border border-[#542A30]/50 bg-[#1a120f]">
                <img
                  src="/images/bar/mesas-ambiente.jpg"
                  alt="Salão com mesas do Âmbar Bar"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Galeria de atmosfera e coquetelaria */}
      <AtmosphereGallery />

      {/* 6. Programação das próximas semanas */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-[#542A30]/40 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#C48A46] font-semibold block mb-2">
              Agenda musical
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F2E8D8] font-light">
              Próximas semanas no Âmbar
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/programacao')}
            className="text-xs uppercase tracking-widest text-[#C48A46] hover:text-[#d89f5e] transition-colors cursor-pointer py-1 self-start md:self-auto border-b border-[#C48A46]"
          >
            Ver programação completa
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} onSelectEvent={onSelectEvent} />
          ))}
        </div>
      </section>

      {/* 7. Perguntas frequentes e atendimento */}
      <section className="py-24 bg-[#160f0c] border-t border-[#542A30]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#C48A46] font-semibold block">
                Dúvidas comuns
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#F2E8D8] font-light leading-tight">
                Perguntas frequentes e atendimento
              </h2>
              <p className="text-sm text-[#d5c8b5]/80 font-light leading-relaxed">
                Reunimos as principais orientações sobre reserva de mesas, ingressos para noites musicais, documentação e funcionamento do salão
              </p>

              <div className="p-6 bg-[#1a120f] border border-[#542A30]/50 rounded-sm space-y-4">
                <span className="text-xs uppercase tracking-wider text-[#C48A46] font-medium block">
                  Canais diretos de contato
                </span>
                <div className="space-y-2 text-sm text-[#d5c8b5]/90">
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
                    className="text-xs uppercase tracking-widest text-[#C48A46] hover:underline cursor-pointer"
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

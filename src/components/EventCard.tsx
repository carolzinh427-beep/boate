import React from 'react'
import type { EventSchedule } from '../data/barData'

interface EventCardProps {
  event: EventSchedule
  onSelectEvent: (event: EventSchedule) => void
  featured?: boolean
}

export const EventCard: React.FC<EventCardProps> = ({ event, onSelectEvent, featured = false }) => {
  return (
    <article
      className={`bg-[#1a120f] border border-[#542A30]/50 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#C48A46]/70 group ${
        featured ? 'md:grid md:grid-cols-12 md:gap-8' : ''
      }`}
    >
      {/* Imagem do evento */}
      <div
        className={`relative overflow-hidden bg-[#160f0c] ${
          featured ? 'md:col-span-7 h-72 sm:h-96 md:h-full' : 'h-64 sm:h-72'
        }`}
      >
        <img
          src={event.image}
          alt={`Apresentação musical ${event.name}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a120f] via-transparent to-transparent opacity-75" />

        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="text-[11px] uppercase tracking-wider bg-[#160f0c]/90 text-[#C48A46] px-3 py-1 rounded-xs border border-[#C48A46]/40 font-medium">
            {event.weekday}, {event.dateDisplay}
          </span>
          {event.ticketType === 'livre' ? (
            <span className="text-[11px] uppercase tracking-wider bg-[#211713]/90 text-[#F2E8D8] px-2.5 py-1 rounded-xs border border-[#542A30]">
              Entrada livre
            </span>
          ) : (
            <span className="text-[11px] uppercase tracking-wider bg-[#542A30]/90 text-[#F2E8D8] px-2.5 py-1 rounded-xs border border-[#542A30]">
              Ingresso antecipado
            </span>
          )}
        </div>
      </div>

      {/* Conteúdo do evento */}
      <div className={`p-6 sm:p-8 flex flex-col justify-between space-y-6 ${featured ? 'md:col-span-5' : ''}`}>
        <div className="space-y-3">
          <div className="text-xs uppercase tracking-widest text-[#C48A46] font-medium">
            {event.genre}
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl text-[#F2E8D8] font-normal group-hover:text-[#C48A46] transition-colors leading-tight">
            {event.name}
          </h3>

          <div className="text-xs text-[#d5c8b5]/70">
            Com {event.artist}
          </div>

          <p className="text-sm text-[#d5c8b5]/90 leading-relaxed font-light pt-1">
            {event.description}
          </p>

          <div className="pt-3 border-t border-[#542A30]/30 grid grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-[#d5c8b5]/50 block uppercase tracking-wider text-[10px]">
                Abertura do bar
              </span>
              <span className="text-[#F2E8D8] font-medium">
                {event.doorsOpen}
              </span>
            </div>
            <div>
              <span className="text-[#d5c8b5]/50 block uppercase tracking-wider text-[10px]">
                Início da música
              </span>
              <span className="text-[#F2E8D8] font-medium">
                {event.showStart}
              </span>
            </div>
          </div>

          <div className="text-[11px] text-[#d5c8b5]/60 pt-1">
            {event.ageRating}
          </div>
        </div>

        <div className="pt-4 border-t border-[#542A30]/40 flex items-center justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#d5c8b5]/50 block">
              {event.ticketType === 'livre' ? 'Acesso ao salão' : 'Valores a partir de'}
            </span>
            <span className="text-lg font-serif font-medium text-[#C48A46]">
              {event.priceInitialFormatted}
            </span>
          </div>

          <button
            onClick={() => onSelectEvent(event)}
            className="px-5 py-2.5 text-xs uppercase tracking-widest bg-[#C48A46] text-[#211713] font-semibold rounded-sm hover:bg-[#d89f5e] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F2E8D8]"
          >
            {event.ticketType === 'livre' ? 'Ver detalhes' : 'Comprar ingresso'}
          </button>
        </div>
      </div>
    </article>
  )
}

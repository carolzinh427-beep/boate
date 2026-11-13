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
      className={`bg-[#1a120f] border border-[#542A30]/50 rounded-xs overflow-hidden flex flex-col justify-between transition-colors hover:border-[#C48A46]/60 ${
        featured ? 'md:grid md:grid-cols-12 md:gap-6' : ''
      }`}
    >
      {/* Imagem do evento */}
      <div
        className={`relative overflow-hidden bg-[#160f0c] ${
          featured ? 'md:col-span-6 h-48 sm:h-60 md:h-full min-h-[200px]' : 'h-48 sm:h-56'
        }`}
      >
        <img
          src={event.image}
          alt={`Apresentação musical ${event.name}`}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a120f] via-transparent to-transparent opacity-60" />

        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <span className="text-[10px] sm:text-[11px] uppercase tracking-wider bg-[#160f0c]/90 text-[#C48A46] px-2.5 py-1 rounded-xs border border-[#C48A46]/40 font-medium">
            {event.weekday}, {event.dateDisplay}
          </span>
          {event.ticketType === 'livre' ? (
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider bg-[#211713]/90 text-[#F2E8D8] px-2 py-1 rounded-xs border border-[#542A30]">
              Entrada livre
            </span>
          ) : (
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider bg-[#542A30]/90 text-[#F2E8D8] px-2 py-1 rounded-xs border border-[#542A30]">
              Ingresso antecipado
            </span>
          )}
        </div>
      </div>

      {/* Conteúdo do evento com hierarquia clara */}
      <div className={`p-5 sm:p-6 flex flex-col justify-between space-y-5 ${featured ? 'md:col-span-6' : ''}`}>
        <div className="space-y-2.5">
          <span className="text-[11px] uppercase tracking-widest text-[#C48A46] font-medium block">
            {event.genre}
          </span>

          <h3 className="font-serif text-2xl sm:text-3xl text-[#F2E8D8] font-normal leading-snug">
            {event.name}
          </h3>

          <div className="text-xs text-[#d5c8b5]/70">
            Com {event.artist}
          </div>

          <p className="text-sm text-[#d5c8b5]/85 leading-relaxed font-light pt-1">
            {event.description}
          </p>

          <div className="pt-2 border-t border-[#542A30]/30 grid grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-[#d5c8b5]/50 block uppercase tracking-wider text-[9px]">
                Abertura da casa
              </span>
              <span className="text-[#F2E8D8] font-medium">
                {event.doorsOpen}
              </span>
            </div>
            <div>
              <span className="text-[#d5c8b5]/50 block uppercase tracking-wider text-[9px]">
                Início do show
              </span>
              <span className="text-[#F2E8D8] font-medium">
                {event.showStart}
              </span>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-[#542A30]/40 flex items-center justify-between gap-3">
          <div>
            <span className="text-[9px] uppercase tracking-wider text-[#d5c8b5]/50 block">
              {event.ticketType === 'livre' ? 'Acesso ao salão' : 'Valores a partir de'}
            </span>
            <span className="text-base font-serif font-semibold text-[#C48A46]">
              {event.priceInitialFormatted}
            </span>
          </div>

          <button
            onClick={() => onSelectEvent(event)}
            className="px-5 py-2.5 text-xs uppercase tracking-widest bg-[#C48A46] text-[#211713] font-semibold rounded-xs hover:bg-[#d89f5e] transition-colors cursor-pointer min-h-[44px] flex items-center justify-center"
          >
            {event.ticketType === 'livre' ? 'Ver detalhes' : 'Comprar ingresso'}
          </button>
        </div>
      </div>
    </article>
  )
}

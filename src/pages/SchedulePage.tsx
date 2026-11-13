import React, { useState } from 'react'
import { EventCard } from '../components/EventCard'
import { EVENTS } from '../data/barData'
import type { EventSchedule } from '../data/barData'

interface SchedulePageProps {
  onSelectEvent: (event: EventSchedule) => void
}

export const SchedulePage: React.FC<SchedulePageProps> = ({ onSelectEvent }) => {
  const [filter, setFilter] = useState<'todos' | 'pago' | 'livre'>('todos')

  const filteredEvents = EVENTS.filter((ev) => {
    if (filter === 'todos') return true
    return ev.ticketType === filter
  })

  return (
    <div className="bg-[#211713] text-[#F2E8D8] min-h-screen pt-28 pb-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest text-[#C48A46] font-semibold block mb-2">
            Música ao vivo
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#F2E8D8] font-light leading-tight">
            Programação e noites especiais
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#d5c8b5]/85 font-light leading-relaxed">
            Apresentações de jazz, música popular brasileira, soul, blues e samba em formato acústico e intimista pensado para a convivência em mesas e balcão
          </p>

          <div className="mt-4 p-4 bg-[#160f0c] border border-[#542A30]/50 rounded-sm text-xs text-[#d5c8b5]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span>
              Artistas fictícios e datas futuras calculadas para fins demonstrativos
            </span>
            <span className="text-[#C48A46] uppercase tracking-wider text-[11px] font-medium">
              Classificação indicativa 18 anos
            </span>
          </div>
        </div>

        {/* Filtro textual */}
        <div className="flex flex-wrap gap-3 mb-10 pb-4 border-b border-[#542A30]/40">
          <button
            onClick={() => setFilter('todos')}
            className={`px-5 py-2.5 text-xs uppercase tracking-widest rounded-sm transition-all cursor-pointer ${
              filter === 'todos'
                ? 'bg-[#C48A46] text-[#211713] font-semibold'
                : 'border border-[#542A30] text-[#d5c8b5] hover:border-[#C48A46]'
            }`}
          >
            Todos os eventos
          </button>
          <button
            onClick={() => setFilter('pago')}
            className={`px-5 py-2.5 text-xs uppercase tracking-widest rounded-sm transition-all cursor-pointer ${
              filter === 'pago'
                ? 'bg-[#C48A46] text-[#211713] font-semibold'
                : 'border border-[#542A30] text-[#d5c8b5] hover:border-[#C48A46]'
            }`}
          >
            Com ingresso antecipado
          </button>
          <button
            onClick={() => setFilter('livre')}
            className={`px-5 py-2.5 text-xs uppercase tracking-widest rounded-sm transition-all cursor-pointer ${
              filter === 'livre'
                ? 'bg-[#C48A46] text-[#211713] font-semibold'
                : 'border border-[#542A30] text-[#d5c8b5] hover:border-[#C48A46]'
            }`}
          >
            Entrada livre
          </button>
        </div>

        {/* Lista de eventos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} onSelectEvent={onSelectEvent} />
          ))}
        </div>
      </div>
    </div>
  )
}

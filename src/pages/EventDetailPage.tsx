import React, { useState } from 'react'
import type { EventSchedule } from '../data/barData'

interface EventDetailPageProps {
  event: EventSchedule
  onBack: () => void
  onProceedToCheckout: (event: EventSchedule, selectedTicketId: string, quantity: number) => void
}

export const EventDetailPage: React.FC<EventDetailPageProps> = ({
  event,
  onBack,
  onProceedToCheckout
}) => {
  const [selectedTicketId, setSelectedTicketId] = useState<string>(
    event.ticketsAvailable[0]?.id || ''
  )
  const [quantity, setQuantity] = useState<number>(1)

  const selectedTicket = event.ticketsAvailable.find((t) => t.id === selectedTicketId)
  const unitPrice = selectedTicket ? selectedTicket.price : 0
  const subtotal = unitPrice * quantity
  const serviceFee = 0
  const total = subtotal + serviceFee

  const formatPrice = (val: number) => {
    return `R$ ${val.toFixed(2).replace('.', ',')}`
  }

  const handleAdvance = () => {
    if (quantity <= 0) return
    onProceedToCheckout(event, selectedTicketId, quantity)
  }

  return (
    <div className="bg-[#211713] text-[#F2E8D8] min-h-screen pt-28 pb-24 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navegação de retorno */}
        <div className="mb-6">
          <button
            onClick={onBack}
            className="text-xs uppercase tracking-widest text-[#C48A46] hover:text-[#d89f5e] transition-colors cursor-pointer py-1"
          >
            Voltar para a programação
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Coluna principal do evento */}
          <div className="lg:col-span-7 space-y-8">
            <div className="relative h-80 sm:h-96 rounded-sm overflow-hidden border border-[#542A30]/50 bg-[#160f0c]">
              <img
                src={event.image}
                alt={`Apresentação de ${event.name}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#211713] via-transparent to-transparent opacity-80" />
              <div className="absolute top-4 left-4">
                <span className="text-xs uppercase tracking-wider bg-[#160f0c]/90 text-[#C48A46] px-3 py-1.5 rounded-xs border border-[#C48A46]/40 font-medium">
                  {event.weekday}, {event.dateDisplay}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#C48A46] font-medium block">
                {event.genre}
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl text-[#F2E8D8] font-normal leading-tight">
                {event.name}
              </h1>
              <div className="text-sm text-[#d5c8b5]/80">
                Apresentação com {event.artist}
              </div>
            </div>

            <div className="p-6 bg-[#1a120f] border border-[#542A30]/50 rounded-sm grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs">
              <div>
                <span className="text-[#d5c8b5]/50 block uppercase tracking-wider text-[10px]">
                  Abertura da casa
                </span>
                <span className="text-[#F2E8D8] font-medium text-sm">
                  {event.doorsOpen}
                </span>
              </div>
              <div>
                <span className="text-[#d5c8b5]/50 block uppercase tracking-wider text-[10px]">
                  Início do show
                </span>
                <span className="text-[#F2E8D8] font-medium text-sm">
                  {event.showStart}
                </span>
              </div>
              <div>
                <span className="text-[#d5c8b5]/50 block uppercase tracking-wider text-[10px]">
                  Classificação
                </span>
                <span className="text-[#F2E8D8] font-medium text-sm">
                  {event.ageRating}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-[#F2E8D8] font-normal">
                Sobre a apresentação
              </h2>
              <p className="text-sm sm:text-base text-[#d5c8b5]/85 font-light leading-relaxed">
                {event.description}
              </p>
            </div>

            {/* Esclarecimento sobre mesa e consumação */}
            <div className="p-6 bg-[#160f0c] border border-[#542A30]/60 rounded-sm space-y-3">
              <span className="text-xs uppercase tracking-wider text-[#C48A46] font-semibold block">
                Avisos importantes sobre a noite
              </span>
              <p className="text-xs sm:text-sm text-[#d5c8b5]/90 font-light leading-relaxed">
                O ingresso de entrada antecipada garante o acesso à apresentação musical no salão O ingresso não inclui consumação de bebidas ou pratos do cardápio
              </p>
              <p className="text-xs sm:text-sm text-[#d5c8b5]/90 font-light leading-relaxed">
                A reserva de mesa é uma operação separada e sujeita à disponibilidade Os assentos comuns e balcões são ocupados por ordem de chegada no horário de abertura da casa
              </p>
            </div>

            {/* Regras da casa */}
            <div className="space-y-3">
              <h3 className="font-serif text-xl text-[#F2E8D8] font-normal">
                Regras e orientações da casa
              </h3>
              <ul className="space-y-2 text-xs text-[#d5c8b5]/80 font-light">
                {event.rules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#C48A46] font-bold">›</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Coluna de seleção de ingressos e cálculo de valores */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 bg-[#1a120f] border border-[#542A30]/60 rounded-sm p-6 sm:p-8 space-y-6 shadow-xl">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C48A46] font-semibold block mb-1">
                  Ingressos para a noite
                </span>
                <h3 className="font-serif text-2xl text-[#F2E8D8] font-normal">
                  Selecione sua categoria
                </h3>
              </div>

              {event.ticketType === 'livre' ? (
                <div className="p-6 bg-[#160f0c] border border-[#542A30] rounded-sm space-y-4 text-center">
                  <div className="text-sm font-medium text-[#C48A46]">
                    Entrada livre nesta data
                  </div>
                  <p className="text-xs text-[#d5c8b5]/80 font-light leading-relaxed">
                    Não há necessidade de compra antecipada de ingresso O acesso ao salão é liberado conforme a capacidade do bar
                  </p>
                  <button
                    onClick={onBack}
                    className="w-full py-3 border border-[#C48A46] text-[#C48A46] text-xs uppercase tracking-widest font-semibold hover:bg-[#C48A46] hover:text-[#211713] transition-colors cursor-pointer"
                  >
                    Ver outras noites
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Categorias disponíveis */}
                  <div className="space-y-3">
                    {event.ticketsAvailable.map((t) => {
                      const isSelected = selectedTicketId === t.id
                      return (
                        <div
                          key={t.id}
                          onClick={() => setSelectedTicketId(t.id)}
                          className={`p-4 rounded-sm border cursor-pointer transition-all ${
                            isSelected
                              ? 'border-[#C48A46] bg-[#211713]'
                              : 'border-[#542A30]/50 bg-[#160f0c] hover:border-[#542A30]'
                          }`}
                        >
                          <div className="flex justify-between items-start gap-3">
                            <div>
                              <span className="text-sm font-medium text-[#F2E8D8] block">
                                {t.category}
                              </span>
                              <span className="text-xs text-[#d5c8b5]/70 block mt-1 font-light">
                                {t.description}
                              </span>
                            </div>
                            <span className="font-serif text-base text-[#C48A46] font-medium shrink-0">
                              {t.priceFormatted}
                            </span>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Seletor de quantidade sem controles confusos */}
                  <div className="flex items-center justify-between pt-2 border-t border-[#542A30]/30">
                    <span className="text-xs uppercase tracking-wider text-[#d5c8b5]/80">
                      Quantidade de ingressos
                    </span>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        disabled={quantity <= 1}
                        className="px-2.5 py-1 rounded-xs border border-[#542A30] text-[#F2E8D8] text-xs hover:border-[#C48A46] disabled:opacity-30 cursor-pointer"
                        aria-label="Diminuir quantidade"
                      >
                        Menos
                      </button>
                      <span className="font-medium text-sm w-8 text-center text-[#F2E8D8]">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(Math.min(6, quantity + 1))}
                        disabled={quantity >= 6}
                        className="px-2.5 py-1 rounded-xs border border-[#542A30] text-[#F2E8D8] text-xs hover:border-[#C48A46] disabled:opacity-30 cursor-pointer"
                        aria-label="Aumentar quantidade"
                      >
                        Mais
                      </button>
                    </div>
                  </div>

                  {/* Detalhamento transparente do valor sem taxas surpresa */}
                  <div className="p-4 bg-[#160f0c] border border-[#542A30]/40 rounded-sm space-y-2 text-xs">
                    <div className="flex justify-between text-[#d5c8b5]/80">
                      <span>Subtotal ({quantity} ingressos)</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-[#d5c8b5]/80">
                      <span>Taxa de conveniência</span>
                      <span>R$ 0,00</span>
                    </div>
                    <div className="pt-2 border-t border-[#542A30]/30 flex justify-between text-sm font-medium text-[#F2E8D8]">
                      <span>Valor total</span>
                      <span className="text-[#C48A46] font-serif text-lg">
                        {formatPrice(total)}
                      </span>
                    </div>
                  </div>

                  {/* Ação principal */}
                  <button
                    onClick={handleAdvance}
                    className="w-full py-4 bg-[#C48A46] text-[#211713] font-semibold text-xs uppercase tracking-widest rounded-sm hover:bg-[#d89f5e] transition-colors cursor-pointer text-center"
                  >
                    Avançar para pagamento
                  </button>

                  <div className="text-[11px] text-[#d5c8b5]/60 text-center font-light">
                    Sem necessidade de criação prévia de senha no checkout
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

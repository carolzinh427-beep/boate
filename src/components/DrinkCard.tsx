import React, { useState } from 'react'
import type { Drink } from '../data/barData'

interface DrinkCardProps {
  drink: Drink
  large?: boolean
}

export const DrinkCard: React.FC<DrinkCardProps> = ({ drink, large = false }) => {
  const [detailsOpen, setDetailsOpen] = useState(false)

  return (
    <article
      className="bg-[#1a120f] border border-[#542A30]/40 rounded-sm overflow-hidden flex flex-col transition-all duration-300 hover:border-[#C48A46]/60 group"
    >
      {/* Imagem do drink com enquadramento gastronômico elegante */}
      <div className={`relative overflow-hidden ${large ? 'h-80 sm:h-96' : 'h-64 sm:h-72'} bg-[#160f0c]`}>
        <img
          src={drink.image}
          alt={`Coquetel ${drink.name}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a120f] via-transparent to-transparent opacity-80" />

        {/* Indicador textual discreto de categoria e teor alcoólico */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <span className="text-[10px] uppercase tracking-wider bg-[#160f0c]/80 backdrop-blur-xs text-[#d5c8b5] px-2.5 py-1 rounded-xs border border-[#542A30]/50">
            {drink.categoryLabel}
          </span>
          <span
            className={`text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-xs border ${
              drink.alcoholic
                ? 'bg-[#542A30]/80 text-[#F2E8D8] border-[#542A30]'
                : 'bg-[#C48A46]/20 text-[#C48A46] border-[#C48A46]/40'
            }`}
          >
            {drink.alcoholicLabel}
          </span>
        </div>

        <div className="absolute bottom-3 right-3">
          <span className="text-xs uppercase tracking-wider text-[#d5c8b5]/90 bg-[#160f0c]/90 px-2.5 py-1 rounded-xs">
            {drink.volume}
          </span>
        </div>
      </div>

      {/* Informações editoriais do drink */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F2E8D8] font-normal group-hover:text-[#C48A46] transition-colors">
              {drink.name}
            </h3>
            <span className="font-sans text-base font-medium text-[#C48A46]">
              {drink.priceFormatted}
            </span>
          </div>

          <p className="mt-2 text-xs text-[#d5c8b5]/70 italic font-light">
            {drink.ingredients}
          </p>

          <p className="mt-3 text-sm text-[#d5c8b5]/90 leading-relaxed font-light">
            {drink.description}
          </p>
        </div>

        <div className="pt-2 border-t border-[#542A30]/30 flex items-center justify-between">
          <button
            onClick={() => setDetailsOpen(!detailsOpen)}
            className="text-xs uppercase tracking-widest text-[#C48A46] hover:text-[#d89f5e] transition-colors cursor-pointer py-1"
          >
            {detailsOpen ? 'Ocultar preparo' : 'Ver preparo'}
          </button>
          <span className="text-[11px] text-[#d5c8b5]/50">
            Serviço no salão
          </span>
        </div>

        {detailsOpen && (
          <div className="bg-[#211713] p-4 rounded-xs border border-[#542A30]/50 text-xs text-[#d5c8b5]/80 space-y-2 animate-fadeInLines">
            <div className="font-medium text-[#F2E8D8]">
              Composição e serviço
            </div>
            <p>
              Preparo cuidadoso com gelo límpido de lenta fusão e guarnições frescas selecionadas diariamente
            </p>
            <p className="text-[10px] text-[#d5c8b5]/50 pt-1">
              Valores demonstrativos para consulta do cardápio
            </p>
          </div>
        )}
      </div>
    </article>
  )
}

import React, { useState } from 'react'
import type { Drink } from '../data/barData'

interface DrinkCardProps {
  drink: Drink
}

export const DrinkCard: React.FC<DrinkCardProps> = ({ drink }) => {
  const [detailsOpen, setDetailsOpen] = useState(false)

  return (
    <article className="bg-[#1a120f] border border-[#542A30]/50 rounded-xs overflow-hidden flex flex-col justify-between transition-colors hover:border-[#C48A46]/60">
      <div>
        {/* Imagem do drink com proporção adequada para mobile */}
        <div className="relative h-48 sm:h-56 w-full bg-[#160f0c] overflow-hidden">
          <img
            src={drink.image}
            alt={`Coquetel ${drink.name}`}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a120f] via-transparent to-transparent opacity-70" />

          {/* Indicadores textuais essenciais */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            <span className="text-[10px] uppercase tracking-wider bg-[#160f0c]/90 text-[#d5c8b5] px-2.5 py-1 rounded-xs border border-[#542A30]/50">
              {drink.categoryLabel}
            </span>
            <span
              className={`text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-xs border ${
                drink.alcoholic
                  ? 'bg-[#542A30]/90 text-[#F2E8D8] border-[#542A30]'
                  : 'bg-[#C48A46]/20 text-[#C48A46] border-[#C48A46]/40'
              }`}
            >
              {drink.alcoholicLabel}
            </span>
          </div>

          <div className="absolute bottom-3 right-3">
            <span className="text-[11px] uppercase tracking-wider text-[#d5c8b5]/90 bg-[#160f0c]/90 px-2 py-0.5 rounded-xs">
              {drink.volume}
            </span>
          </div>
        </div>

        {/* Informações textuais em hierarquia clara */}
        <div className="p-5 sm:p-6 space-y-3">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-serif text-2xl text-[#F2E8D8] font-normal">
              {drink.name}
            </h3>
            <span className="font-sans text-base font-semibold text-[#C48A46] shrink-0">
              {drink.priceFormatted}
            </span>
          </div>

          <p className="text-xs text-[#d5c8b5]/75 italic font-light leading-relaxed">
            {drink.ingredients}
          </p>

          <p className="text-sm text-[#d5c8b5]/85 font-light leading-relaxed">
            {drink.description}
          </p>
        </div>
      </div>

      {/* Ação secundária para visualizar detalhes do preparo */}
      <div className="p-5 sm:p-6 pt-0">
        <div className="pt-3 border-t border-[#542A30]/30 flex items-center justify-between">
          <button
            onClick={() => setDetailsOpen(!detailsOpen)}
            className="text-xs uppercase tracking-wider text-[#C48A46] hover:text-[#d89f5e] transition-colors cursor-pointer min-h-[44px] flex items-center"
          >
            {detailsOpen ? 'Ocultar preparo' : 'Ver preparo'}
          </button>
          <span className="text-[11px] text-[#d5c8b5]/50">
            Serviço no salão
          </span>
        </div>

        {detailsOpen && (
          <div className="mt-3 p-3.5 bg-[#211713] rounded-xs border border-[#542A30]/50 text-xs text-[#d5c8b5]/80 space-y-1.5 animate-soft-in">
            <div className="font-medium text-[#F2E8D8]">
              Composição e serviço
            </div>
            <p>
              Preparo cuidadoso com gelo límpido de lenta fusão e guarnições frescas selecionadas diariamente
            </p>
          </div>
        )}
      </div>
    </article>
  )
}

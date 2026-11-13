import React, { useState } from 'react'
import { FAQS } from '../data/barData'

export const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {FAQS.map((faq, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={index}
            className="border border-[#542A30]/50 rounded-sm bg-[#1a120f] overflow-hidden transition-colors hover:border-[#C48A46]/60"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#C48A46]"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg sm:text-xl text-[#F2E8D8] font-normal">
                {faq.question}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#C48A46] shrink-0 font-medium">
                {isOpen ? 'Ocultar resposta' : 'Ver resposta'}
              </span>
            </button>

            {isOpen && (
              <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-[#d5c8b5]/90 font-light leading-relaxed border-t border-[#542A30]/30 pt-4 animate-fadeInLines">
                {faq.answer}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}


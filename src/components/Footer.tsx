import React from 'react'
import { BAR_INFO } from '../data/barData'

interface FooterProps {
  onNavigate: (path: string) => void
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (path: string) => {
    onNavigate(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#160f0c] border-t border-[#542A30]/50 text-[#F2E8D8] pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#542A30]/30">
          {/* Coluna 1: Identidade */}
          <div className="space-y-4 md:col-span-1">
            <span className="font-serif text-3xl tracking-widest text-[#F2E8D8] uppercase font-light block">
              Âmbar <span className="font-normal text-[#C48A46]">Bar</span>
            </span>
            <p className="text-sm text-[#d5c8b5]/80 leading-relaxed font-light">
              Coquetelaria clássica e autoral com música ao vivo em atmosfera intimista e acolhedora
            </p>
            <div className="pt-2 text-xs uppercase tracking-wider text-[#C48A46]">
              Vitória, Espírito Santo
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#C48A46] block font-semibold">
              Explorar
            </span>
            <ul className="space-y-2 text-sm text-[#d5c8b5]/80">
              <li>
                <button
                  onClick={() => handleNav('/')}
                  className="hover:text-[#C48A46] transition-colors cursor-pointer"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/cardapio')}
                  className="hover:text-[#C48A46] transition-colors cursor-pointer"
                >
                  Cardápio de drinks
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/programacao')}
                  className="hover:text-[#C48A46] transition-colors cursor-pointer"
                >
                  Programação musical
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/o-bar')}
                  className="hover:text-[#C48A46] transition-colors cursor-pointer"
                >
                  O bar e atmosfera
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/meus-ingressos')}
                  className="hover:text-[#C48A46] transition-colors cursor-pointer"
                >
                  Meus ingressos
                </button>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Horários e Localização */}
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#C48A46] block font-semibold">
              Funcionamento
            </span>
            <div className="space-y-2 text-xs text-[#d5c8b5]/80 leading-relaxed">
              {BAR_INFO.hours.map((h, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-[#F2E8D8] font-medium">{h.days}</span>
                  <span className="text-[#d5c8b5]/60">{h.time}</span>
                </div>
              ))}
              <div className="pt-2">
                <span className="text-[#F2E8D8] font-medium block">Endereço</span>
                <span className="text-[#d5c8b5]/60 block">{BAR_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Coluna 4: Atendimento e Políticas */}
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#C48A46] block font-semibold">
              Informações
            </span>
            <ul className="space-y-2 text-sm text-[#d5c8b5]/80">
              <li>
                <button
                  onClick={() => handleNav('/atendimento')}
                  className="hover:text-[#C48A46] transition-colors cursor-pointer"
                >
                  Atendimento e reservas
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/privacidade')}
                  className="hover:text-[#C48A46] transition-colors cursor-pointer"
                >
                  Privacidade de dados
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/termos')}
                  className="hover:text-[#C48A46] transition-colors cursor-pointer"
                >
                  Termos de compra
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/creditos')}
                  className="hover:text-[#C48A46] transition-colors cursor-pointer"
                >
                  Créditos de imagem
                </button>
              </li>
            </ul>

            <div className="pt-3 text-xs text-[#d5c8b5]/70">
              Telefone: {BAR_INFO.phone}
            </div>
            <div className="text-xs text-[#d5c8b5]/70">
              WhatsApp: {BAR_INFO.whatsapp}
            </div>
          </div>
        </div>

        {/* Aviso Legal Obrigatório sobre Menores de 18 Anos */}
        <div className="py-6 border-b border-[#542A30]/30 text-center">
          <p className="text-xs uppercase tracking-widest text-[#C48A46] font-medium">
            {BAR_INFO.ageRatingNotice}
          </p>
          <p className="text-[11px] text-[#d5c8b5]/60 mt-1">
            Aprecie com moderação e se beber não dirija
          </p>
        </div>

        {/* Rodapé inferior com aviso demonstrativo */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#d5c8b5]/60 space-y-4 md:space-y-0">
          <div>
            Âmbar Bar Coquetelaria e Música ao Vivo em Vitória
          </div>
          <div className="text-center md:text-right">
            Projeto fictício e demonstrativo com fins conceituais de design e engenharia
          </div>
        </div>
      </div>
    </footer>
  )
}


import React from 'react'
import { BAR_INFO } from '../data/barData'
import { AtmosphereGallery } from '../components/AtmosphereGallery'

interface AboutPageProps {
  onNavigate: (path: string) => void
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#211713] text-[#F2E8D8] min-h-screen pt-28 pb-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Cabeçalho */}
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-[#C48A46] font-semibold block mb-2">
            Identidade e essência
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#F2E8D8] font-light leading-tight">
            O Âmbar Bar
          </h1>
          <p className="mt-4 text-base sm:text-xl text-[#d5c8b5]/90 font-light leading-relaxed">
            Um refúgio de coquetelaria clássica e música ao vivo concebido para encontros serenos e conversas que duram
          </p>
        </div>

        {/* Manifesto: Um bar de verdade, não uma boate */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-wider text-[#C48A46] font-medium block">
              Diferença e propósito
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F2E8D8] font-normal leading-snug">
              Sem pista de dança, sem pressa e com os drinks no centro de tudo
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#d5c8b5]/85 font-light leading-relaxed">
              <p>
                O Âmbar Bar nasceu em oposição ao barulho excessivo das noites apressadas. Aqui não há luzes estroboscópicas, neons agressivos ou música em volume que impeça o diálogo
              </p>
              <p>
                Nossa proposta se apoia em três pilares fundamentais: coquetelaria executada com técnica rigorosa, acústica refinada que valoriza cada instrumento e mesas confortáveis que acolhem pequenos grupos e casais
              </p>
              <p>
                O balcão em madeira escura maciça é o coração da casa, onde cada ingrediente é dosado com precisão diante dos seus olhos e servido com gelo translúcido de lenta diluição
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-sm overflow-hidden border border-[#542A30]/50 bg-[#160f0c] h-80 sm:h-96">
            <img
              src="/images/bar/balcao-madeira.jpg"
              alt="Balcão de madeira escura do Âmbar Bar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Galeria de atmosfera integrada */}
        <AtmosphereGallery />

        {/* Informações institucionais, localização e políticas */}
        <div className="bg-[#160f0c] border border-[#542A30]/50 p-8 sm:p-12 rounded-sm space-y-10">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#C48A46] font-semibold block mb-2">
              Orientações de convivência
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F2E8D8] font-light">
              Informações do bar e normas da casa
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-xs text-[#d5c8b5]/85 leading-relaxed">
            <div className="p-6 bg-[#211713] border border-[#542A30]/40 rounded-xs space-y-3">
              <span className="text-xs uppercase tracking-wider text-[#C48A46] font-semibold block">
                Classificação indicativa
              </span>
              <p className="font-medium text-[#F2E8D8]">
                {BAR_INFO.ageRatingNotice}
              </p>
              <p className="font-light">
                {BAR_INFO.documentNotice}
              </p>
            </div>

            <div className="p-6 bg-[#211713] border border-[#542A30]/40 rounded-xs space-y-3">
              <span className="text-xs uppercase tracking-wider text-[#C48A46] font-semibold block">
                Acessibilidade plena
              </span>
              <p className="font-light">
                {BAR_INFO.accessibilityNotice}
              </p>
            </div>

            <div className="p-6 bg-[#211713] border border-[#542A30]/40 rounded-xs space-y-3">
              <span className="text-xs uppercase tracking-wider text-[#C48A46] font-semibold block">
                Mesas e reservas
              </span>
              <p className="font-light">
                {BAR_INFO.reservationNotice}
              </p>
            </div>

            <div className="p-6 bg-[#211713] border border-[#542A30]/40 rounded-xs space-y-3">
              <span className="text-xs uppercase tracking-wider text-[#C48A46] font-semibold block">
                Cancelamentos
              </span>
              <p className="font-light">
                {BAR_INFO.cancellationNotice}
              </p>
            </div>

            <div className="p-6 bg-[#211713] border border-[#542A30]/40 rounded-xs space-y-3">
              <span className="text-xs uppercase tracking-wider text-[#C48A46] font-semibold block">
                Localização em Vitória
              </span>
              <p className="font-medium text-[#F2E8D8]">
                {BAR_INFO.address}
              </p>
              <p className="font-light">
                Bairro {BAR_INFO.neighborhood}, Vitória, Espírito Santo
              </p>
            </div>

            <div className="p-6 bg-[#211713] border border-[#542A30]/40 rounded-xs space-y-3">
              <span className="text-xs uppercase tracking-wider text-[#C48A46] font-semibold block">
                Contatos diretos
              </span>
              <p className="font-light">
                WhatsApp: {BAR_INFO.whatsapp}
              </p>
              <p className="font-light">
                Telefone: {BAR_INFO.phone}
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-[#542A30]/40 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <span className="text-xs text-[#d5c8b5]/60">
              Planeje sua próxima visita ao Âmbar Bar
            </span>
            <div className="flex gap-4">
              <button
                onClick={() => onNavigate('/cardapio')}
                className="px-6 py-3 border border-[#C48A46] text-[#C48A46] text-xs uppercase tracking-widest font-semibold hover:bg-[#C48A46] hover:text-[#211713] transition-colors cursor-pointer"
              >
                Explorar drinks
              </button>
              <button
                onClick={() => onNavigate('/programacao')}
                className="px-6 py-3 bg-[#C48A46] text-[#211713] text-xs uppercase tracking-widest font-semibold hover:bg-[#d89f5e] transition-colors cursor-pointer"
              >
                Ver programação
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


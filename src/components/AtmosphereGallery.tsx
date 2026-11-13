import React from 'react'

export const AtmosphereGallery: React.FC = () => {
  return (
    <section className="py-20 bg-[#160f0c] border-t border-b border-[#542A30]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-widest text-[#C48A46] font-semibold block mb-2">
            Espaço e atmosfera
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#F2E8D8] font-light">
            Madeira escura, luz baixa e som acústico
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#d5c8b5]/80 font-light leading-relaxed">
            Cada detalhe do Âmbar foi projetado para convidar à conversa e ao tempo estendido sem pressa
          </p>
        </div>

        {/* Composição editorial com fotografias amplas e blocos de texto */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Fotografia ampla do balcão de madeira */}
          <div className="md:col-span-7 overflow-hidden rounded-sm border border-[#542A30]/50 bg-[#1a120f] relative group">
            <div className="h-80 sm:h-96 md:h-[460px] overflow-hidden">
              <img
                src="/images/bar/balcao-madeira.jpg"
                alt="Balcão de madeira escura com coquetelaria artesanal"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-4 bg-[#1a120f] border-t border-[#542A30]/30 text-xs text-[#d5c8b5]/70 flex justify-between items-center">
              <span>Balcão principal de madeira nobre</span>
              <span className="text-[#C48A46]">Atendimento direto com os bartenders</span>
            </div>
          </div>

          {/* Bloco editorial sobre coquetelaria */}
          <div className="md:col-span-5 space-y-6">
            <div className="p-8 bg-[#211713] border border-[#542A30]/50 rounded-sm space-y-4">
              <span className="text-xs uppercase tracking-wider text-[#C48A46] font-medium block">
                Filosofia do bar
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F2E8D8] font-normal">
                O copo certo para cada receita
              </h3>
              <p className="text-sm text-[#d5c8b5]/80 font-light leading-relaxed">
                Utilizamos gelo cristalino esculpido em blocos com diluição controlada, destilados de pequenos produtores e botânicos frescos preparados diariamente
              </p>
            </div>

            <div className="overflow-hidden rounded-sm border border-[#542A30]/50 bg-[#1a120f] relative group">
              <div className="h-64 overflow-hidden">
                <img
                  src="/images/bar/detalhe-gelo-copo.jpg"
                  alt="Detalhes da lapidação de gelo e taça de coquetel"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-3 bg-[#1a120f] border-t border-[#542A30]/30 text-xs text-[#d5c8b5]/70">
                Gelo translúcido de lenta fusão
              </div>
            </div>
          </div>
        </div>

        {/* Segunda linha editorial com mesas e iluminação */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 order-2 md:order-1 space-y-6">
            <div className="p-8 bg-[#211713] border border-[#542A30]/50 rounded-sm space-y-4">
              <span className="text-xs uppercase tracking-wider text-[#C48A46] font-medium block">
                Acústica e convivência
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F2E8D8] font-normal">
                Música presente sem sufocar a conversa
              </h3>
              <p className="text-sm text-[#d5c8b5]/80 font-light leading-relaxed">
                Ajustamos o sistema acústico para que os acordes de um violão ou saxofone envolvam as mesas com calor sonoro, permitindo que você converse no mesmo volume em que degusta seu drink
              </p>
            </div>
          </div>

          <div className="md:col-span-7 order-1 md:order-2 overflow-hidden rounded-sm border border-[#542A30]/50 bg-[#1a120f] relative group">
            <div className="h-80 sm:h-96 md:h-[400px] overflow-hidden">
              <img
                src="/images/bar/mesas-ambiente.jpg"
                alt="Mesas e iluminação intimista no salão"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-4 bg-[#1a120f] border-t border-[#542A30]/30 text-xs text-[#d5c8b5]/70 flex justify-between items-center">
              <span>Salão com mesas reservadas e bistrôs</span>
              <span className="text-[#C48A46]">Conforto e distanciamento entre lugares</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


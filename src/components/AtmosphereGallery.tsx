import React from 'react'

export const AtmosphereGallery: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#160f0c] border-t border-b border-[#542A30]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-xl mb-8 sm:mb-12">
          <span className="text-xs uppercase tracking-widest text-[#C48A46] font-semibold block mb-1">
            Espaço e atmosfera
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-[#F2E8D8] font-light">
            Madeira escura, luz baixa e som acústico
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#d5c8b5]/85 font-light leading-relaxed">
            Cada detalhe do Âmbar foi planejado para convidar à conversa e ao tempo estendido sem pressa
          </p>
        </div>

        {/* Layout equilibrado com fotos proporcionais e texto editorial */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
          <div className="space-y-4">
            <div className="h-48 sm:h-64 rounded-xs overflow-hidden border border-[#542A30]/50 bg-[#1a120f]">
              <img
                src="/images/bar/balcao-madeira.jpg"
                alt="Balcão de madeira escura com coquetelaria artesanal"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-xl text-[#F2E8D8]">
                Balcão e coquetelaria
              </h3>
              <p className="text-sm text-[#d5c8b5]/80 font-light leading-relaxed">
                Gelo translúcido esculpido para diluição precisa, destilados selecionados e botânicos frescos preparados diariamente diante dos clientes
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="h-48 sm:h-64 rounded-xs overflow-hidden border border-[#542A30]/50 bg-[#1a120f]">
              <img
                src="/images/bar/mesas-ambiente.jpg"
                alt="Salão com mesas e iluminação intimista"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-xl text-[#F2E8D8]">
                Convivência e acústica
              </h3>
              <p className="text-sm text-[#d5c8b5]/80 font-light leading-relaxed">
                Volume sonoro ajustado para que instrumentos acústicos envolvam o salão sem sufocar conversas entre amigos e casais à mesa
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

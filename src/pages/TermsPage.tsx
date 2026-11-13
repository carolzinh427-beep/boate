import React from 'react'

export const TermsPage: React.FC = () => {
  return (
    <div className="bg-[#211713] text-[#F2E8D8] min-h-screen pt-28 pb-24 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-[#C48A46] font-semibold block mb-2">
            Regras e condições
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#F2E8D8] font-light leading-tight">
            Termos de compra
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#d5c8b5]/85 font-light leading-relaxed">
            Condições gerais para aquisição de ingressos e acesso às noites musicais do Âmbar Bar
          </p>
        </div>

        <div className="bg-[#1a120f] border border-[#542A30]/50 p-8 sm:p-10 rounded-sm space-y-8 text-sm text-[#d5c8b5]/90 font-light leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[#F2E8D8] font-normal">
              1 Natureza do ingresso
            </h2>
            <p>
              O ingresso adquirido concede direito exclusivamente ao acesso à apresentação musical ao vivo na data e horário especificados
            </p>
            <p>
              O ingresso não inclui consumação mínima, bebidas ou porções do cardápio Todos os itens consumidos são lançados e acertados individualmente à mesa
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-[#542A30]/30">
            <h2 className="font-serif text-2xl text-[#F2E8D8] font-normal">
              2 Mesas e ocupação do salão
            </h2>
            <p>
              A compra de ingresso individual não garante reserva de mesa Os assentos comuns de salão e lugares de balcão são disponibilizados por ordem de chegada no horário de abertura da casa
            </p>
            <p>
              Para mesas reservadas específicas, adquira a categoria correspondente quando anunciada ou efetue contato prévio com o setor de reservas
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-[#542A30]/30">
            <h2 className="font-serif text-2xl text-[#F2E8D8] font-normal">
              3 Cancelamentos e reembolsos
            </h2>
            <p>
              O cancelamento da compra com reembolso integral do valor pago pode ser solicitado em até 48 horas antes do horário de abertura da casa para o evento em questão
            </p>
            <p>
              Após esse prazo não serão efetuados reembolsos tendo em vista a reserva de capacidade e os custos de produção artística da noite
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-[#542A30]/30">
            <h2 className="font-serif text-2xl text-[#F2E8D8] font-normal">
              4 Classificação etária e documento
            </h2>
            <p>
              A entrada no estabelecimento é permitida somente para maiores de 18 anos sendo obrigatória a apresentação de documento de identificação original com foto recente na portaria
            </p>
            <p>
              A venda de bebidas com teor alcoólico a menores de 18 anos é expressamente proibida nos termos da legislação brasileira
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}


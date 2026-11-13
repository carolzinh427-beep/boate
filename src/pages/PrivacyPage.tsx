import React from 'react'

export const PrivacyPage: React.FC = () => {
  return (
    <div className="bg-[#211713] text-[#F2E8D8] min-h-screen pt-28 pb-24 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-[#C48A46] font-semibold block mb-2">
            Segurança e transparência
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#F2E8D8] font-light leading-tight">
            Política de privacidade
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#d5c8b5]/85 font-light leading-relaxed">
            Diretrizes sobre o tratamento cuidadoso e confidencial das suas informações no Âmbar Bar
          </p>
        </div>

        <div className="bg-[#1a120f] border border-[#542A30]/50 p-8 sm:p-10 rounded-sm space-y-8 text-sm text-[#d5c8b5]/90 font-light leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[#F2E8D8] font-normal">
              Coleta de dados pessoais
            </h2>
            <p>
              Solicitamos apenas informações estritamente necessárias para a emissão e validação dos ingressos para noites musicais, incluindo nome completo, endereço de e-mail e telefone para contato
            </p>
            <p>
              A apresentação de documento oficial na recepção do bar tem a finalidade exclusiva de comprovar a maioridade legal de 18 anos e conferir a titularidade do ingresso
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-[#542A30]/30">
            <h2 className="font-serif text-2xl text-[#F2E8D8] font-normal">
              Finalidade e não compartilhamento
            </h2>
            <p>
              Seus dados nunca são comercializados, alugados ou compartilhados com terceiros para fins publicitários. As informações são utilizadas apenas para comunicação de serviço relativa ao evento contratado
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-[#542A30]/30">
            <h2 className="font-serif text-2xl text-[#F2E8D8] font-normal">
              Segurança das transações
            </h2>
            <p>
              Não armazenamos dados confidenciais de cartões de crédito em servidores próprios. No ambiente demonstrativo, todos os dados de simulação permanecem no navegador do usuário
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-[#542A30]/30">
            <h2 className="font-serif text-2xl text-[#F2E8D8] font-normal">
              Seus direitos e canal de contato
            </h2>
            <p>
              Você pode solicitar a qualquer momento a exclusão ou retificação dos seus dados cadastrais enviando uma mensagem para o canal de atendimento do Âmbar Bar
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}


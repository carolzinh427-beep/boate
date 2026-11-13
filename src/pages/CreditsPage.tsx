import React from 'react'

export const CreditsPage: React.FC = () => {
  const credits = [
    { item: 'Mojito', author: 'Alex Lau', source: 'Unsplash', license: 'Unsplash License uso livre comercial' },
    { item: 'Negroni', author: 'Michele Blackwell', source: 'Unsplash', license: 'Unsplash License uso livre comercial' },
    { item: 'Aperol Spritz', author: 'Denys Gromov', source: 'Unsplash', license: 'Unsplash License uso livre comercial' },
    { item: 'Gin Tônica', author: 'Kike Salazar N', source: 'Unsplash', license: 'Unsplash License uso livre comercial' },
    { item: 'Caipirinha', author: 'Felipe Santana', source: 'Unsplash', license: 'Unsplash License uso livre comercial' },
    { item: 'Espresso Martini', author: 'M.S. Meeuwesen', source: 'Unsplash', license: 'Unsplash License uso livre comercial' },
    { item: 'Âmbar da Casa', author: 'Johann Trasch', source: 'Unsplash', license: 'Unsplash License uso livre comercial' },
    { item: 'Brisa de Vitória', author: 'Mae Mu', source: 'Unsplash', license: 'Unsplash License uso livre comercial' },
    { item: 'Jardim Noturno', author: 'Helena Yankovska', source: 'Unsplash', license: 'Unsplash License uso livre comercial' },
    { item: 'Maracujá Fresh', author: 'Victoria Shes', source: 'Unsplash', license: 'Unsplash License uso livre comercial' },
    { item: 'Cítrico da Casa', author: 'Kaizen Ng', source: 'Unsplash', license: 'Unsplash License uso livre comercial' },
    { item: 'Abacaxi e Hortelã', author: 'Brooke Lark', source: 'Unsplash', license: 'Unsplash License uso livre comercial' },
    { item: 'Hero estático de bar', author: 'Helena Yankovska', source: 'Unsplash', license: 'Unsplash License uso livre comercial' },
    { item: 'Balcão de madeira', author: 'Luca Bravo', source: 'Unsplash', license: 'Unsplash License uso livre comercial' },
    { item: 'Mesas e salão', author: 'Petr Sevcovic', source: 'Unsplash', license: 'Unsplash License uso livre comercial' },
    { item: 'Detalhe de taça e gelo', author: 'Patrick Schöpflin', source: 'Unsplash', license: 'Unsplash License uso livre comercial' },
    { item: 'Jazz no Âmbar', author: 'Gabriel Gurrola', source: 'Unsplash', license: 'Unsplash License uso livre comercial' },
    { item: 'Voz e Violão', author: 'Wes Hicks', source: 'Unsplash', license: 'Unsplash License uso livre comercial' },
    { item: 'Soul de Sexta', author: 'Austin Neill', source: 'Unsplash', license: 'Unsplash License uso livre comercial' },
    { item: 'Samba de Mesa', author: 'Manuel Will', source: 'Unsplash', license: 'Unsplash License uso livre comercial' },
    { item: 'Blues da Casa', author: 'Austin Neill', source: 'Unsplash', license: 'Unsplash License uso livre comercial' },
    { item: 'Acústico ao Entardecer', author: 'Kelsey Chance', source: 'Unsplash', license: 'Unsplash License uso livre comercial' },
    { item: 'Vídeo cinematográfico hero', author: 'Acervo demonstrativo de coquetelaria', source: 'Royalty-free', license: 'Uso comercial e demonstrativo livre' }
  ]

  return (
    <div className="bg-[#211713] text-[#F2E8D8] min-h-screen pt-28 pb-24 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-[#C48A46] font-semibold block mb-2">
            Autoria e licenças
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#F2E8D8] font-light leading-tight">
            Créditos fotográficos e audiovisuais
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#d5c8b5]/85 font-light leading-relaxed">
            Registro transparente de origem, autores e condições de uso das imagens e mídias selecionadas para a identidade do Âmbar Bar
          </p>
        </div>

        <div className="bg-[#1a120f] border border-[#542A30]/50 rounded-sm overflow-hidden p-6 sm:p-8 space-y-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-[#d5c8b5]/90">
              <thead>
                <tr className="border-b border-[#542A30]/50 text-[11px] uppercase tracking-wider text-[#C48A46]">
                  <th className="py-3 pr-4">Mídia ou Coquetel</th>
                  <th className="py-3 px-4">Fotógrafo ou Autor</th>
                  <th className="py-3 px-4">Origem</th>
                  <th className="py-3 pl-4">Termos de uso</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#542A30]/30 font-light">
                {credits.map((c, i) => (
                  <tr key={i} className="hover:bg-[#211713]/50 transition-colors">
                    <td className="py-3.5 pr-4 font-medium text-[#F2E8D8]">{c.item}</td>
                    <td className="py-3.5 px-4">{c.author}</td>
                    <td className="py-3.5 px-4">{c.source}</td>
                    <td className="py-3.5 pl-4 text-[#d5c8b5]/70">{c.license}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pt-4 border-t border-[#542A30]/30 text-xs text-[#d5c8b5]/60 font-light leading-relaxed">
            Todas as imagens utilizadas no cardápio correspondem fielmente à composição, cor e tipo de copo de cada receita clássica ou autoral demonstrada
          </div>
        </div>
      </div>
    </div>
  )
}


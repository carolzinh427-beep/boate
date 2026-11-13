import React, { useState, useEffect } from 'react'
import QRCode from 'qrcode'
import type { PurchasedTicket } from '../data/barData'

interface MyTicketsPageProps {
  initialTicket?: PurchasedTicket | null
  onNavigate: (path: string) => void
}

export const MyTicketsPage: React.FC<MyTicketsPageProps> = ({ initialTicket, onNavigate }) => {
  const [tickets, setTickets] = useState<PurchasedTicket[]>([])
  const [searchEmail, setSearchEmail] = useState('')
  const [searchCode, setSearchCode] = useState('')
  const [qrCodeDataUrls, setQrCodeDataUrls] = useState<Record<string, string>>({})
  const [validationFeedback, setValidationFeedback] = useState<Record<string, string>>({})

  // Carrega ingressos comprados do localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('ambar_purchased_tickets')
      let list: PurchasedTicket[] = stored ? JSON.parse(stored) : []

      if (initialTicket && !list.some((t) => t.ticketCode === initialTicket.ticketCode)) {
        list = [initialTicket, ...list]
      }

      // Se ainda não houver nenhum ingresso, gera um demonstrativo inicial para teste
      if (list.length === 0) {
        const demoTicket: PurchasedTicket = {
          ticketCode: 'AMB-2026-JAZZ01',
          eventId: 'jazz-no-ambar',
          eventName: 'Jazz no Âmbar',
          eventDate: 'Sexta, 20 de novembro',
          doorsOpen: '19:00',
          showStart: '20:30',
          categoryName: 'Entrada individual',
          quantity: 2,
          unitPrice: 45,
          totalPaid: 90,
          buyerName: 'Mariana Silveira',
          buyerEmail: 'mariana@exemplo.com',
          buyerPhone: '(27) 99876 5432',
          purchaseDate: '13 de novembro de 2026',
          paymentMethod: 'pix',
          status: 'valido',
          isDemo: true
        }
        list = [demoTicket]
        localStorage.setItem('ambar_purchased_tickets', JSON.stringify(list))
      }

      setTickets(list)
    } catch (err) {
      console.warn('Erro ao carregar ingressos', err)
    }
  }, [initialTicket])

  // Gera o QR Code estritamente operacional para cada ingresso
  useEffect(() => {
    tickets.forEach(async (t) => {
      if (!qrCodeDataUrls[t.ticketCode]) {
        try {
          const payload = JSON.stringify({
            bar: 'Ambar Bar Vitoria',
            code: t.ticketCode,
            event: t.eventId,
            buyer: t.buyerName,
            status: t.status,
            securityToken: `SEC-${t.ticketCode.slice(-4)}-2026`
          })
          const dataUrl = await QRCode.toDataURL(payload, {
            width: 220,
            margin: 1,
            color: {
              dark: '#160f0c',
              light: '#F2E8D8'
            }
          })
          setQrCodeDataUrls((prev) => ({ ...prev, [t.ticketCode]: dataUrl }))
        } catch (err) {
          console.error('Falha ao gerar QR code operacional', err)
        }
      }
    })
  }, [tickets, qrCodeDataUrls])

  // Simulação de validação de portaria que impede reutilização
  const handleValidateAtDoor = (ticketCode: string) => {
    setTickets((prev) =>
      prev.map((t) => {
        if (t.ticketCode === ticketCode) {
          if (t.status === 'utilizado') {
            setValidationFeedback((f) => ({
              ...f,
              [ticketCode]: 'Tentativa recusada Ingresso já utilizado anteriormente na portaria'
            }))
            return t
          }
          setValidationFeedback((f) => ({
            ...f,
            [ticketCode]: 'Validação confirmada Entrada liberada para o salão'
          }))
          return { ...t, status: 'utilizado' }
        }
        return t
      })
    )

    // Atualiza persistência local
    try {
      const stored = localStorage.getItem('ambar_purchased_tickets')
      if (stored) {
        const list: PurchasedTicket[] = JSON.parse(stored)
        const updated = list.map((t) =>
          t.ticketCode === ticketCode ? { ...t, status: 'utilizado' as const } : t
        )
        localStorage.setItem('ambar_purchased_tickets', JSON.stringify(updated))
      }
    } catch (e) {
      console.warn(e)
    }
  }

  // Filtro por email ou código
  const filteredTickets = tickets.filter((t) => {
    if (searchEmail.trim() && !t.buyerEmail.toLowerCase().includes(searchEmail.toLowerCase())) {
      return false
    }
    if (searchCode.trim() && !t.ticketCode.toLowerCase().includes(searchCode.toLowerCase())) {
      return false
    }
    return true
  })

  return (
    <div className="bg-[#211713] text-[#F2E8D8] min-h-screen pt-28 pb-24 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest text-[#C48A46] font-semibold block mb-2">
            Acesso aos ingressos
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#F2E8D8] font-light leading-tight">
            Meus ingressos
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#d5c8b5]/85 font-light leading-relaxed">
            Consulte seus ingressos adquiridos para noites especiais, confira orientações de entrada e visualize o código operacional para validação na recepção
          </p>
        </div>

        {/* Busca por e-mail ou código de pedido */}
        <div className="bg-[#1a120f] border border-[#542A30]/50 p-6 rounded-sm mb-10 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#C48A46] font-semibold block">
            Localizar meus ingressos
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#d5c8b5]/70 mb-1">
                E-mail cadastrado
              </label>
              <input
                type="email"
                placeholder="Filtrar por e-mail"
                value={searchEmail}
                onChange={(e) => setSearchEmail(e.target.value)}
                className="w-full bg-[#160f0c] border border-[#542A30] px-3.5 py-2 text-sm text-[#F2E8D8] rounded-xs focus:outline-none focus:border-[#C48A46]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#d5c8b5]/70 mb-1">
                Código do ingresso
              </label>
              <input
                type="text"
                placeholder="Exemplo AMB-2026-JAZZ01"
                value={searchCode}
                onChange={(e) => setSearchCode(e.target.value)}
                className="w-full bg-[#160f0c] border border-[#542A30] px-3.5 py-2 text-sm text-[#F2E8D8] rounded-xs focus:outline-none focus:border-[#C48A46]"
              />
            </div>
          </div>
        </div>

        {/* Lista de Ingressos */}
        {filteredTickets.length === 0 ? (
          <div className="p-12 text-center bg-[#1a120f] border border-[#542A30]/40 rounded-sm space-y-4">
            <h3 className="font-serif text-2xl text-[#F2E8D8]">
              Nenhum ingresso encontrado para os dados informados
            </h3>
            <p className="text-xs text-[#d5c8b5]/70 max-w-md mx-auto font-light">
              Verifique o e-mail informado ou realize uma nova compra na programação de eventos
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('/programacao')}
                className="px-6 py-3 bg-[#C48A46] text-[#211713] font-semibold text-xs uppercase tracking-widest rounded-sm hover:bg-[#d89f5e] transition-colors cursor-pointer"
              >
                Ver programação
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {filteredTickets.map((ticket) => (
              <article
                key={ticket.ticketCode}
                className="bg-[#1a120f] border border-[#542A30]/60 rounded-sm overflow-hidden p-6 sm:p-8 space-y-6 shadow-xl"
              >
                {/* Cabeçalho do Ingresso */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#542A30]/40">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#C48A46] font-semibold block">
                      Código de validação
                    </span>
                    <span className="font-mono text-xl sm:text-2xl text-[#F2E8D8] font-bold tracking-wider">
                      {ticket.ticketCode}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs uppercase tracking-wider px-3 py-1 rounded-xs border font-medium ${
                        ticket.status === 'valido'
                          ? 'bg-[#211713] text-[#C48A46] border-[#C48A46]'
                          : 'bg-[#542A30]/50 text-[#d5c8b5] border-[#542A30]'
                      }`}
                    >
                      {ticket.status === 'valido' ? 'Ingresso válido' : 'Ingresso utilizado'}
                    </span>
                    <span className="text-xs uppercase tracking-wider bg-[#160f0c] text-[#d5c8b5]/70 px-2.5 py-1 rounded-xs border border-[#542A30]">
                      {ticket.paymentMethod === 'pix' ? 'Pago via Pix' : 'Pago via Cartão'}
                    </span>
                  </div>
                </div>

                {/* Conteúdo em duas colunas: Dados e QR Code */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-8 space-y-4">
                    <div>
                      <h2 className="font-serif text-3xl sm:text-4xl text-[#F2E8D8] font-normal">
                        {ticket.eventName}
                      </h2>
                      <div className="text-sm text-[#C48A46] mt-1">
                        {ticket.eventDate}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-xs">
                      <div>
                        <span className="text-[#d5c8b5]/50 block uppercase tracking-wider text-[10px]">
                          Abertura
                        </span>
                        <span className="text-[#F2E8D8] font-medium">
                          {ticket.doorsOpen}
                        </span>
                      </div>
                      <div>
                        <span className="text-[#d5c8b5]/50 block uppercase tracking-wider text-[10px]">
                          Início da música
                        </span>
                        <span className="text-[#F2E8D8] font-medium">
                          {ticket.showStart}
                        </span>
                      </div>
                      <div>
                        <span className="text-[#d5c8b5]/50 block uppercase tracking-wider text-[10px]">
                          Categoria
                        </span>
                        <span className="text-[#F2E8D8] font-medium">
                          {ticket.categoryName}
                        </span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#542A30]/30 space-y-1 text-xs text-[#d5c8b5]/80">
                      <div>
                        <span className="text-[#F2E8D8] font-medium">Titular: </span>
                        {ticket.buyerName}
                      </div>
                      <div>
                        <span className="text-[#F2E8D8] font-medium">E-mail: </span>
                        {ticket.buyerEmail}
                      </div>
                      <div>
                        <span className="text-[#F2E8D8] font-medium">Total: </span>
                        R$ {ticket.totalPaid.toFixed(2).replace('.', ',')} ({ticket.quantity} ingressos)
                      </div>
                    </div>

                    {/* Regras e avisos */}
                    <div className="p-3 bg-[#160f0c] rounded-xs border border-[#542A30]/30 text-[11px] text-[#d5c8b5]/70 leading-relaxed font-light">
                      Apresentação de documento oficial com foto é indispensável na entrada do bar Entrada permitida somente para maiores de 18 anos
                    </div>
                  </div>

                  {/* QR Code estritamente operacional nesta área */}
                  <div className="md:col-span-4 flex flex-col items-center justify-center p-6 bg-[#160f0c] border border-[#542A30]/50 rounded-xs text-center space-y-4">
                    <span className="text-[11px] uppercase tracking-widest text-[#C48A46] font-semibold">
                      Leitura de portaria
                    </span>

                    {qrCodeDataUrls[ticket.ticketCode] ? (
                      <div className="p-2 bg-[#F2E8D8] rounded-xs shadow-md">
                        <img
                          src={qrCodeDataUrls[ticket.ticketCode]}
                          alt={`QR Code operacional do ingresso ${ticket.ticketCode}`}
                          className="w-40 h-40 object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-40 h-40 bg-[#211713] flex items-center justify-center text-xs text-[#d5c8b5]/50">
                        Gerando código
                      </div>
                    )}

                    <div className="space-y-2 w-full">
                      <button
                        onClick={() => handleValidateAtDoor(ticket.ticketCode)}
                        className={`w-full py-2.5 text-xs uppercase tracking-wider rounded-xs font-medium transition-colors cursor-pointer ${
                          ticket.status === 'valido'
                            ? 'bg-[#542A30] text-[#F2E8D8] hover:bg-[#C48A46] hover:text-[#211713]'
                            : 'border border-[#542A30] text-[#d5c8b5]/60 hover:text-[#F2E8D8]'
                        }`}
                      >
                        Simular validação na portaria
                      </button>

                      {validationFeedback[ticket.ticketCode] && (
                        <div className="p-2 bg-[#211713] border border-[#C48A46] text-[11px] text-[#F2E8D8] rounded-xs text-center">
                          {validationFeedback[ticket.ticketCode]}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Aviso legal explícito de ingresso demonstrativo */}
                <div className="pt-4 border-t border-[#542A30]/30 text-center text-xs text-[#C48A46] uppercase tracking-wider font-medium">
                  Ingresso demonstrativo sem valor fiscal ou de acesso físico real
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

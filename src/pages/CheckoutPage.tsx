import React, { useState } from 'react'
import type { EventSchedule, PurchasedTicket } from '../data/barData'

interface CheckoutPageProps {
  event: EventSchedule
  ticketId: string
  quantity: number
  onSuccess: (ticket: PurchasedTicket) => void
  onCancel: () => void
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({
  event,
  ticketId,
  quantity,
  onSuccess,
  onCancel
}) => {
  const selectedTicket = event.ticketsAvailable.find((t) => t.id === ticketId) || event.ticketsAvailable[0]
  const unitPrice = selectedTicket ? selectedTicket.price : 0
  const subtotal = unitPrice * quantity
  const serviceFee = 0
  const total = subtotal + serviceFee

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [documentId, setDocumentId] = useState('')
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'cartao'>('pix')

  // Cartão campos simulados
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolder, setCardHolder] = useState('')
  const [cardExpiry, setCardExpiry] = useState('')
  const [cardCvv, setCardCvv] = useState('')

  const [pixCopied, setPixCopied] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const formatPrice = (val: number) => {
    return `R$ ${val.toFixed(2).replace('.', ',')}`
  }

  // Código Pix demonstrativo
  const simulatedPixCode = `00020126580014br.gov.bcb.pix0136ambar-bar-vitoria-demonstrativo@pix.com520400005303986540${total}.005802BR5916AMBAR BAR VITORIA6007VITORIA62070503***6304E8A2`

  const handleCopyPix = () => {
    navigator.clipboard.writeText(simulatedPixCode)
    setPixCopied(true)
    setTimeout(() => setPixCopied(false), 2500)
  }

  const handleConfirmPayment = (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage('')

    if (!name.trim()) {
      setErrorMessage('Informe o nome completo do titular do ingresso')
      return
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Informe um e-mail válido para recebimento do ingresso')
      return
    }
    if (!phone.trim()) {
      setErrorMessage('Informe um telefone ou WhatsApp para contato')
      return
    }

    if (paymentMethod === 'cartao') {
      if (!cardNumber || cardNumber.replace(/\s/g, '').length < 13) {
        setErrorMessage('Informe um número de cartão de crédito válido para simulação')
        return
      }
      if (!cardHolder.trim()) {
        setErrorMessage('Informe o nome impresso no cartão')
        return
      }
      if (!cardExpiry.trim()) {
        setErrorMessage('Informe a data de validade do cartão')
        return
      }
      if (!cardCvv.trim()) {
        setErrorMessage('Informe o código de segurança do cartão')
        return
      }
    }

    setIsProcessing(true)

    // Simulação de confirmação autenticada no servidor
    setTimeout(() => {
      const randomCode = Math.random().toString(36).substring(2, 7).toUpperCase()
      const newTicket: PurchasedTicket = {
        ticketCode: `AMB-2026-${randomCode}`,
        eventId: event.id,
        eventName: event.name,
        eventDate: `${event.weekday}, ${event.dateDisplay}`,
        doorsOpen: event.doorsOpen,
        showStart: event.showStart,
        categoryName: selectedTicket.category,
        quantity,
        unitPrice,
        totalPaid: total,
        buyerName: name.trim(),
        buyerEmail: email.trim(),
        buyerPhone: phone.trim(),
        purchaseDate: '13 de novembro de 2026',
        paymentMethod,
        status: 'valido',
        isDemo: true
      }

      // Persiste no localStorage
      try {
        const stored = localStorage.getItem('ambar_purchased_tickets')
        const currentTickets: PurchasedTicket[] = stored ? JSON.parse(stored) : []
        localStorage.setItem(
          'ambar_purchased_tickets',
          JSON.stringify([newTicket, ...currentTickets])
        )
      } catch (err) {
        console.warn('Erro ao salvar ingresso localmente', err)
      }

      setIsProcessing(false)
      onSuccess(newTicket)
    }, 1800)
  }

  return (
    <div className="bg-[#211713] text-[#F2E8D8] min-h-screen pt-28 pb-24 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={onCancel}
            className="text-xs uppercase tracking-widest text-[#C48A46] hover:text-[#d89f5e] transition-colors cursor-pointer py-1"
          >
            Voltar para detalhes do evento
          </button>
          <span className="text-xs uppercase tracking-wider text-[#d5c8b5]/60">
            Identificação e pagamento
          </span>
        </div>

        {/* Banner de ambiente demonstrativo */}
        <div className="p-4 mb-8 bg-[#160f0c] border border-[#542A30] rounded-sm text-xs text-[#d5c8b5]/90 space-y-1">
          <div className="text-[#C48A46] uppercase tracking-wider font-semibold">
            Ambiente demonstrativo de compra
          </div>
          <p className="font-light">
            Fluxo simulado para validação da experiência de checkout sem cobrança monetária real ou geração de comprovantes bancários oficiais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Resumo do pedido */}
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="bg-[#1a120f] border border-[#542A30]/60 p-6 rounded-sm space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#C48A46] font-semibold block">
                Resumo da compra
              </span>

              <div className="pb-4 border-b border-[#542A30]/30 space-y-1">
                <h3 className="font-serif text-xl text-[#F2E8D8]">
                  {event.name}
                </h3>
                <div className="text-xs text-[#d5c8b5]/70">
                  {event.weekday}, {event.dateDisplay}
                </div>
                <div className="text-xs text-[#d5c8b5]/70">
                  Abertura {event.doorsOpen} e início {event.showStart}
                </div>
              </div>

              <div className="space-y-2 text-xs text-[#d5c8b5]/80">
                <div className="flex justify-between">
                  <span>Categoria</span>
                  <span className="text-[#F2E8D8] font-medium">{selectedTicket.category}</span>
                </div>
                <div className="flex justify-between">
                  <span>Quantidade</span>
                  <span className="text-[#F2E8D8] font-medium">{quantity} ingressos</span>
                </div>
                <div className="flex justify-between">
                  <span>Valor unitário</span>
                  <span>{formatPrice(unitPrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxa de serviço</span>
                  <span>R$ 0,00</span>
                </div>
              </div>

              <div className="pt-3 border-t border-[#542A30]/40 flex justify-between items-baseline">
                <span className="text-sm font-medium text-[#F2E8D8]">Total a pagar</span>
                <span className="font-serif text-2xl text-[#C48A46] font-medium">
                  {formatPrice(total)}
                </span>
              </div>

              <div className="pt-2 text-[11px] text-[#d5c8b5]/60 leading-relaxed font-light">
                A compra de ingresso de entrada antecipada não garante reserva de mesa nem consumação no cardápio
              </div>
            </div>
          </div>

          {/* Formulário de Identificação e Pagamento */}
          <div className="md:col-span-7 order-1 md:order-2">
            <form onSubmit={handleConfirmPayment} className="bg-[#1a120f] border border-[#542A30]/60 p-6 sm:p-8 rounded-sm space-y-6">
              {/* Identificação sem exigência de senha */}
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#C48A46] font-semibold block">
                  Identificação do titular
                </span>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#d5c8b5]/70 mb-1">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nome e sobrenome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#160f0c] border border-[#542A30] px-3.5 py-2.5 text-sm text-[#F2E8D8] rounded-xs focus:outline-none focus:border-[#C48A46]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#d5c8b5]/70 mb-1">
                      E-mail para recebimento
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#160f0c] border border-[#542A30] px-3.5 py-2.5 text-sm text-[#F2E8D8] rounded-xs focus:outline-none focus:border-[#C48A46]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#d5c8b5]/70 mb-1">
                      Telefone ou WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(27) 99999 0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#160f0c] border border-[#542A30] px-3.5 py-2.5 text-sm text-[#F2E8D8] rounded-xs focus:outline-none focus:border-[#C48A46]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#d5c8b5]/70 mb-1">
                    Documento de identidade oficial (opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="Número do documento para constar no ingresso"
                    value={documentId}
                    onChange={(e) => setDocumentId(e.target.value)}
                    className="w-full bg-[#160f0c] border border-[#542A30] px-3.5 py-2.5 text-sm text-[#F2E8D8] rounded-xs focus:outline-none focus:border-[#C48A46]"
                  />
                  <span className="block text-[10px] text-[#d5c8b5]/50 mt-1">
                    Facilita a conferência na portaria com apresentação obrigatória de documento com foto
                  </span>
                </div>
              </div>

              {/* Método de pagamento */}
              <div className="pt-4 border-t border-[#542A30]/40 space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#C48A46] font-semibold block">
                  Forma de pagamento demonstrativa
                </span>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`py-3 px-4 text-xs uppercase tracking-widest rounded-xs border text-center transition-all cursor-pointer ${
                      paymentMethod === 'pix'
                        ? 'bg-[#C48A46] text-[#211713] font-semibold border-[#C48A46]'
                        : 'border-[#542A30] text-[#d5c8b5] hover:border-[#C48A46]'
                    }`}
                  >
                    Pix instantâneo
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cartao')}
                    className={`py-3 px-4 text-xs uppercase tracking-widest rounded-xs border text-center transition-all cursor-pointer ${
                      paymentMethod === 'cartao'
                        ? 'bg-[#C48A46] text-[#211713] font-semibold border-[#C48A46]'
                        : 'border-[#542A30] text-[#d5c8b5] hover:border-[#C48A46]'
                    }`}
                  >
                    Cartão de crédito
                  </button>
                </div>

                {paymentMethod === 'pix' ? (
                  <div className="p-4 bg-[#160f0c] border border-[#542A30]/50 rounded-sm space-y-3">
                    <div className="text-xs text-[#d5c8b5]/90">
                      Chave Pix demonstrativa gerada para esta compra
                    </div>
                    <div className="p-2.5 bg-[#211713] border border-[#542A30]/40 rounded-xs font-mono text-[11px] text-[#d5c8b5] break-all select-all">
                      {simulatedPixCode}
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        onClick={handleCopyPix}
                        className="text-xs uppercase tracking-wider text-[#C48A46] hover:underline cursor-pointer py-1"
                      >
                        {pixCopied ? 'Código copiado com sucesso' : 'Copiar código Pix'}
                      </button>
                      <span className="text-[10px] text-[#d5c8b5]/50">
                        Aprovação em segundos
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 bg-[#160f0c] border border-[#542A30]/50 rounded-sm space-y-3">
                    <div className="text-xs text-[#d5c8b5]/70 pb-1">
                      Ambiente seguro para testes sem armazenamento real de cartões
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#d5c8b5]/70 mb-1">
                        Número do cartão
                      </label>
                      <input
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        maxLength={19}
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full bg-[#211713] border border-[#542A30] px-3 py-2 text-sm text-[#F2E8D8] rounded-xs focus:outline-none focus:border-[#C48A46]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#d5c8b5]/70 mb-1">
                        Nome impresso no cartão
                      </label>
                      <input
                        type="text"
                        placeholder="Como gravado no cartão"
                        value={cardHolder}
                        onChange={(e) => setCardHolder(e.target.value)}
                        className="w-full bg-[#211713] border border-[#542A30] px-3 py-2 text-sm text-[#F2E8D8] rounded-xs focus:outline-none focus:border-[#C48A46]"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#d5c8b5]/70 mb-1">
                          Validade
                        </label>
                        <input
                          type="text"
                          placeholder="MM/AA"
                          maxLength={5}
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          className="w-full bg-[#211713] border border-[#542A30] px-3 py-2 text-sm text-[#F2E8D8] rounded-xs focus:outline-none focus:border-[#C48A46]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#d5c8b5]/70 mb-1">
                          CVV
                        </label>
                        <input
                          type="password"
                          placeholder="123"
                          maxLength={4}
                          value={cardCvv}
                          onChange={(e) => setCardCvv(e.target.value)}
                          className="w-full bg-[#211713] border border-[#542A30] px-3 py-2 text-sm text-[#F2E8D8] rounded-xs focus:outline-none focus:border-[#C48A46]"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {errorMessage && (
                <div className="p-3 bg-[#542A30]/50 border border-[#C48A46] text-xs text-[#F2E8D8] rounded-xs">
                  {errorMessage}
                </div>
              )}

              {/* Botão de finalização */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 bg-[#C48A46] text-[#211713] font-semibold text-xs uppercase tracking-widest rounded-sm hover:bg-[#d89f5e] transition-colors disabled:opacity-50 cursor-pointer text-center"
              >
                {isProcessing
                  ? 'Processando confirmação do pagamento'
                  : `Confirmar compra de ${formatPrice(total)}`}
              </button>

              <div className="text-[11px] text-[#d5c8b5]/50 text-center font-light">
                Ao confirmar você concorda com os termos de compra e as regras da casa
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

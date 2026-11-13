import React, { useState } from 'react'
import { BAR_INFO } from '../data/barData'
import { FaqAccordion } from '../components/FaqAccordion'

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !message) return

    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSubmitted(true)
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
    }, 1200)
  }

  return (
    <div className="bg-[#211713] text-[#F2E8D8] min-h-screen pt-28 pb-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-[#C48A46] font-semibold block mb-2">
            Canais de comunicação
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#F2E8D8] font-light leading-tight">
            Atendimento e contato
          </h1>
          <p className="mt-4 text-base sm:text-xl text-[#d5c8b5]/90 font-light leading-relaxed">
            Tire dúvidas sobre noites musicais, reserve mesas especiais para grupos ou envie sua mensagem para nossa equipe
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Informações diretas */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-[#1a120f] border border-[#542A30]/50 rounded-sm space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#C48A46] font-semibold block">
                Canais diretos
              </span>

              <div className="space-y-4 text-sm text-[#d5c8b5]/90">
                <div>
                  <span className="text-[#F2E8D8] font-medium block text-xs uppercase tracking-wider text-[#d5c8b5]/50 mb-1">
                    WhatsApp para reservas
                  </span>
                  <span className="text-base font-serif text-[#C48A46]">
                    {BAR_INFO.whatsapp}
                  </span>
                </div>

                <div>
                  <span className="text-[#F2E8D8] font-medium block text-xs uppercase tracking-wider text-[#d5c8b5]/50 mb-1">
                    Telefone fixo
                  </span>
                  <span>{BAR_INFO.phone}</span>
                </div>

                <div>
                  <span className="text-[#F2E8D8] font-medium block text-xs uppercase tracking-wider text-[#d5c8b5]/50 mb-1">
                    Endereço
                  </span>
                  <span>{BAR_INFO.address}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#542A30]/30 space-y-3">
                <span className="text-xs uppercase tracking-wider text-[#C48A46] font-medium block">
                  Horários de atendimento presencial
                </span>
                <div className="space-y-1.5 text-xs text-[#d5c8b5]/80">
                  {BAR_INFO.hours.map((h, i) => (
                    <div key={i} className="flex justify-between">
                      <span className="text-[#F2E8D8]">{h.days}</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#160f0c] border border-[#542A30]/50 rounded-sm text-xs text-[#d5c8b5]/80 space-y-2">
              <span className="text-[#C48A46] uppercase tracking-wider font-semibold block">
                Política de resposta
              </span>
              <p className="font-light leading-relaxed">
                Respondemos mensagens enviadas pelo formulário ou WhatsApp em até 24 horas úteis Para solicitações de cancelamento de ingressos com prazo inferior a 48 horas recomendamos contato telefônico direto
              </p>
            </div>
          </div>

          {/* Formulário de contato */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-8 bg-[#1a120f] border border-[#542A30]/60 rounded-sm space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#C48A46] font-semibold block">
                Envie sua mensagem
              </span>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#d5c8b5]/70 mb-1">
                  Seu nome completo
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

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#d5c8b5]/70 mb-1">
                  Seu e-mail
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
                  Assunto da mensagem
                </label>
                <input
                  type="text"
                  placeholder="Dúvidas sobre ingressos ou reservas"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-[#160f0c] border border-[#542A30] px-3.5 py-2.5 text-sm text-[#F2E8D8] rounded-xs focus:outline-none focus:border-[#C48A46]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#d5c8b5]/70 mb-1">
                  Mensagem
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Como podemos te ajudar"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#160f0c] border border-[#542A30] px-3.5 py-2.5 text-sm text-[#F2E8D8] rounded-xs focus:outline-none focus:border-[#C48A46]"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full py-4 bg-[#C48A46] text-[#211713] font-semibold text-xs uppercase tracking-widest rounded-sm hover:bg-[#d89f5e] transition-colors disabled:opacity-50 cursor-pointer"
              >
                {sending ? 'Enviando mensagem' : 'Enviar mensagem'}
              </button>

              {submitted && (
                <div className="p-4 bg-[#542A30]/50 border border-[#C48A46] text-xs text-[#F2E8D8] rounded-xs text-center">
                  Mensagem recebida com sucesso Entraremos em contato em breve
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Seção de FAQ integrada */}
        <div className="pt-8 border-t border-[#542A30]/40 space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#C48A46] font-semibold block mb-1">
              Esclarecimentos rápidos
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F2E8D8] font-light">
              Perguntas frequentes
            </h2>
          </div>
          <FaqAccordion />
        </div>
      </div>
    </div>
  )
}


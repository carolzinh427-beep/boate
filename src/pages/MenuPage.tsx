import React, { useState } from 'react'
import { DrinkCard } from '../components/DrinkCard'
import { DRINKS } from '../data/barData'
import type { Drink } from '../data/barData'

export const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'todos' | 'classicos' | 'autorais' | 'sem-alcool'>('todos')
  const [drinksList, setDrinksList] = useState<Drink[]>(DRINKS)
  const [editingDrink, setEditingDrink] = useState<Drink | null>(null)
  const [editSuccessMessage, setEditSuccessMessage] = useState(false)

  const filteredDrinks = drinksList.filter((d) => {
    if (activeCategory === 'todos') return true
    return d.category === activeCategory
  })

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingDrink) return

    setDrinksList((prev) =>
      prev.map((d) => (d.id === editingDrink.id ? { ...editingDrink } : d))
    )
    setEditSuccessMessage(true)
    setTimeout(() => {
      setEditSuccessMessage(false)
      setEditingDrink(null)
    }, 1500)
  }

  return (
    <div className="bg-[#211713] text-[#F2E8D8] min-h-screen pt-28 pb-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da página de cardápio */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest text-[#C48A46] font-semibold block mb-2">
            Carta de bebidas
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#F2E8D8] font-light leading-tight">
            Cardápio de coquetelaria
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#d5c8b5]/85 font-light leading-relaxed">
            Uma seleção que percorre receitas clássicas da coquetelaria mundial, criações autorais com inspiração local e opções equilibradas sem teor alcoólico
          </p>

          <div className="mt-4 p-4 bg-[#160f0c] border border-[#542A30]/50 rounded-sm text-xs text-[#d5c8b5]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span>
              Valores em reais para consumo no bar e receitas ilustrativas e editáveis
            </span>
            <span className="text-[#C48A46] uppercase tracking-wider text-[11px] font-medium">
              Venda de bebidas exclusiva para maiores de 18 anos
            </span>
          </div>
        </div>

        {/* Filtros por categoria com botões textuais */}
        <div className="flex flex-wrap gap-3 mb-10 pb-4 border-b border-[#542A30]/40">
          <button
            onClick={() => setActiveCategory('todos')}
            className={`px-5 py-2.5 text-xs uppercase tracking-widest rounded-sm transition-all cursor-pointer ${
              activeCategory === 'todos'
                ? 'bg-[#C48A46] text-[#211713] font-semibold'
                : 'border border-[#542A30] text-[#d5c8b5] hover:border-[#C48A46]'
            }`}
          >
            Todos os drinks
          </button>
          <button
            onClick={() => setActiveCategory('classicos')}
            className={`px-5 py-2.5 text-xs uppercase tracking-widest rounded-sm transition-all cursor-pointer ${
              activeCategory === 'classicos'
                ? 'bg-[#C48A46] text-[#211713] font-semibold'
                : 'border border-[#542A30] text-[#d5c8b5] hover:border-[#C48A46]'
            }`}
          >
            Clássicos
          </button>
          <button
            onClick={() => setActiveCategory('autorais')}
            className={`px-5 py-2.5 text-xs uppercase tracking-widest rounded-sm transition-all cursor-pointer ${
              activeCategory === 'autorais'
                ? 'bg-[#C48A46] text-[#211713] font-semibold'
                : 'border border-[#542A30] text-[#d5c8b5] hover:border-[#C48A46]'
            }`}
          >
            Autorais
          </button>
          <button
            onClick={() => setActiveCategory('sem-alcool')}
            className={`px-5 py-2.5 text-xs uppercase tracking-widest rounded-sm transition-all cursor-pointer ${
              activeCategory === 'sem-alcool'
                ? 'bg-[#C48A46] text-[#211713] font-semibold'
                : 'border border-[#542A30] text-[#d5c8b5] hover:border-[#C48A46]'
            }`}
          >
            Sem álcool
          </button>
        </div>

        {/* Grade de drinks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDrinks.map((drink) => (
            <div key={drink.id} className="flex flex-col">
              <DrinkCard drink={drink} />
              <div className="mt-2 text-right">
                <button
                  onClick={() => setEditingDrink(drink)}
                  className="text-[11px] uppercase tracking-wider text-[#d5c8b5]/60 hover:text-[#C48A46] transition-colors cursor-pointer py-1"
                >
                  Editar receita
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal acessível para edição ilustrativa da receita */}
        {editingDrink && (
          <div
            className="fixed inset-0 z-50 bg-[#160f0c]/80 backdrop-blur-sm flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={`Editar receita do ${editingDrink.name}`}
          >
            <div className="bg-[#211713] border border-[#542A30] p-6 sm:p-8 rounded-sm max-w-lg w-full space-y-6 shadow-2xl">
              <div className="flex justify-between items-center pb-3 border-b border-[#542A30]/50">
                <h3 className="font-serif text-2xl text-[#F2E8D8]">
                  Editar receita de {editingDrink.name}
                </h3>
                <button
                  onClick={() => setEditingDrink(null)}
                  className="text-xs uppercase tracking-wider text-[#C48A46] hover:underline cursor-pointer"
                >
                  Fechar
                </button>
              </div>

              <form onSubmit={handleSaveEdit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#d5c8b5]/70 mb-1">
                    Nome do drink
                  </label>
                  <input
                    type="text"
                    value={editingDrink.name}
                    onChange={(e) =>
                      setEditingDrink({ ...editingDrink, name: e.target.value })
                    }
                    className="w-full bg-[#160f0c] border border-[#542A30] px-3 py-2 text-sm text-[#F2E8D8] rounded-xs focus:outline-none focus:border-[#C48A46]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#d5c8b5]/70 mb-1">
                    Ingredientes
                  </label>
                  <input
                    type="text"
                    value={editingDrink.ingredients}
                    onChange={(e) =>
                      setEditingDrink({ ...editingDrink, ingredients: e.target.value })
                    }
                    className="w-full bg-[#160f0c] border border-[#542A30] px-3 py-2 text-sm text-[#F2E8D8] rounded-xs focus:outline-none focus:border-[#C48A46]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#d5c8b5]/70 mb-1">
                      Volume
                    </label>
                    <input
                      type="text"
                      value={editingDrink.volume}
                      onChange={(e) =>
                        setEditingDrink({ ...editingDrink, volume: e.target.value })
                      }
                      className="w-full bg-[#160f0c] border border-[#542A30] px-3 py-2 text-sm text-[#F2E8D8] rounded-xs focus:outline-none focus:border-[#C48A46]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#d5c8b5]/70 mb-1">
                      Preço demonstrativo
                    </label>
                    <input
                      type="text"
                      value={editingDrink.priceFormatted}
                      onChange={(e) =>
                        setEditingDrink({ ...editingDrink, priceFormatted: e.target.value })
                      }
                      className="w-full bg-[#160f0c] border border-[#542A30] px-3 py-2 text-sm text-[#F2E8D8] rounded-xs focus:outline-none focus:border-[#C48A46]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#d5c8b5]/70 mb-1">
                    Descrição sensorial
                  </label>
                  <textarea
                    rows={3}
                    value={editingDrink.description}
                    onChange={(e) =>
                      setEditingDrink({ ...editingDrink, description: e.target.value })
                    }
                    className="w-full bg-[#160f0c] border border-[#542A30] px-3 py-2 text-sm text-[#F2E8D8] rounded-xs focus:outline-none focus:border-[#C48A46]"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setEditingDrink(null)}
                    className="px-4 py-2 text-xs uppercase tracking-wider border border-[#542A30] text-[#d5c8b5] hover:border-[#C48A46] rounded-xs cursor-pointer"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs uppercase tracking-widest bg-[#C48A46] text-[#211713] font-semibold rounded-xs hover:bg-[#d89f5e] transition-colors cursor-pointer"
                  >
                    Salvar alterações
                  </button>
                </div>

                {editSuccessMessage && (
                  <div className="p-3 bg-[#542A30]/40 border border-[#C48A46] text-xs text-[#F2E8D8] text-center rounded-xs">
                    Receita atualizada com sucesso
                  </div>
                )}
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

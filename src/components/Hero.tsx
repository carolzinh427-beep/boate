import React, { useState, useRef, useEffect } from 'react'

interface HeroProps {
  onNavigate: (path: string) => void
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [isPlaying, setIsPlaying] = useState(true)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) {
      setPrefersReducedMotion(true)
      setIsPlaying(false)
    }

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
      if (e.matches) {
        setIsPlaying(false)
        if (videoRef.current) videoRef.current.pause()
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <section
      className="pt-24 sm:pt-32 md:pt-36 pb-12 sm:pb-16 bg-[#160f0c] border-b border-[#542A30]/40"
      aria-label="Apresentação do Âmbar Bar"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Conteúdo textual objetivo */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-serif text-[32px] sm:text-4xl md:text-5xl lg:text-6xl text-[#F2E8D8] font-normal leading-[1.15] tracking-tight">
              Bons drinks, música por perto e tempo para ficar
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#d5c8b5]/90 font-light leading-relaxed max-w-xl">
              Conheça o cardápio e escolha a próxima noite para encontrar sua mesa no Âmbar
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => onNavigate('/cardapio')}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#C48A46] text-[#211713] font-semibold text-xs uppercase tracking-widest rounded-xs hover:bg-[#d89f5e] transition-colors cursor-pointer min-h-[44px] flex items-center justify-center text-center shadow-md shadow-black/30"
              >
                Explorar drinks
              </button>

              <button
                onClick={() => onNavigate('/programacao')}
                className="w-full sm:w-auto px-7 py-3.5 border border-[#C48A46]/80 text-[#F2E8D8] font-medium text-xs uppercase tracking-widest rounded-xs hover:bg-[#542A30]/40 hover:border-[#C48A46] transition-colors cursor-pointer min-h-[44px] flex items-center justify-center text-center"
              >
                Ver programação
              </button>
            </div>
          </div>

          {/* Mídia proporcional em bloco separado sem competir com o título */}
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[16/10] h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px] rounded-xs overflow-hidden border border-[#542A30]/60 bg-[#211713]">
              {!prefersReducedMotion ? (
                <video
                  ref={videoRef}
                  src="/videos/hero-cocktail.mp4"
                  poster="/images/bar/hero-fallback.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  onLoadedData={() => setVideoLoaded(true)}
                  className={`w-full h-full object-cover transition-opacity duration-700 ${
                    videoLoaded ? 'opacity-90' : 'opacity-0'
                  }`}
                  aria-hidden="true"
                />
              ) : null}

              {/* Fotografia estática como alternativa */}
              <img
                src="/images/bar/hero-fallback.jpg"
                alt="Preparo de drink no balcão do Âmbar Bar"
                loading="lazy"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  prefersReducedMotion || !videoLoaded ? 'opacity-90' : 'opacity-0 pointer-events-none'
                }`}
              />

              {/* Controle textual discreto para pausar */}
              {!prefersReducedMotion && (
                <div className="absolute bottom-3 right-3 z-10">
                  <button
                    onClick={togglePlay}
                    className="text-[10px] uppercase tracking-wider text-[#d5c8b5]/80 hover:text-[#C48A46] transition-colors bg-[#160f0c]/90 px-3 py-1.5 rounded-xs border border-[#542A30]/60 cursor-pointer min-h-[44px] flex items-center"
                    aria-label={isPlaying ? 'Pausar vídeo demonstrativo' : 'Reproduzir vídeo demonstrativo'}
                  >
                    {isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

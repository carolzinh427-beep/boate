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
    // Verifica se o usuário prefere redução de movimento
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
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#160f0c]"
      aria-label="Apresentação inicial Âmbar Bar"
    >
      {/* Mídia de fundo: vídeo com fallback para fotografia estática */}
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
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-40' : 'opacity-0'
          }`}
          aria-hidden="true"
        />
      ) : null}

      {/* Fotografia estática como alternativa ou fallback */}
      <div
        className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-700 ${
          prefersReducedMotion || !videoLoaded ? 'opacity-40' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundImage: `url('/images/bar/hero-fallback.jpg')` }}
        aria-hidden="true"
      />

      {/* Camadas sutis de iluminação quente e escuridão acolhedora */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#211713] via-[#211713]/60 to-[#160f0c]/80 pointer-events-none" />
      <div className="absolute inset-0 bg-radial from-transparent via-[#211713]/40 to-[#160f0c]/90 pointer-events-none" />

      {/* Conteúdo central: estritamente título, descrição e duas ações */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center pt-24 pb-16">
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F2E8D8] font-light tracking-tight leading-[1.08] animate-hero-title">
          Bons drinks, música por perto e tempo para ficar
        </h1>

        <p className="mt-8 sm:mt-10 text-base sm:text-xl md:text-2xl text-[#d5c8b5]/90 font-light max-w-2xl mx-auto leading-relaxed animate-hero-desc">
          Conheça o cardápio e escolha a próxima noite para encontrar sua mesa no Âmbar
        </p>

        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-hero-actions">
          <button
            onClick={() => onNavigate('/cardapio')}
            className="w-full sm:w-auto px-8 py-4 bg-[#C48A46] text-[#211713] font-semibold text-xs sm:text-sm uppercase tracking-widest rounded-sm hover:bg-[#d89f5e] transition-all transform hover:-translate-y-0.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F2E8D8] shadow-lg shadow-[#000]/40"
          >
            Explorar drinks
          </button>

          <button
            onClick={() => onNavigate('/programacao')}
            className="w-full sm:w-auto px-8 py-4 border border-[#C48A46]/80 text-[#F2E8D8] font-medium text-xs sm:text-sm uppercase tracking-widest rounded-sm hover:bg-[#542A30]/50 hover:border-[#C48A46] transition-all transform hover:-translate-y-0.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C48A46] backdrop-blur-sm"
          >
            Ver programação
          </button>
        </div>
      </div>

      {/* Controle textual discreto para pausar a animação */}
      {!prefersReducedMotion && (
        <div className="absolute bottom-6 right-6 z-20">
          <button
            onClick={togglePlay}
            className="text-[11px] uppercase tracking-widest text-[#d5c8b5]/60 hover:text-[#C48A46] transition-colors bg-[#160f0c]/60 backdrop-blur-xs px-3 py-1.5 rounded-sm border border-[#542A30]/30 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#C48A46]"
            aria-label={isPlaying ? 'Pausar vídeo de fundo' : 'Reproduzir vídeo de fundo'}
          >
            {isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
          </button>
        </div>
      )}
    </section>
  )
}


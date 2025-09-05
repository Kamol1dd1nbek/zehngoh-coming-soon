export default function ComingSoonPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Main heading with Space Grotesk font */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 font-[family-name:var(--font-space-grotesk)] text-balance">
          Tez orada ishga tushamiz
        </h1>

        {/* Subtitle with animated dots */}
        <div className="text-lg md:text-xl text-muted-foreground font-[family-name:var(--font-dm-sans)] leading-relaxed">
          <span className="text-pretty">Biz siz uchun yangi loyihani tayyorlamoqdamiz</span>
          <span className="animate-dots inline-block ml-1">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </div>

        {/* Optional subtle accent element */}
        <div className="mt-12 w-16 h-0.5 bg-accent mx-auto opacity-60"></div>
      </div>
    </main>
  )
}

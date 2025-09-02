import { useState, useEffect } from 'react';
import { DebtTimer } from '@/components/DebtTimer';
import { StickyTimer } from '@/components/StickyTimer';
import { AdminPanel } from '@/components/AdminPanel';
import { FloatingParticles } from '@/components/FloatingParticles';

const Index = () => {
  const [showStickyTimer, setShowStickyTimer] = useState(false);
  const [debtAmount, setDebtAmount] = useState(200);
  const [isPaid, setIsPaid] = useState(false);
  
  const startDate = "2025-09-03T00:00:00";

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowStickyTimer(scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isPaid) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-glow-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="text-center max-w-4xl relative z-10 animate-scale-in">
          <div className="text-8xl md:text-9xl mb-8 animate-bounce-subtle">🎉</div>
          
          <h1 className="font-display text-5xl md:text-8xl font-bold bg-gradient-main bg-clip-text text-transparent mb-8 animate-fade-in">
            FINALMENTE!
          </h1>
          
          <div className="bg-card/60 backdrop-blur-lg border border-border/50 rounded-3xl p-8 md:p-12 mb-8 animate-fade-in-delayed">
            <p className="font-display text-2xl md:text-4xl text-foreground mb-4 font-medium">
              Allan pagou os <span className="text-primary font-bold">R$ {debtAmount.toFixed(2)}</span>!
            </p>
            <p className="text-lg md:text-xl text-muted-foreground">
              A dívida foi quitada e a paz foi restaurada no universo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gradient-main p-6 rounded-2xl animate-fade-in-delayed" style={{animationDelay: '0.2s'}}>
              <div className="text-3xl mb-2">✅</div>
              <p className="font-semibold text-primary-foreground">Dívida Quitada</p>
            </div>
            <div className="bg-gradient-main p-6 rounded-2xl animate-fade-in-delayed" style={{animationDelay: '0.4s'}}>
              <div className="text-3xl mb-2">🤝</div>
              <p className="font-semibold text-primary-foreground">Amizade Restaurada</p>
            </div>
            <div className="bg-gradient-main p-6 rounded-2xl animate-fade-in-delayed" style={{animationDelay: '0.6s'}}>
              <div className="text-3xl mb-2">🎊</div>
              <p className="font-semibold text-primary-foreground">Missão Cumprida</p>
            </div>
          </div>
        </div>
        
        <AdminPanel 
          currentAmount={debtAmount}
          isPaid={isPaid}
          onUpdateAmount={setDebtAmount}
          onTogglePaid={setIsPaid}
        />
      </div>
    );
  }

  return (
    <>
      {/* Floating Particles Background */}
      <FloatingParticles />
      
      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Background decorations */}
        <div className="fixed inset-0 bg-gradient-to-br from-purple-deep/20 via-background to-primary/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-glow-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center p-6 md:p-8 text-center relative z-10">
          <div className="max-w-7xl w-full space-y-12">
            {/* Main Title */}
            <div className="space-y-6 animate-fade-in">
              <h1 className="font-display text-4xl md:text-6xl lg:text-8xl font-bold leading-tight">
                <span className="bg-gradient-main bg-clip-text text-transparent block">
                  ALLAN MATTES
                </span>
                <span className="bg-gradient-main bg-clip-text text-transparent block">
                  SANTIAGO
                </span>
                <span className="text-foreground/90 block mt-4 text-3xl md:text-5xl lg:text-6xl font-medium">
                  ESTÁ A
                </span>
              </h1>
            </div>

            {/* Timer */}
            <div className="animate-slide-up">
              <DebtTimer startDate={startDate} />
            </div>

            {/* Bottom Text */}
            <div className="space-y-6 animate-fade-in-delayed">
              <h2 className="font-display text-3xl md:text-5xl lg:text-7xl font-bold text-destructive relative">
                <span className="animate-glow-pulse">SEM ME PAGAR</span>
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground font-medium">
                me paga aí caloteiro 🙄
              </p>
              
              <div className="bg-card/40 backdrop-blur-lg border border-border/30 rounded-3xl p-6 md:p-8 max-w-md mx-auto animate-scale-in">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                    Valor em Aberto
                  </p>
                  <p className="font-display text-2xl md:text-3xl font-bold text-primary">
                    R$ {debtAmount.toFixed(2)}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Desde 03 de setembro de 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Campaign Section */}
        <section className="py-20 md:py-32 px-6 md:px-8 relative z-10">
          <div className="max-w-6xl mx-auto text-center space-y-16">
            <div className="animate-fade-in">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Campanha de Cobrança Digital
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Vamos fazer essa dívida viralizar nas redes sociais até o Allan ter vergonha na cara!
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group bg-gradient-main p-8 md:p-10 rounded-3xl transition-all duration-500 hover:scale-105 animate-fade-in-delayed">
                <div className="space-y-4">
                  <div className="text-4xl mb-4">📱</div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
                    #AllanPagaOVini
                  </h3>
                  <p className="text-primary-foreground/90 text-lg leading-relaxed">
                    Compartilhe essa hashtag e marca o Allan em todas as redes sociais! 
                    Vamos fazer ele famoso por todos os motivos errados.
                  </p>
                </div>
              </div>

              <div className="group bg-card/60 backdrop-blur-lg border border-border/30 p-8 md:p-10 rounded-3xl transition-all duration-500 hover:scale-105 animate-fade-in-delayed" style={{animationDelay: '0.2s'}}>
                <div className="space-y-4">
                  <div className="text-4xl mb-4">💸</div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-accent">
                    #AllanCaloteiro
                  </h3>
                  <p className="text-foreground/80 text-lg leading-relaxed">
                    Esta hashtag vai acompanhar o Allan até ele quitar a dívida. 
                    Pressão social é a melhor cobrança!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 md:py-32 px-6 md:px-8 bg-muted/10 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-8 animate-fade-in">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                A História da Dívida
              </h2>
              
              <div className="bg-card/60 backdrop-blur-lg border border-border/30 rounded-3xl p-8 md:p-12 text-left max-w-4xl mx-auto">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 rounded-full p-3 flex-shrink-0 mt-1">
                      <div className="text-2xl">📅</div>
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                        03 de Setembro de 2025
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Allan Mattes Santiago pediu emprestado <strong className="text-primary">R$ {debtAmount.toFixed(2)}</strong> e prometeu 
                        que pagaria "logo logo". Bem, aqui estamos...
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/20 rounded-full p-3 flex-shrink-0 mt-1">
                      <div className="text-2xl">⏰</div>
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                        O Cronômetro da Vergonha
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Este cronômetro conta implacavelmente cada segundo que passa sem o pagamento. 
                        É matemática pura: tempo + dívida = constrangimento crescente.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-destructive/20 rounded-full p-3 flex-shrink-0 mt-1">
                      <div className="text-2xl">🎯</div>
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                        A Missão
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Fazer tanto barulho nas redes sociais que o Allan não vai ter escolha a não ser pagar. 
                        Pressão social funciona, galera!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center pt-8">
                <p className="text-sm text-muted-foreground italic max-w-2xl mx-auto">
                  <strong>Disclaimer:</strong> Este site é uma brincadeira entre amigos com fins humorísticos. 
                  Allan, se você está vendo isso, já sabe o que fazer! 😄
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 md:py-32 px-6 md:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-12 animate-fade-in">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Estatísticas em Tempo Real
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-card/40 backdrop-blur-lg border border-border/30 p-6 md:p-8 rounded-2xl text-center group hover:bg-card/60 transition-all duration-300 animate-scale-in">
                  <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                    R$ {debtAmount.toFixed(2)}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Valor Devido</div>
                </div>
                
                <div className="bg-card/40 backdrop-blur-lg border border-border/30 p-6 md:p-8 rounded-2xl text-center group hover:bg-card/60 transition-all duration-300 animate-scale-in" style={{animationDelay: '0.1s'}}>
                  <div className="font-display text-3xl md:text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform">
                    ∞
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Paciência do Vini</div>
                </div>
                
                <div className="bg-card/40 backdrop-blur-lg border border-border/30 p-6 md:p-8 rounded-2xl text-center group hover:bg-card/60 transition-all duration-300 animate-scale-in" style={{animationDelay: '0.2s'}}>
                  <div className="font-display text-3xl md:text-4xl font-bold text-destructive mb-2 group-hover:scale-110 transition-transform">
                    0
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Pagamentos</div>
                </div>
                
                <div className="bg-card/40 backdrop-blur-lg border border-border/30 p-6 md:p-8 rounded-2xl text-center group hover:bg-card/60 transition-all duration-300 animate-scale-in" style={{animationDelay: '0.3s'}}>
                  <div className="font-display text-3xl md:text-4xl font-bold text-purple-glow mb-2 group-hover:scale-110 transition-transform">
                    100%
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Taxa de Calote</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Sticky Timer */}
      <StickyTimer startDate={startDate} isVisible={showStickyTimer} />

      {/* Admin Panel */}
      <AdminPanel 
        currentAmount={debtAmount}
        isPaid={isPaid}
        onUpdateAmount={setDebtAmount}
        onTogglePaid={setIsPaid}
      />
    </>
  );
};

export default Index;
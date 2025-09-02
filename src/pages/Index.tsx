import { useState, useEffect } from 'react';
import { DebtTimer } from '@/components/DebtTimer';
import { StickyTimer } from '@/components/StickyTimer';
import { AdminPanel } from '@/components/AdminPanel';

const Index = () => {
  const [showStickyTimer, setShowStickyTimer] = useState(false);
  const [debtAmount, setDebtAmount] = useState(200);
  const [isPaid, setIsPaid] = useState(false);
  
  const startDate = "2025-09-03T00:00:00";

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowStickyTimer(scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isPaid) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center max-w-2xl">
          <div className="text-6xl md:text-8xl mb-8">🎉</div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-main bg-clip-text text-transparent mb-6">
            PAGOOOOOO!
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Allan finalmente pagou os R$ {debtAmount.toFixed(2)}!
          </p>
          <div className="bg-gradient-main p-6 rounded-2xl shadow-glow">
            <p className="text-lg font-semibold text-primary-foreground">
              🎊 Missão cumprida! 🎊
            </p>
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
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
          <div className="max-w-6xl w-full">
            {/* Main Title */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              <span className="bg-gradient-main bg-clip-text text-transparent">
                ALLAN MATTES SANTIAGO
              </span>
              <br />
              <span className="text-foreground">ESTÁ A</span>
            </h1>

            {/* Timer */}
            <div className="mb-8">
              <DebtTimer startDate={startDate} />
            </div>

            {/* Bottom Text */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-destructive animate-pulse">
                SEM ME PAGAR
              </h2>
              <p className="text-base md:text-lg text-muted-foreground font-medium">
                me paga aí caloteiro
              </p>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 md:p-6 mt-8">
                <p className="text-lg md:text-xl font-semibold text-primary mb-2">
                  Valor da dívida: R$ {debtAmount.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Vamos viralizar essa cobrança! 🚀
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-main p-6 rounded-2xl shadow-glow">
                <h3 className="text-xl font-bold text-primary-foreground mb-4">
                  #AllanPagaOVini
                </h3>
                <p className="text-primary-foreground/90">
                  Compartilhe nas suas redes sociais e marca o Allan para ele ver que todo mundo sabe que ele é caloteiro!
                </p>
              </div>

              <div className="bg-gradient-dark p-6 rounded-2xl shadow-purple">
                <h3 className="text-xl font-bold text-accent mb-4">
                  #AllanCaloteiro
                </h3>
                <p className="text-foreground/90">
                  Vamos fazer essa hashtag chegar até ele! Quanto mais gente souber, mais pressão para pagar!
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-muted/50 rounded-2xl border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                O que aconteceu? 🤔
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                No dia <strong>03 de setembro de 2025</strong>, Allan Mattes Santiago pegou emprestado comigo a quantia de <strong>R$ {debtAmount.toFixed(2)}</strong>. 
                Desde então, esse cronômetro conta implacavelmente o tempo que ele está devendo. 
                Será que ele vai ter coragem moral de continuar me devendo? 🤷‍♂️
              </p>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground italic">
                * Este site é uma brincadeira entre amigos. Allan, se você está vendo isso, você sabe o que fazer! 😄
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Estatísticas da Dívida 📊
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-card p-4 rounded-lg text-center border border-border">
                <div className="text-2xl font-bold text-primary">R$ {debtAmount.toFixed(2)}</div>
                <div className="text-sm text-muted-foreground">Valor Original</div>
              </div>
              
              <div className="bg-card p-4 rounded-lg text-center border border-border">
                <div className="text-2xl font-bold text-accent">∞</div>
                <div className="text-sm text-muted-foreground">Paciência do Vini</div>
              </div>
              
              <div className="bg-card p-4 rounded-lg text-center border border-border">
                <div className="text-2xl font-bold text-destructive">0</div>
                <div className="text-sm text-muted-foreground">Pagamentos</div>
              </div>
              
              <div className="bg-card p-4 rounded-lg text-center border border-border">
                <div className="text-2xl font-bold text-purple-glow">100%</div>
                <div className="text-sm text-muted-foreground">Calotagem</div>
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
import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface DebtTimerProps {
  startDate: string;
  isCompact?: boolean;
}

export const DebtTimer = ({ startDate, isCompact = false }: DebtTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const start = new Date(startDate);
      const now = new Date();
      const difference = now.getTime() - start.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [startDate]);

  if (isCompact) {
    return (
      <div className="flex items-center gap-2 bg-gradient-main px-4 py-2 rounded-xl shadow-glow animate-glow-pulse">
        <span className="font-display text-sm font-bold text-primary-foreground">
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
      <div className="bg-gradient-main p-6 md:p-10 rounded-3xl shadow-glow text-center group hover:scale-105 transition-all duration-500 animate-scale-in">
        <div className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-3 group-hover:scale-110 transition-transform">
          {timeLeft.days}
        </div>
        <div className="text-sm md:text-base font-semibold text-primary-foreground/80 uppercase tracking-wider">
          Dias
        </div>
      </div>

      <div className="bg-gradient-main p-6 md:p-10 rounded-3xl shadow-glow text-center group hover:scale-105 transition-all duration-500 animate-scale-in" style={{animationDelay: '0.1s'}}>
        <div className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-3 group-hover:scale-110 transition-transform">
          {timeLeft.hours}
        </div>
        <div className="text-sm md:text-base font-semibold text-primary-foreground/80 uppercase tracking-wider">
          Horas
        </div>
      </div>

      <div className="bg-gradient-main p-6 md:p-10 rounded-3xl shadow-glow text-center group hover:scale-105 transition-all duration-500 animate-scale-in" style={{animationDelay: '0.2s'}}>
        <div className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-3 group-hover:scale-110 transition-transform">
          {timeLeft.minutes}
        </div>
        <div className="text-sm md:text-base font-semibold text-primary-foreground/80 uppercase tracking-wider">
          Minutos
        </div>
      </div>

      <div className="bg-gradient-main p-6 md:p-10 rounded-3xl shadow-glow text-center group hover:scale-105 transition-all duration-500 animate-glow-pulse">
        <div className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-3 group-hover:scale-110 transition-transform animate-bounce-subtle">
          {timeLeft.seconds}
        </div>
        <div className="text-sm md:text-base font-semibold text-primary-foreground/80 uppercase tracking-wider">
          Segundos
        </div>
      </div>
    </div>
  );
};
import { useState, useEffect } from 'react';
import { DebtTimer } from './DebtTimer';

interface StickyTimerProps {
  startDate: string;
  isVisible: boolean;
}

export const StickyTimer = ({ startDate, isVisible }: StickyTimerProps) => {
  return (
    <div 
      className={`fixed top-6 right-6 z-50 transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-8 scale-95'
      }`}
    >
      <div className="bg-card/95 backdrop-blur-xl border border-border/50 rounded-2xl p-4 shadow-glow animate-glow-pulse">
        <div className="font-display text-xs font-semibold text-muted-foreground mb-2 text-center uppercase tracking-wider">
          Allan deve há:
        </div>
        <DebtTimer startDate={startDate} isCompact />
      </div>
    </div>
  );
};
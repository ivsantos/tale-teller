import { ITale } from 'src/app/page';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';

interface UseConfettiProps {
  tale?: ITale;
  action: () => unknown;
}

export default function useConfetti({ tale, action }: UseConfettiProps) {
  useEffect(() => {
    if (tale) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      setTimeout(() => {
        action();
      }, 500);
    }

    return () => {
      confetti.reset();
    };
  }, [tale, action]);
}

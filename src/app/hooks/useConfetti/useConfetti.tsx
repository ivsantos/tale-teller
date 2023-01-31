import { Tale } from '@/components/Tale/Tale';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';

interface UseConfettiProps {
  tale: Tale | undefined;
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
  }, [tale, action]);
}

'use client';

import { useCallback, useRef } from 'react';

import DownImage from '@/images/down.png';
import { ITale } from 'src/app/page';
import Image from 'next/image';
import Tale from '../Tale/Tale';
import useConfetti from '@/hooks/useConfetti/useConfetti';

interface ContainerProps {
  children: React.ReactNode;
  tale?: ITale;
  input: string;
}

export default function Container({ children, tale, input }: ContainerProps) {
  const ref = useRef<HTMLElement>(null);

  const { text } = tale?.body?.generations?.[0] || {};

  const handleScroll = useCallback(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, [ref]);

  useConfetti({ tale, action: handleScroll });

  return (
    <>
      {tale && (
        <div className="place-content-center grid mb-4">
          <button onClick={handleScroll}>
            <Image
              className="animate-bounce"
              alt="Go down"
              src={DownImage}
              width={64}
              height={64}
            />
          </button>
        </div>
      )}
      {children}
      {tale && <Tale text={text} input={input} ref={ref} />}
    </>
  );
}

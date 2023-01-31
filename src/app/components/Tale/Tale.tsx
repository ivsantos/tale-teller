'use client';

import DownImage from '@/images/down.png';
import { ITale } from 'src/app/page';
import Image from 'next/image';
import useConfetti from '@/hooks/useConfetti/useConfetti';
import { useRef } from 'react';

interface TaleProps {
  children: React.ReactNode;
  tale?: ITale;
}

export default function Tale({ children, tale }: TaleProps) {
  const ref = useRef<HTMLElement>(null);

  const handleScroll = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

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
      {tale && (
        <section ref={ref} className="place-items-center grid gap-6 mt-16">
          <article className="mx-8 px-2 mt-8 text-center whitespace-pre-line lg:mx-[unset] border-x-2 border-x-gray-500 border-dashed italic">
            <p>{tale.body?.generations?.[0]?.text}</p>
          </article>
        </section>
      )}
    </>
  );
}

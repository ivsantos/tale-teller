'use client';

import { useCallback, useRef } from 'react';

import Cover from '../Cover/Cover';
import DownImage from '@/images/down.png';
import { ITale } from 'src/app/page';
import Image from 'next/image';
import TTSImage from '@/images/text-to-speech.png';
import useConfetti from '@/hooks/useConfetti/useConfetti';
import useTextToSpeech from '@/hooks/useTextToSpeech/useTextToSpeech';

interface TaleProps {
  children: React.ReactNode;
  tale?: ITale;
  input: string;
}

export default function Tale({ children, tale, input }: TaleProps) {
  const ref = useRef<HTMLElement>(null);

  const { text } = tale?.body?.generations?.[0] || {};

  const handleScroll = useCallback(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, [ref]);

  useConfetti({ tale, action: handleScroll });
  const { handleListenTale, isListening } = useTextToSpeech({ text, tale });

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
            <button
              className="active:scale-95 shadow-gray-400 flex flex-col items-center w-32 gap-2 p-2 mx-auto my-0 border-2 border-gray-500 rounded-md shadow-md"
              type="button"
              onClick={handleListenTale}
            >
              {isListening ? 'Pause voice' : 'Listen this tale'}
              <Image alt="Text to speech" src={TTSImage} width={48} />
            </button>
            <Cover input={input} />
            <p>{text}</p>
          </article>
        </section>
      )}
    </>
  );
}

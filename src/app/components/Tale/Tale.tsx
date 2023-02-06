'use client';

import { forwardRef, useCallback, useState } from 'react';

import Cover from '../Cover/Cover';
import Image from 'next/image';
import TTSImage from '@/images/text-to-speech.png';
import Twitter from '@/images/twitter.png';
import updateShelf from '@/lib/updateShelf';
import useTextToSpeech from '@/hooks/useTextToSpeech/useTextToSpeech';

interface TaleProps {
  text?: string;
  input: string;
  customCover?: string;
  id?: string;
}

const Tale = forwardRef<HTMLElement, TaleProps>((props, ref) => {
  const { text, input, customCover, id = '' } = props;
  const [taleId, setTaleId] = useState<string>(id);

  const { handleListenTale, isListening } = useTextToSpeech({ text });

  const handleTwitterIntent = () => {
    window.open(`
    https://twitter.com/intent/tweet?text=I%20generated%20this%20wonderful%20tale%E2%9C%A8%20with%20co%3Ahere%20AI%20and%20Openjourney%20for%20its%20cover%20artwork!%F0%9F%93%99%0a%0a%20%E2%AC%87%EF%B8%8F%20Read%20it%20here%20or%20generate%20your%20own!%0a${encodeURIComponent(
      `https://tale-teller.vercel.app/shelf/${taleId}`,
    )}
    `);
  };

  const onCover = useCallback(
    async (coverURI: string) => {
      if (coverURI && text) {
        const newShelfTale = await updateShelf({ coverURI, text, input });
        setTaleId(newShelfTale?.id);
      }
    },
    [text, input],
  );

  return (
    <section ref={ref} className="place-items-center grid gap-6 my-16">
      <article className="mx-8 p-2 text-center whitespace-pre-line lg:mx-[unset] border-2 border-gray-500 border-dashed italic">
        <div className="flex justify-center gap-4">
          <button
            className="active:scale-95 shadow-gray-400 w-36 flex flex-col items-center gap-2 p-2 my-0 border-2 border-gray-500 rounded-md shadow-md"
            type="button"
            onClick={handleListenTale}
          >
            {isListening ? 'Pause voice' : 'Listen this tale'}
            <Image alt="Text to speech" src={TTSImage} width={48} />
          </button>
          <button
            className="active:scale-95 shadow-gray-400 w-36 flex flex-col items-center gap-2 p-2 my-0 border-2 border-gray-500 rounded-md shadow-md"
            type="button"
            onClick={handleTwitterIntent}
          >
            Share
            <Image alt="Twitter" src={Twitter} width={48} />
          </button>
        </div>
        <Cover input={input} onCover={onCover} customCover={customCover} />
        <p className="text-xl">{text}</p>
      </article>
    </section>
  );
});

Tale.displayName = 'Tale';

export default Tale;

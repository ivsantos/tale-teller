import { useEffect, useRef, useState } from 'react';

import { ITale } from 'src/app/page';

interface UseTextToSpeechProps {
  text?: string;
  tale?: ITale;
}

/**
 * Hook that handles the text to speech functionality using the Web Speech API.
 */
export default function useTextToSpeech({ text, tale }: UseTextToSpeechProps) {
  const taleChanged = useRef<boolean>(true);
  const [isListening, setIsListening] = useState<boolean>(false);
  const [tts, setTTS] = useState<SpeechSynthesisUtterance>(
    new SpeechSynthesisUtterance(),
  );

  /**
   * Handles the text to speech functionality.
   * If a tale is already being listened, it will pause it.
   * If a tale is paused, it will resume it.
   * If a tale is not being listened (or was paused in the past), it will start it.
   * This is done like so given that the cancel() method of the SpeechSynthesis API does not reset the paused state.
   */
  const handleListenTale = () => {
    if (isListening) {
      speechSynthesis.pause();
      return setIsListening(false);
    }
    if (speechSynthesis.paused) {
      if (taleChanged.current) {
        speechSynthesis.speak(tts);
        taleChanged.current = false;
      } else {
        speechSynthesis.resume();
      }
      return setIsListening(true);
    }

    speechSynthesis.speak(tts);
    setIsListening(true);
  };

  useEffect(() => {
    if (text) {
      const tts = new SpeechSynthesisUtterance(text);
      tts.lang = 'en-US';
      taleChanged.current = true;
      setTTS(tts);
    }
    return () => {
      speechSynthesis.cancel();
      setIsListening(false);
    };
  }, [text, tale]);

  return { handleListenTale, isListening };
}

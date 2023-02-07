import { useEffect, useRef, useState } from 'react';
interface UseTextToSpeechProps {
  text?: string;
}

/**
 * Hook that handles the text to speech functionality using the Web Speech API.
 */
export default function useTextToSpeech({ text }: UseTextToSpeechProps) {
  const taleChanged = useRef<boolean>(true);
  const [isListening, setIsListening] = useState<boolean>(false);
  const [tts, setTTS] = useState<SpeechSynthesisUtterance>();

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
      setIsListening(false);
      return;
    }
    if (speechSynthesis.paused) {
      if (taleChanged.current) {
        speechSynthesis.speak(tts!);
        taleChanged.current = false;
      } else {
        speechSynthesis.resume();
      }
      setIsListening(true);
      return;
    }

    speechSynthesis.speak(tts!);
    taleChanged.current = false;
    setIsListening(true);
  };

  useEffect(() => {
    if (text) {
      speechSynthesis.cancel();
      const tts = new SpeechSynthesisUtterance(text);
      tts.lang = 'en';
      taleChanged.current = true;
      setTTS(tts);
    }
    return () => {
      speechSynthesis.cancel();
      setIsListening(false);
    };
  }, [text]);

  return { handleListenTale, isListening };
}

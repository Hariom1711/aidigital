import { useState, useEffect } from 'react';

export default function useTypewriter(words: string[], speed = 90, pause = 2200) {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const w = words[wordIdx];
    const timer = setTimeout(() => {
      if (!deleting) {
        setText(w.slice(0, text.length + 1));
        if (text === w) setTimeout(() => setDeleting(true), pause);
      } else {
        setText(w.slice(0, text.length - 1));
        if (text === '') {
          setDeleting(false);
          setWordIdx((i) => (i + 1) % words.length);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timer);
  }, [text, deleting, wordIdx, words, speed, pause]);

  return text;
}

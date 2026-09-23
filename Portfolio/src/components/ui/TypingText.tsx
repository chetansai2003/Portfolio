import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface TypingTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export default function TypingText({ text, className = "", speed = 30, delay = 0 }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (isInView && !started) {
      const startTimeout = setTimeout(() => {
        setStarted(true);
      }, delay * 1000);
      return () => clearTimeout(startTimeout);
    }
  }, [isInView, delay, started]);

  useEffect(() => {
    if (!started) return;

    let index = 0;
    setDisplayedText("");

    const interval = setInterval(() => {
      index++;
      setDisplayedText(text.slice(0, index));
      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, started]);

  return (
    <span ref={ref} className={className}>
      {displayedText}
      {started && displayedText.length < text.length && (
        <span className="inline-block w-[2px] h-[1em] bg-primary ml-1 animate-pulse" />
      )}
    </span>
  );
}

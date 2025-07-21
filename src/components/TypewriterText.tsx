import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

const useTypewriter = (text: string, speed: number = 50, autoStart: boolean = true, onComplete?: () => void) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  // Start automatically when component mounts
  useEffect(() => {
    if (autoStart && !hasStarted) {
      setHasStarted(true);
    }
  }, [autoStart, hasStarted]);

  // Typewriter effect
  useEffect(() => {
    if (!hasStarted) return;

    const timeoutId = setTimeout(() => {
      if (index === text.length) {
        clearTimeout(timeoutId);
        if (onComplete) {
          onComplete();
        }
        return;
      }

      setDisplayText((prevText) => prevText + text.charAt(index));
      setIndex((prevIndex) => prevIndex + 1);
    }, speed);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, speed, index, hasStarted, onComplete]);

  return displayText;
};

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  delay = 50, 
  className = "",
  onComplete
}) => {
  const displayText = useTypewriter(text, delay, true, onComplete);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (displayText.length === text.length) {
      setIsComplete(true);
    }
  }, [displayText, text]);

  return (
    <span className={`typewriter-text ${className}`}>
      {displayText}
      {!isComplete && <span className="cursor">|</span>}
    </span>
  );
};

export default TypewriterText; 
import React, { useState } from 'react';

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ 
  children, 
  content, 
  className = '' 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span 
      className={`tooltip-container ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="tooltip">
          {content}
        </div>
      )}
    </span>
  );
};

export default Tooltip; 
import React from 'react';
import './Panel.css';

interface PanelProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Panel: React.FC<PanelProps> = ({ 
  children, 
  className = '',
  id
}) => {
  return (
    <section
      id={id}
      className={`panel ${className}`}
    >
      <div className="panel-content">
        {children}
      </div>
    </section>
  );
};

export default Panel; 
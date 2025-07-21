import React from 'react';

interface CodeBlockProps {
  items: string[];
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  items, 
  className = '' 
}) => {
  return (
    <div className={`code-block ${className}`}>
      <div>stack: [</div>
      <div style={{ paddingLeft: '1rem' }}>
        {items.map((item, index) => (
          <React.Fragment key={item}>
            <span className="stack-item">'{item}'</span>
            {index < items.length - 1 && ','}
          </React.Fragment>
        ))}
      </div>
      <div>]</div>
    </div>
  );
};

export default CodeBlock; 
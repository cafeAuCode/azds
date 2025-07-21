import React from 'react';

interface ChapterBadgeProps {
  children: React.ReactNode;
  className?: string;
}

const ChapterBadge: React.FC<ChapterBadgeProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`chapter-badge ${className}`}>
      <span>{children}</span>
    </div>
  );
};

export default ChapterBadge; 
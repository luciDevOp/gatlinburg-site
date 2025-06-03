import React from 'react';

type LinkProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const Link: React.FC<LinkProps> = ({ 
  to, 
  children, 
  className = '', 
  onClick 
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(to);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (onClick) onClick();
  };

  return (
    <a 
      href={`#${to}`}
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
};
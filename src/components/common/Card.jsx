import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hoverable = false,
  padding = true,
  ...props 
}) => {
  return (
    <div 
      className={`
        bg-white rounded-lg shadow-md overflow-hidden
        ${padding ? 'p-4' : ''}
        ${hoverable ? 'card-hover' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
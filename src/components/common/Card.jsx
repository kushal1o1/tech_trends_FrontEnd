// import React from 'react';

// const Card = ({ 
//   children, 
//   className = '', 
//   hoverable = false,
//   padding = true,
//   ...props 
// }) => {
//   return (
//     <div 
//       className={`
//         bg-white rounded-lg shadow-md overflow-hidden
//         ${padding ? 'p-4' : ''}
//         ${hoverable ? 'card-hover' : ''}
//         ${className}
//       `}
//       {...props}
//     >
//       {children}
//     </div>
//   );
// };

// export default Card;
import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hoverable = false, // If true, card will have hover effect
  padding = true, // Controls padding inside the card
  ...props // Allow any other props to be passed
}) => {
  return (
    <div 
      className={`
        bg-white rounded-lg shadow-md overflow-hidden
        ${padding ? 'p-4' : ''} // Conditional padding
        ${hoverable ? 'hover:shadow-lg hover:scale-105 transition-transform duration-300' : ''} // Hover effect
        ${className} // Custom classes if passed
      `}
      {...props} // Spread the remaining props (like onClick, etc.)
    >
      {children} {/* Render the child elements passed to Card */}
    </div>
  );
};

export default Card;

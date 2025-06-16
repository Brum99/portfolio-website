// DynamicArrow.jsx - A component that changes arrow color based on theme
import React from 'react';

const DynamicArrow = ({ className = "w-4 h-4" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M5 12h14m-7-7l7 7-7 7" 
        stroke="var(--text-color)" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DynamicArrow;
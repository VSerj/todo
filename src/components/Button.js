import React from 'react';

export const Button = ({ className, onAction, children }) => {
  // console.log(className);
  return (
    <button className={className} onClick={onAction}>
      {children}
    </button>
  );
};

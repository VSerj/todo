import React from 'react';

export const Button = React.memo(
  ({ className, handleAction, children }) => {
    console.log(className);
    return (
      <button className={className} onClick={handleAction}>
        {children}
      </button>
    );
  }
);

import React from 'react';

export default function Header(props) {
  const { children } = props;
  return (
    <header>
      <h1>
        {children}
      </h1>
    </header>
  );
}
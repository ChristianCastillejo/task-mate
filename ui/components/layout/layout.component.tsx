import React from 'react';
import Link from 'next/link';

const LayoutComponent: React.FC = ({ children }) => {
  return (
    <div>
      <Link href="/">
        <a>
          <img src="/logo.png" alt="Logo" />
        </a>
      </Link>
      {children}
    </div>
  );
};

export default LayoutComponent;

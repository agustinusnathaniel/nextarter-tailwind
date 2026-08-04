'use client';

import { useEffect, useState } from 'react';

export const Footer = () => {
  const [currentYear, setCurrentYear] = useState<string | null>(null);

  useEffect(() => {
    setCurrentYear(String(new Date().getFullYear()));
  }, []);

  return (
    <footer className="wrapper">
      <div className="flex">
        <p className="text-xs">
          {currentYear} -{' '}
          <a
            href="https://agustinusnathaniel.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            agustinusnathaniel.com
          </a>
        </p>
      </div>
    </footer>
  );
};

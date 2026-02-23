import React from 'react';

export const YPFLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="10" fill="#00549F"/>
    <path d="M20 30L40 60H60L80 30" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M50 60V90" stroke="white" strokeWidth="8" strokeLinecap="round"/>
  </svg>
);

export const CocaColaLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 30C20 30 30 10 50 10C70 10 60 30 60 30" stroke="#F40009" strokeWidth="5" strokeLinecap="round"/>
    <path d="M70 30C70 30 80 10 100 10C120 10 110 30 110 30" stroke="#F40009" strokeWidth="5" strokeLinecap="round"/>
    <text x="10" y="45" fontFamily="serif" fontSize="40" fill="#F40009" fontWeight="bold" fontStyle="italic">Coca-Cola</text>
  </svg>
);

export const LomaNegraLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="40" height="40" fill="#E31D1A"/>
    <text x="60" y="40" fontFamily="sans-serif" fontSize="30" fill="black" fontWeight="900">LOMA NEGRA</text>
  </svg>
);

export const HolcimLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="20" fill="#1A9D49"/>
    <path d="M30 10L50 50H10L30 10Z" fill="white"/>
    <text x="60" y="40" fontFamily="sans-serif" fontSize="35" fill="#00549F" fontWeight="bold">Holcim</text>
  </svg>
);

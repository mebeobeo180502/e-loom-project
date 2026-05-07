import React from 'react';

const SearchIcon = ({ className }) => (<svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>);
const UserIcon = ({ className }) => (<svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>);
const CartIcon = ({ className }) => (
        <svg className={className} width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line strokeLinecap="round" strokeLinejoin="round" x1="3" y1="6" x2="21" y2="6"></line>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
);
const MenuIcon = ({ className }) => (<svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>);

export const GNB = () => (
  <nav className="fixed top-0 w-full h-[100px] z-50 flex justify-between items-center px-12 lg:px-24 bg-gradient-to-b from-black/95 via-black/50 to-transparent backdrop-blur-[2px] transition-all duration-300">
    <ul className="hidden md:flex space-x-16 font-serif text-sm text-white/90">
      {['BRAND', 'RING', 'HAIR PIN'].map((item) => (
        <li key={item} className="relative group cursor-pointer">
          <span className="relative z-10 tracking-[0.2em] traditional-text group-hover:text-white transition-colors duration-500">{item}</span>
          <div className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] opacity-0 group-hover:opacity-100 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
          <span className="absolute -bottom-[9px] right-0 w-[3px] h-[3px] rounded-full bg-eloom-camellia opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-300"></span>
        </li>
      ))}
    </ul>

    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <img 
        src="./logo_white.png" 
        alt="E.Loom" 
        className="h-16 w-auto cursor-pointer hover:scale-110 transition-all duration-500" 
      />
    </div>

    <ul className="flex space-x-10 items-center justify-end">
      {[SearchIcon, UserIcon, CartIcon, MenuIcon].map((Icon, idx) => (
        <li key={idx} className="relative group cursor-pointer p-2 flex justify-center items-center">
          <Icon className="text-white/70 group-hover:text-white drop-shadow-[0_0_2px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] transition-all duration-500" />
          <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500 ease-out opacity-0 group-hover:opacity-100" />
        </li>
      ))}
    </ul>
  </nav>
);

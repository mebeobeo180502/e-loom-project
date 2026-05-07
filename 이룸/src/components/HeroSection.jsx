import React from 'react';

export const HeroSection = () => (
  <section className="relative w-full h-screen overflow-hidden bg-black">
    <img src="https://images.unsplash.com/photo-1599643478524-fb66f70d0822?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80" className="absolute inset-0 w-full h-full object-cover filter brightness-[0.7] contrast-125 saturate-50" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

    <div className="relative flex flex-col items-center justify-center h-full pointer-events-none z-10">
        <h2 className="traditional-text font-serif text-5xl md:text-7xl lg:text-8xl text-white text-center leading-tight tracking-wide drop-shadow-2xl opacity-90">
            <span className="block italic font-light hover:tracking-widest transition-all duration-[3s]">From connection</span>
            <span className="block mt-4 font-normal">to fruition.</span>
        </h2>
        
        <div className="absolute bottom-12 flex flex-col items-center gap-4 opacity-50">
            <span className="font-sans text-[10px] text-white uppercase tracking-[0.3em]">Discover</span>
            <div className="w-[1px] h-16 bg-white/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-[scrolldown_2s_ease-in-out_infinite]"></div>
            </div>
        </div>
    </div>
  </section>
);

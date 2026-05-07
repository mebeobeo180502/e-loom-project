import React from 'react'
import { GNB } from './components/GNB'
import { HeroSection } from './components/HeroSection'
import { ProductCard } from './components/ProductCard'

function App() {
  return (
    <div className="min-h-screen selection:bg-eloom-camellia selection:text-white pb-32">
      <GNB />
      <HeroSection />
      
      <section className="w-full py-[200px] px-8 sm:px-16 flex flex-col items-center bg-[#FAFAFA]">
        <h2 className="traditional-text font-serif text-4xl text-eloom-olive mb-[120px] text-center border-b border-eloom-olive/20 pb-4 w-full max-w-sm italic">
          The enduring line.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[120px] gap-x-[120px] max-w-6xl w-full">
          <ProductCard 
            name="결 (Gyeol) Ring"
            type="Silver 925"
            price="₩ 240,000"
            imageUrl="https://images.unsplash.com/photo-1605100804763-247f6ad11568?auto=format&fit=crop&w=800&q=80"
          />
          <ProductCard 
            name="다시, 피어 (Binyeo)"
            type="Oxidized Silver & Gem"
            price="₩ 380,000"
            imageUrl="https://images.unsplash.com/photo-1599643478524-fb66f70362c0?auto=format&fit=crop&w=800&q=80"
          />
        </div>
      </section>
    </div>
  )
}

export default App

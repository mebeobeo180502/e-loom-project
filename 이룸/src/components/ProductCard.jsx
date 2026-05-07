import React from 'react';

export const ProductCard = ({ name, type, price, imageUrl }) => {
  return (
    <div className="group flex flex-col items-center w-full mx-auto cursor-pointer p-8 relative">
      {/* Hover시 나타나는 모서리 메탈 프레임 (마이크로 인터랙션) */}
      <div className="absolute inset-0 border border-transparent group-hover:border-eloom-olive/20 transition-all duration-700 ease-in-out" />
      
      {/* Image Stage: 백자 위의 오브제처럼 제품을 돋보이게 */}
      <div className="w-full aspect-[4/5] bg-white flex items-center justify-center overflow-hidden mb-8 mix-blend-multiply relative">
        <img 
          src={imageUrl || "/api/placeholder/400/500"} 
          alt={name}
          className="w-[85%] h-[85%] object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] grayscale group-hover:grayscale-0"
        />
        {/* 네온 동백 레드 포인트 (인터랙션 피드백) */}
        <div className="absolute bottom-0 left-1/2 w-0 h-px bg-eloom-camellia group-hover:w-[40%] transition-all duration-500 ease-out transform -translate-x-1/2" />
      </div>

      {/* 제품 정보 영역: 직조의 얇은 가로선으로 구획 */}
      <div className="w-full border-t border-eloom-olive/10 pt-4 flex justify-between items-baseline">
        <div className="flex flex-col">
          <span className="font-sans text-[10px] tracking-futuristic text-eloom-olive/60 uppercase">{type}</span>
          <h3 className="font-serif text-lg text-eloom-dark mt-1 font-bold">{name}</h3>
        </div>
        <span className="font-sans text-sm tracking-wider text-eloom-olive font-bold">{price}</span>
      </div>
    </div>
  );
};

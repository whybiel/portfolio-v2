import React from 'react'

export default function BackgroundAnimate() { 
    const dots = new Array(50).fill(0);
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden ">
        {dots.map((_, i) => {
            const randomX = Math.random() * 100;
            const randomY = Math.random() * 100;
            const delay = Math.random() * 5;
            const size = Math.random() * 4 + 2;

            return (
            <span
                key={i}
                className="absolute rounded-full bg-slate-300 opacity-30 animate-floating"
                style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${randomY}%`,
                left: `${randomX}%`,
                animationDelay: `${delay}s`,
                }}
            />
            );
        })}
        </div>
  )
}

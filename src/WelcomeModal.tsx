import { useState, useEffect } from 'react';

export default function WelcomeAnimation() {
  const [show, setShow] = useState(true);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase(1), 500);
    const timer2 = setTimeout(() => setPhase(2), 2000);
    const timer3 = setTimeout(() => setPhase(3), 3500);
    const timer4 = setTimeout(() => setPhase(4), 5000);
    const hideTimer = setTimeout(() => setShow(false), 6500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-primary rounded-full transition-all duration-1000 ${
              phase >= 1 ? 'animate-pulse opacity-60' : 'opacity-0'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Gaming-style grid background */}
      <div 
        className={`absolute inset-0 opacity-20 transition-opacity duration-1000 ${
          phase >= 1 ? 'opacity-20' : 'opacity-0'
        }`}
        style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Main logo container */}
      <div className="relative text-center">
        {/* Outer glow ring */}
        <div 
          className={`absolute inset-0 rounded-full border-2 border-primary/50 transition-all duration-2000 ${
            phase >= 2 ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
          }`}
          style={{
            width: '300px',
            height: '300px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Property text */}
        <div 
          className={`transition-all duration-1000 ${
            phase >= 1 ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-75'
          }`}
        >
          <h1 className="text-4xl md:text-8xl lg:text-9xl font-black tracking-wider mb-2 md:mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
              PROPERTY
            </span>
          </h1>
        </div>

        {/* BD text with delay */}
        <div 
          className={`transition-all duration-1000 delay-500 ${
            phase >= 2 ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-75'
          }`}
        >
          <h2 className="text-3xl md:text-7xl lg:text-8xl font-black tracking-widest">
            <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent animate-pulse">
              BD
            </span>
          </h2>
        </div>

        {/* Power-up effect lines */}
        {phase >= 3 && (
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"
                style={{
                  height: '200%',
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                  transformOrigin: 'center',
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        )}

        {/* Final blast effect */}
        {phase >= 4 && (
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-accent/30 to-primary/20 animate-ping" />
        )}
      </div>

      {/* Bottom scanner line */}
      <div 
        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-2000 ${
          phase >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
        style={{
          animation: 'pulse 2s infinite',
        }}
      />
    </div>
  );
}
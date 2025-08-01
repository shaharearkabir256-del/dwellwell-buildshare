import { useState, useEffect } from 'react';

export default function WelcomeAnimation() {
  const [show, setShow] = useState(true);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),   // Grid appears
      setTimeout(() => setPhase(2), 1200),  // Buildings start rising
      setTimeout(() => setPhase(3), 2500),  // Holographic elements
      setTimeout(() => setPhase(4), 3800),  // Company name appears
      setTimeout(() => setPhase(5), 5000),  // Final effects
      setTimeout(() => setShow(false), 7000) // Hide animation
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black overflow-hidden">
      {/* Animated grid floor */}
      <div 
        className={`absolute bottom-0 left-0 right-0 h-1/2 transition-all duration-1000 ${
          phase >= 1 ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'linear-gradient(0deg, rgba(0,255,255,0.1) 0%, transparent 100%)',
          backgroundImage: `
            linear-gradient(90deg, rgba(0,255,255,0.3) 1px, transparent 1px),
            linear-gradient(0deg, rgba(0,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'bottom',
        }}
      />

      {/* City skyline buildings */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center space-x-1 md:space-x-2">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`bg-gradient-to-t from-primary/80 via-accent/60 to-primary/40 transition-all duration-1000 delay-${i * 100} ${
              phase >= 2 ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              width: `${20 + Math.random() * 30}px`,
              height: phase >= 2 ? `${80 + Math.random() * 120}px` : '0px',
              transitionDelay: `${i * 150}ms`,
              boxShadow: '0 0 20px rgba(0,255,255,0.5), inset 0 0 20px rgba(0,255,255,0.2)',
              border: '1px solid rgba(0,255,255,0.3)',
            }}
          >
            {/* Building windows */}
            {phase >= 3 && (
              <div className="w-full h-full relative">
                {[...Array(Math.floor(Math.random() * 8) + 3)].map((_, j) => (
                  <div
                    key={j}
                    className="absolute bg-cyan-400/60 animate-pulse"
                    style={{
                      width: '3px',
                      height: '3px',
                      left: `${20 + (j % 3) * 25}%`,
                      top: `${15 + Math.floor(j / 3) * 20}%`,
                      animationDelay: `${Math.random() * 2}s`,
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-cyan-400 rounded-full transition-all duration-2000 ${
              phase >= 3 ? 'opacity-60 animate-pulse' : 'opacity-0'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 80}%`,
              animationDelay: `${Math.random() * 3}s`,
              boxShadow: '0 0 10px rgba(0,255,255,0.8)',
            }}
          />
        ))}
      </div>

      {/* Holographic interface elements */}
      {phase >= 3 && (
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Circular HUD */}
          <div className="relative">
            <div className="w-80 h-80 md:w-96 md:h-96 border-2 border-cyan-400/50 rounded-full animate-spin-slow">
              <div className="absolute inset-4 border border-cyan-400/30 rounded-full">
                <div className="absolute inset-4 border border-cyan-400/20 rounded-full" />
              </div>
            </div>
            
            {/* Corner brackets */}
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="absolute w-8 h-8 border-cyan-400"
                style={{
                  top: i < 2 ? '10px' : 'auto',
                  bottom: i >= 2 ? '10px' : 'auto',
                  left: i % 2 === 0 ? '10px' : 'auto',
                  right: i % 2 === 1 ? '10px' : 'auto',
                  borderWidth: `${i < 2 ? '2px' : '0'} ${i % 2 === 1 ? '2px' : '0'} ${i >= 2 ? '2px' : '0'} ${i % 2 === 0 ? '2px' : '0'}`,
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Company name with futuristic styling */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          {/* Main logo */}
          <div 
            className={`transition-all duration-1500 ${
              phase >= 4 ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-75'
            }`}
          >
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-wider mb-2 md:mb-4 relative">
              <span 
                className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent"
                style={{
                  textShadow: '0 0 30px rgba(0,255,255,0.5)',
                  filter: 'drop-shadow(0 0 10px rgba(0,255,255,0.3))',
                }}
              >
                PROPERTY
              </span>
              {/* Scanning line effect */}
              {phase >= 4 && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent h-full animate-pulse opacity-70" />
              )}
            </h1>
          </div>

          <div 
            className={`transition-all duration-1500 delay-300 ${
              phase >= 4 ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-75'
            }`}
          >
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-black tracking-widest relative">
              <span 
                className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
                style={{
                  textShadow: '0 0 30px rgba(0,255,255,0.5)',
                  filter: 'drop-shadow(0 0 10px rgba(0,255,255,0.3))',
                }}
              >
                BD
              </span>
            </h2>
          </div>

          {/* Subtitle */}
          {phase >= 5 && (
            <div className="mt-4 md:mt-8 animate-fade-in">
              <p className="text-cyan-400/80 text-lg md:text-xl font-light tracking-wide">
                NEXT GENERATION REAL ESTATE
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Data streams */}
      {phase >= 5 && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute h-full w-px bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent animate-pulse"
              style={{
                left: `${15 + i * 15}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s',
              }}
            />
          ))}
        </div>
      )}

      {/* Status bar */}
      {phase >= 2 && (
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-cyan-400/60 text-xs md:text-sm font-mono">
          <div>SYSTEM: ONLINE</div>
          <div>PROPERTY BD v2.0</div>
          <div>STATUS: READY</div>
        </div>
      )}
    </div>
  );
}
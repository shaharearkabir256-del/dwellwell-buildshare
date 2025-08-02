import React from 'react';

interface AnimatedBackgroundProps {
  variant?: 'home' | 'properties' | 'contact' | 'search' | 'portfolio';
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  variant = 'home', 
  className = '' 
}) => {
  const getBackgroundContent = () => {
    switch (variant) {
      case 'home':
        return (
          <>
            {/* Floating buildings */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-gradient-to-t from-primary/5 to-transparent"
                  style={{
                    width: `${40 + i * 15}px`,
                    height: `${100 + i * 30}px`,
                    left: `${10 + i * 15}%`,
                    top: `${60 + (i % 2) * 20}%`,
                    animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`,
                    borderRadius: '4px 4px 0 0',
                  }}
                />
              ))}
            </div>
            
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-primary/20 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `particle-float ${5 + Math.random() * 5}s linear infinite`,
                    animationDelay: `${Math.random() * 5}s`,
                  }}
                />
              ))}
            </div>
          </>
        );

      case 'properties':
        return (
          <>
            {/* Property cards floating */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-gradient-to-br from-accent/10 to-primary/5 rounded-lg"
                  style={{
                    width: '60px',
                    height: '40px',
                    left: `${5 + i * 12}%`,
                    top: `${20 + (i % 3) * 25}%`,
                    animation: `property-drift ${4 + i * 0.3}s ease-in-out infinite`,
                    animationDelay: `${i * 0.4}s`,
                  }}
                />
              ))}
            </div>
            
            {/* Dollar signs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-primary/10 font-bold text-2xl"
                  style={{
                    left: `${Math.random() * 90}%`,
                    top: `${Math.random() * 90}%`,
                    animation: `money-float ${3 + Math.random() * 2}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 3}s`,
                  }}
                >
                  $
                </div>
              ))}
            </div>
          </>
        );

      case 'search':
        return (
          <>
            {/* Search beams */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-gradient-to-r from-transparent via-primary/10 to-transparent h-0.5"
                  style={{
                    width: '200px',
                    left: `${-20 + i * 25}%`,
                    top: `${20 + i * 15}%`,
                    animation: `search-beam ${2 + i * 0.2}s linear infinite`,
                    animationDelay: `${i * 0.4}s`,
                  }}
                />
              ))}
            </div>
            
            {/* Magnifying glass icons */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-8 h-8 border-2 border-accent/20 rounded-full"
                  style={{
                    left: `${10 + i * 15}%`,
                    top: `${30 + (i % 2) * 30}%`,
                    animation: `magnify ${4 + i * 0.5}s ease-in-out infinite`,
                    animationDelay: `${i * 0.6}s`,
                  }}
                >
                  <div className="absolute -bottom-2 -right-2 w-3 h-0.5 bg-accent/20 rotate-45 rounded-full" />
                </div>
              ))}
            </div>
          </>
        );

      case 'contact':
        return (
          <>
            {/* Message bubbles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-gradient-to-br from-primary/10 to-accent/5 rounded-full"
                  style={{
                    width: `${20 + i * 5}px`,
                    height: `${20 + i * 5}px`,
                    left: `${Math.random() * 90}%`,
                    top: `${Math.random() * 90}%`,
                    animation: `message-bubble ${3 + Math.random() * 2}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 3}s`,
                  }}
                />
              ))}
            </div>
            
            {/* Email icons floating */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-6 h-4 border border-primary/20 rounded-sm"
                  style={{
                    left: `${15 + i * 18}%`,
                    top: `${25 + (i % 2) * 35}%`,
                    animation: `email-float ${3.5 + i * 0.3}s ease-in-out infinite`,
                    animationDelay: `${i * 0.7}s`,
                  }}
                >
                  <div className="absolute inset-0 border-t border-primary/20 transform rotate-45 origin-top" />
                </div>
              ))}
            </div>
          </>
        );

      case 'portfolio':
        return (
          <>
            {/* Achievement stars */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-primary/15 text-lg"
                  style={{
                    left: `${Math.random() * 95}%`,
                    top: `${Math.random() * 95}%`,
                    animation: `star-twinkle ${2 + Math.random() * 2}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                >
                  ★
                </div>
              ))}
            </div>
            
            {/* Success rays */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-gradient-to-r from-transparent via-accent/10 to-transparent h-1 origin-left"
                  style={{
                    width: '150px',
                    left: '50%',
                    top: '50%',
                    transform: `rotate(${i * 60}deg)`,
                    animation: `success-ray ${4 + i * 0.2}s linear infinite`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`fixed inset-0 pointer-events-none z-0 ${className}`}>
      {getBackgroundContent()}
    </div>
  );
};

export default AnimatedBackground;
import React from 'react';

interface AnimatedBackgroundProps {
  variant?: 'home' | 'properties' | 'contact' | 'search' | 'portfolio' | 'about' | 'howitworks' | 'careers' | 'consultation' | 'help' | 'management' | 'team' | 'press' | 'privacy' | 'terms';
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

      case 'about':
        return (
          <>
            {/* Company growth charts */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-gradient-to-t from-primary/5 to-accent/10"
                  style={{
                    width: '3px',
                    height: `${30 + i * 15}px`,
                    left: `${15 + i * 10}%`,
                    bottom: '20%',
                    animation: `chart-grow ${2 + i * 0.2}s ease-out infinite`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
            </div>
            
            {/* Team connection lines */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-gradient-to-r from-transparent via-primary/10 to-transparent h-0.5"
                  style={{
                    width: '80px',
                    left: `${Math.random() * 80}%`,
                    top: `${Math.random() * 80}%`,
                    animation: `connection-pulse ${3 + Math.random() * 2}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 3}s`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                  }}
                />
              ))}
            </div>
          </>
        );

      case 'howitworks':
        return (
          <>
            {/* Process arrows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${10 + i * 15}%`,
                    top: `${40 + (i % 2) * 20}%`,
                    animation: `arrow-flow ${3 + i * 0.3}s ease-in-out infinite`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                >
                  <div className="w-8 h-0.5 bg-primary/20 relative">
                    <div className="absolute right-0 top-[-2px] w-0 h-0 border-l-4 border-l-primary/20 border-t-2 border-b-2 border-t-transparent border-b-transparent" />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Step circles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-12 h-12 border-2 border-accent/20 rounded-full flex items-center justify-center text-accent/30 font-bold"
                  style={{
                    left: `${20 + i * 20}%`,
                    top: '60%',
                    animation: `step-pulse ${2 + i * 0.4}s ease-in-out infinite`,
                    animationDelay: `${i * 0.8}s`,
                  }}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </>
        );

      case 'careers':
        return (
          <>
            {/* Career ladder */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-primary/10 h-1"
                  style={{
                    width: '60px',
                    left: '70%',
                    top: `${20 + i * 8}%`,
                    animation: `ladder-climb ${4 + i * 0.2}s ease-in-out infinite`,
                    animationDelay: `${i * 0.4}s`,
                  }}
                />
              ))}
            </div>
            
            {/* Success icons */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-accent/15 text-xl"
                  style={{
                    left: `${Math.random() * 90}%`,
                    top: `${Math.random() * 90}%`,
                    animation: `career-float ${3 + Math.random() * 2}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 3}s`,
                  }}
                >
                  💼
                </div>
              ))}
            </div>
          </>
        );

      case 'consultation':
        return (
          <>
            {/* Calendar grid */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(35)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-8 h-6 border border-primary/5"
                  style={{
                    left: `${15 + (i % 7) * 10}%`,
                    top: `${20 + Math.floor(i / 7) * 8}%`,
                    animation: `calendar-highlight ${2 + (i % 3)}s ease-in-out infinite`,
                    animationDelay: `${(i % 10) * 0.2}s`,
                  }}
                />
              ))}
            </div>
            
            {/* Clock hands */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-16 h-16 border-2 border-accent/10 rounded-full"
                  style={{
                    left: `${20 + i * 30}%`,
                    top: '70%',
                    animation: `clock-tick ${1 + i * 0.5}s linear infinite`,
                  }}
                >
                  <div className="absolute w-0.5 bg-accent/20 left-1/2 top-1/2 origin-bottom transform -translate-x-1/2 -translate-y-full" style={{ height: '20px' }} />
                  <div className="absolute w-0.5 bg-primary/20 left-1/2 top-1/2 origin-bottom transform -translate-x-1/2 -translate-y-full" style={{ height: '15px', transform: 'translateX(-50%) translateY(-100%) rotate(90deg)' }} />
                </div>
              ))}
            </div>
          </>
        );

      case 'help':
        return (
          <>
            {/* Question marks */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-primary/10 text-2xl font-bold"
                  style={{
                    left: `${Math.random() * 90}%`,
                    top: `${Math.random() * 90}%`,
                    animation: `question-bounce ${2 + Math.random() * 2}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                >
                  ?
                </div>
              ))}
            </div>
            
            {/* Help bubbles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-gradient-to-br from-accent/10 to-primary/5 rounded-full"
                  style={{
                    width: `${25 + i * 8}px`,
                    height: `${25 + i * 8}px`,
                    left: `${10 + i * 12}%`,
                    top: `${30 + (i % 3) * 20}%`,
                    animation: `help-float ${3 + i * 0.4}s ease-in-out infinite`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
              ))}
            </div>
          </>
        );

      case 'management':
        return (
          <>
            {/* Dashboard charts */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-gradient-to-t from-primary/5 to-transparent"
                  style={{
                    width: '4px',
                    height: `${20 + Math.random() * 40}px`,
                    left: `${20 + (i % 6) * 12}%`,
                    top: `${40 + Math.floor(i / 6) * 30}%`,
                    animation: `dashboard-update ${1.5 + i * 0.1}s ease-in-out infinite`,
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              ))}
            </div>
            
            {/* Management icons */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-accent/15 text-xl"
                  style={{
                    left: `${15 + i * 15}%`,
                    top: `${20 + (i % 2) * 40}%`,
                    animation: `manage-rotate ${4 + i * 0.3}s linear infinite`,
                    animationDelay: `${i * 0.6}s`,
                  }}
                >
                  ⚙️
                </div>
              ))}
            </div>
          </>
        );

      case 'team':
        return (
          <>
            {/* Team network */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 bg-primary/10 rounded-full"
                  style={{
                    left: `${15 + (i % 5) * 18}%`,
                    top: `${25 + Math.floor(i / 5) * 25}%`,
                    animation: `team-connect ${2 + i * 0.2}s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
            </div>
            
            {/* Collaboration lines */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-gradient-to-r from-transparent via-accent/10 to-transparent h-0.5"
                  style={{
                    width: '100px',
                    left: `${Math.random() * 70}%`,
                    top: `${Math.random() * 70}%`,
                    animation: `collaboration-flow ${3 + Math.random() * 2}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 3}s`,
                    transform: `rotate(${Math.random() * 180}deg)`,
                  }}
                />
              ))}
            </div>
          </>
        );

      case 'press':
        return (
          <>
            {/* News headlines */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-gradient-to-r from-primary/5 to-accent/10 h-1"
                  style={{
                    width: `${60 + i * 10}px`,
                    left: `${10 + i * 11}%`,
                    top: `${20 + (i % 3) * 25}%`,
                    animation: `news-scroll ${3 + i * 0.3}s linear infinite`,
                    animationDelay: `${i * 0.4}s`,
                  }}
                />
              ))}
            </div>
            
            {/* Media icons */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-primary/15 text-lg"
                  style={{
                    left: `${Math.random() * 90}%`,
                    top: `${Math.random() * 90}%`,
                    animation: `media-flash ${2 + Math.random() * 2}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                >
                  📰
                </div>
              ))}
            </div>
          </>
        );

      case 'privacy':
        return (
          <>
            {/* Security shields */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-8 h-10 border-2 border-primary/20 rounded-t-full"
                  style={{
                    left: `${15 + i * 12}%`,
                    top: `${30 + (i % 2) * 30}%`,
                    animation: `shield-protect ${3 + i * 0.4}s ease-in-out infinite`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                >
                  <div className="absolute inset-2 bg-accent/10 rounded-t-full" />
                </div>
              ))}
            </div>
            
            {/* Lock icons */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-accent/15 text-xl"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${40 + (i % 2) * 20}%`,
                    animation: `lock-secure ${2.5 + i * 0.3}s ease-in-out infinite`,
                    animationDelay: `${i * 0.6}s`,
                  }}
                >
                  🔒
                </div>
              ))}
            </div>
          </>
        );

      case 'terms':
        return (
          <>
            {/* Legal documents */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-gradient-to-br from-primary/5 to-accent/5 rounded"
                  style={{
                    width: '20px',
                    height: '25px',
                    left: `${10 + i * 9}%`,
                    top: `${25 + (i % 3) * 25}%`,
                    animation: `document-float ${3 + i * 0.3}s ease-in-out infinite`,
                    animationDelay: `${i * 0.4}s`,
                  }}
                />
              ))}
            </div>
            
            {/* Section symbols */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-primary/10 text-lg font-bold"
                  style={{
                    left: `${Math.random() * 90}%`,
                    top: `${Math.random() * 90}%`,
                    animation: `section-mark ${2 + Math.random() * 2}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                >
                  §
                </div>
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
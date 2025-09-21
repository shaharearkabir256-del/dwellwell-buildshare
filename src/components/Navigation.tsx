import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, Package, Settings, Info, Phone, Search } from 'lucide-react';
import { LanguageToggle } from '@/components/LanguageToggle';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useTranslation } from '@/contexts/TranslationContext';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { path: '/', label: t('nav.home'), icon: Home },
    { path: '/product/search', label: t('nav.search'), icon: Search },
    { path: '/product', label: t('nav.properties'), icon: Package },
    { path: '/services', label: t('nav.services'), icon: Settings },
    { path: '/how-it-works', label: 'How It Works', icon: Info },
    { path: '/contact', label: t('nav.contact'), icon: Phone },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-card backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Property BD
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-foreground hover:text-primary transition-colors duration-300 font-medium ${
                  location.pathname === item.path ? 'text-primary' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Language Toggle, Theme Toggle and CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <LanguageToggle />
            <Link to="/contact">
              <Button className="btn-premium">
                {t('nav.getStarted')}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-[100] flex flex-col">
            {/* Backdrop - prevents all interaction with content behind */}
            <div 
              className="absolute inset-0 bg-background/98 backdrop-blur-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Close button */}
            <div className="absolute top-6 right-6 z-[110]">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full glass-card hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Menu Content */}
            <div className="relative flex-1 flex flex-col justify-center items-center p-8 space-y-6 animate-fade-in z-[105]">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-4 w-full max-w-sm text-left py-4 px-6 rounded-xl glass-card hover:bg-white/10 transition-all duration-300 animate-fade-in ${
                    location.pathname === item.path ? 'bg-white/15 text-primary border border-primary/20' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className="w-6 h-6" />
                  <span className="text-lg font-medium">{item.label}</span>
                </Link>
              ))}
              
              {/* Theme and Language Toggle in Mobile Menu */}
              <div className="w-full max-w-sm flex gap-4 animate-fade-in" style={{ animationDelay: `${navItems.length * 0.1}s` }}>
                <ThemeToggle />
                <LanguageToggle />
              </div>
              
              <Link 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full max-w-sm animate-fade-in"
                style={{ animationDelay: `${(navItems.length + 1) * 0.1}s` }}
              >
                <Button className="btn-premium w-full text-lg py-4">
                  {t('nav.getStarted')}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
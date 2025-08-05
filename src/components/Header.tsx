import { useState } from 'react';
import { Menu, X, Zap, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'AI Tools', href: '/hub', type: 'route' },
    { label: 'About', href: '#about', type: 'anchor' },
    { label: 'Features', href: '#features', type: 'anchor' },
    { label: 'How It Works', href: '#how-it-works', type: 'anchor' },
    { label: 'Contact', href: '#contact', type: 'anchor' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Zap className="h-8 w-8 text-nexus-blue group-hover:animate-pulse-glow transition-all duration-300" />
              <div className="absolute inset-0 h-8 w-8 bg-nexus-blue/20 rounded-full blur-lg group-hover:bg-nexus-blue/40 transition-all duration-300" />
            </div>
            <div className="text-xl font-bold glitch-text">
              <span className="text-foreground">Nexus</span>
              <span className="bg-gradient-primary bg-clip-text text-transparent"> AI Hub</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              item.type === 'route' ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-muted-foreground hover:text-foreground transition-all duration-300 relative group magnetic-button animated-underline"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={location.pathname === '/' ? item.href : `/${item.href}`}
                  className="text-muted-foreground hover:text-foreground transition-all duration-300 relative group magnetic-button animated-underline"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={(e) => {
                    if (location.pathname !== '/') {
                      e.preventDefault();
                      window.location.href = `/${item.href}`;
                    }
                  }}
                >
                  {item.label}
                </a>
              )
            ))}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="magnetic-button ripple border-nexus-blue/50 text-nexus-blue hover:bg-nexus-blue/10">
                  Get Started
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-6 bg-card/95 backdrop-blur-md border-nexus-blue/20">
                <div className="text-center space-y-4">
                  <Rocket className="h-12 w-12 mx-auto text-nexus-blue animate-bounce" />
                  <h3 className="text-xl font-bold text-foreground">Platform Launching Soon!</h3>
                  <p className="text-muted-foreground">
                    Our Platform Launch soon in market. Be the first to experience the future of AI automation.
                  </p>
                  <div className="bg-nexus-blue/10 rounded-lg p-3">
                    <p className="text-sm text-nexus-blue font-medium">🚀 Early Access Available</p>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                item.type === 'route' ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-muted-foreground hover:text-foreground transition-all duration-300 magnetic-button animated-underline"
                    onClick={() => setIsMenuOpen(false)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={location.pathname === '/' ? item.href : `/${item.href}`}
                    className="text-muted-foreground hover:text-foreground transition-all duration-300 magnetic-button animated-underline"
                    onClick={(e) => {
                      setIsMenuOpen(false);
                      if (location.pathname !== '/') {
                        e.preventDefault();
                        window.location.href = `/${item.href}`;
                      }
                    }}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.label}
                  </a>
                )
              ))}
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="magnetic-button ripple border-nexus-blue/50 text-nexus-blue hover:bg-nexus-blue/10 w-fit">
                    Get Started
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-6 bg-card/95 backdrop-blur-md border-nexus-blue/20">
                  <div className="text-center space-y-4">
                    <Rocket className="h-12 w-12 mx-auto text-nexus-blue animate-bounce" />
                    <h3 className="text-xl font-bold text-foreground">Platform Launching Soon!</h3>
                    <p className="text-muted-foreground">
                      Our Platform Launch soon in market. Be the first to experience the future of AI automation.
                    </p>
                    <div className="bg-nexus-blue/10 rounded-lg p-3">
                      <p className="text-sm text-nexus-blue font-medium">🚀 Early Access Available</p>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
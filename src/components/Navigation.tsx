import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname !== '/') {
      window.location.href = '/#contact';
    }
  };

  const handleNavClick = (item: string) => {
    const sectionMap: { [key: string]: string } = {
      'Features': 'features',
      'Solutions': 'solutions',
      'Team': 'team',
      'Contact': 'contact'
    };

    if (location.pathname !== '/') {
      window.location.href = `/#${sectionMap[item]}`;
    } else {
      const element = document.getElementById(sectionMap[item]);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-effect py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <img 
              src="https://i.postimg.cc/5j48qtcH/logo.png" 
              alt="ENAI" 
              className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" 
            />
            <span className="ml-2 text-xl font-bold gradient-text">ENAI</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {['Features', 'Solutions', 'Team', 'Industries'].map((item) => (
              <button
                key={item}
                onClick={() => item === 'Industries' ? null : handleNavClick(item)}
                className="nav-link relative overflow-hidden"
              >
                {item === 'Industries' ? (
                  <Link to="/industries" className="nav-link">
                    {item}
                  </Link>
                ) : (
                  item
                )}
              </button>
            ))}
            <button 
              onClick={scrollToContact}
              className="button-glow text-white px-6 py-2 rounded-full transform transition-transform hover:scale-105"
            >
              Start Free
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
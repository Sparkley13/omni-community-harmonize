
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const routes = [
    { name: 'Accueil', path: '/' },
    { name: 'Fonctionnalités', path: '/features' },
    { name: 'Tarifs', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        isScrolled ? 'border-b border-border/40 backdrop-blur-md bg-background/80' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto py-4 px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
              <span className="font-bold text-white">SF</span>
            </div>
            <span className="font-semibold text-xl">StudioFusion</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={`text-sm ${
                  location.pathname === route.path
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground transition'
                }`}
              >
                {route.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/demo">
              <Button variant="outline">Démo</Button>
            </Link>
            <Link to="/dashboard">
              <Button>Connexion</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  className={`py-2 px-3 rounded ${
                    location.pathname === route.path
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'hover:bg-muted'
                  }`}
                >
                  {route.name}
                </Link>
              ))}
              <Link to="/demo" className="py-2 px-3 rounded hover:bg-muted">
                Démo
              </Link>
              <Link to="/dashboard" className="py-2 px-3 rounded hover:bg-muted">
                Connexion
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

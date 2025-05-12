
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-4 border-t bg-secondary/5">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
                <span className="font-bold text-white">SF</span>
              </div>
              <span className="font-semibold text-xl">StudioFusion</span>
            </div>
            <p className="text-muted-foreground">Une approche française du design numérique, alliant tradition et innovation.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Produit</h4>
            <ul className="space-y-2">
              {['Fonctionnalités', 'Intégrations', 'Tarifs', 'Mises à jour', 'Feuille de route'].map((item, i) => (
                <li key={i}><Link to={i === 0 ? "/features" : i === 2 ? "/pricing" : "/"} className="text-muted-foreground hover:text-foreground transition">{item}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Ressources</h4>
            <ul className="space-y-2">
              {['Documentation', 'Tutoriels', 'Blog', 'Communauté', 'Support'].map((item, i) => (
                <li key={i}><Link to="/" className="text-muted-foreground hover:text-foreground transition">{item}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-2">
              {['À propos', 'Clients', 'Carrières', 'Contact', 'Mentions légales'].map((item, i) => (
                <li key={i}><Link to={i === 3 ? "/contact" : "/"} className="text-muted-foreground hover:text-foreground transition">{item}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} StudioFusion. Tous droits réservés. Made with ♥ in Paris.
          </p>
          <div className="flex space-x-4">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition">Twitter</Link>
            <Link to="/" className="text-muted-foreground hover:text-foreground transition">LinkedIn</Link>
            <Link to="/" className="text-muted-foreground hover:text-foreground transition">GitHub</Link>
            <Link to="/" className="text-muted-foreground hover:text-foreground transition">Discord</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Code, Layout, Palette, UserCheck, Zap, Coffee, Globe, MessagesSquare } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Design Adaptatif",
    description: "Interfaces élégantes qui s'adaptent à tous les écrans avec une touche d'esthétique française.",
    icon: Layout,
    color: "bg-blue-500"
  },
  {
    title: "Composants Accessibles",
    description: "Bibliothèque complète respectant les normes RGAA pour une expérience inclusive.",
    icon: Check,
    color: "bg-green-500"
  },
  {
    title: "Collaboration en Temps Réel",
    description: "Travaillez ensemble sur vos projets avec une communication fluide et intuitive.",
    icon: UserCheck,
    color: "bg-purple-500"
  },
  {
    title: "Création Intuitive",
    description: "Concevez rapidement grâce à notre éditeur visuel inspiré du savoir-faire français.",
    icon: Palette,
    color: "bg-amber-500"
  },
  {
    title: "Performance Optimisée",
    description: "Solutions techniques de pointe pour des applications rapides et réactives.",
    icon: Zap,
    color: "bg-red-500"
  },
  {
    title: "Intégration API Avancée",
    description: "Connectez facilement vos services préférés avec notre système d'intégration.",
    icon: Code,
    color: "bg-indigo-500"
  }
];

const testimonials = [
  {
    name: "Sophie Durant",
    role: "Directrice Créative, Studio Lumière",
    content: "StudioFusion a transformé notre façon de concevoir des interfaces. L'approche française de l'esthétique combinée à la puissance technique est incomparable.",
    avatar: "https://i.pravatar.cc/100?img=1"
  },
  {
    name: "Marc Lejeune",
    role: "Chef de Projet, TechParis",
    content: "Enfin une plateforme qui comprend les besoins spécifiques du marché français tout en offrant des outils de niveau international.",
    avatar: "https://i.pravatar.cc/100?img=2"
  },
  {
    name: "Claire Bonnet",
    role: "UX Designer, Agence Digitale",
    content: "L'alliance parfaite entre élégance à la française et technologie de pointe. Mes clients sont impressionnés par les résultats.",
    avatar: "https://i.pravatar.cc/100?img=3"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/5">
      {/* Navigation */}
      <nav className="py-4 px-6 border-b border-border/40 backdrop-blur-sm bg-background/80 fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
              <span className="font-bold text-white">SF</span>
            </div>
            <span className="font-semibold text-xl">StudioFusion</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition">Accueil</Link>
            <Link to="/" className="text-muted-foreground hover:text-foreground transition">Fonctionnalités</Link>
            <Link to="/" className="text-muted-foreground hover:text-foreground transition">Tarifs</Link>
            <Link to="/" className="text-muted-foreground hover:text-foreground transition">Ressources</Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost">Connexion</Button>
            <Button>Essai Gratuit</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Nouveau: Collaboration en temps réel 🚀
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-600 to-indigo-600">
            Design à la Française.<br />Technologie Sans Frontières.
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            La plateforme de conception qui allie l'élégance française à la puissance technologique pour créer des expériences digitales exceptionnelles.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button size="lg" className="shadow-lg bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90">
              Commencer Gratuitement
            </Button>
            <Button size="lg" variant="outline" className="shadow-sm">
              Voir la Démonstration
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none h-20 bottom-0 top-auto"></div>
            <div className="rounded-xl border shadow-xl overflow-hidden max-w-5xl mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="StudioFusion Interface" 
                className="w-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 px-4 bg-background border-y border-border/20">
        <div className="container mx-auto text-center">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-8">Déjà adopté par plus de 2,000 entreprises en France</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            <div className="w-24">SNCF</div>
            <div className="w-24">BNP</div>
            <div className="w-24">Orange</div>
            <div className="w-24">Carrefour</div>
            <div className="w-24">L'Oréal</div>
            <div className="w-24">Renault</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-secondary/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Fonctionnalités Uniques
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Conçu pour l'Excellence Française</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez les outils qui font la différence dans votre processus créatif, avec une attention particulière aux besoins du marché français.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border border-border/50 bg-card hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <CardHeader className="pb-2">
                  <div className={`p-3 rounded-lg ${feature.color} w-fit mb-2 text-white`}>
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
                <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-blue-600 transition-all duration-300"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Processus Simplifié
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comment Ça Marche</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une approche en trois étapes pour transformer vos idées en réalité numérique.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                <Coffee className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Concevez</h3>
              <p className="text-muted-foreground">Utilisez notre éditeur intuitif pour donner vie à vos concepts avec élégance.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-4">
                <MessagesSquare className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Collaborez</h3>
              <p className="text-muted-foreground">Invitez votre équipe et travaillez ensemble en temps réel sur vos projets.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Publiez</h3>
              <p className="text-muted-foreground">Déployez vos créations en un clic, prêtes à impressionner le monde entier.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-secondary/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Témoignages
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce Qu'en Disent Nos Clients</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez pourquoi les professionnels français choisissent StudioFusion.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-border/50 bg-card hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground">"{testimonial.content}"</p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Tarification
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Une Offre Pour Chaque Besoin</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des tarifs transparents, sans surprise, adaptés au marché français.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle>Starter</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">29€</span>
                  <span className="text-muted-foreground">/mois</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {['5 projets', 'Collaboration limitée', 'Support par email', 'Exportation PDF'].map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Commencer</Button>
              </CardFooter>
            </Card>
            <Card className="border-2 border-primary relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                Populaire
              </div>
              <CardHeader>
                <CardTitle>Professionnel</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">79€</span>
                  <span className="text-muted-foreground">/mois</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {['Projets illimités', 'Collaboration complète', 'Support prioritaire', 'Exportations avancées', 'API access'].map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Commencer</Button>
              </CardFooter>
            </Card>
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle>Entreprise</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">Sur mesure</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {['Tout dans Professionnel', 'Intégration personnalisée', 'Support dédié', 'Formation sur site', 'Conformité RGPD avancée'].map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Contacter</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="border-0 bg-gradient-to-r from-primary/10 via-blue-600/10 to-indigo-600/10 p-2">
            <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6 p-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Prêt à transformer votre workflow ?</h3>
                <p className="text-muted-foreground">Rejoignez des milliers de professionnels français qui innovent chaque jour.</p>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" className="shadow-sm">En savoir plus</Button>
                <Button size="lg" className="shadow-md bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90">
                  Commencer gratuitement
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
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
                  <li key={i}><Link to="/" className="text-muted-foreground hover:text-foreground transition">{item}</Link></li>
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
                  <li key={i}><Link to="/" className="text-muted-foreground hover:text-foreground transition">{item}</Link></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} StudioFusion. Tous droits réservés. Made with ♥ in Paris.
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
    </div>
  );
};

export default Index;

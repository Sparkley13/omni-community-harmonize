
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Layout, AlertCircle } from "lucide-react";

const features = [
  {
    title: "Design Moderne",
    description: "Interface utilisateur élégante et réactive pour une expérience utilisateur optimale.",
    icon: Layout
  },
  {
    title: "Composants Réutilisables",
    description: "Bibliothèque complète de composants pour accélérer votre développement.",
    icon: Check
  },
  {
    title: "Support Technique",
    description: "Assistance dédiée pour vous aider à chaque étape de votre projet.",
    icon: AlertCircle
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Bienvenue sur Votre Application
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Une plateforme moderne et élégante pour construire vos projets rapidement et efficacement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="shadow-lg">
              Commencer
            </Button>
            <Button size="lg" variant="outline">
              En savoir plus
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Fonctionnalités principales</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="border-0 bg-gradient-to-r from-blue-600/10 to-primary/10 p-2">
            <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6 p-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">Prêt à commencer ?</h3>
                <p className="text-muted-foreground">Explorez toutes les possibilités de notre plateforme dès aujourd'hui.</p>
              </div>
              <Button size="lg" className="shadow-md">
                Commencer maintenant
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t">
        <div className="container mx-auto">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} Votre Application. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

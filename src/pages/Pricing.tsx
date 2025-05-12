
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import { Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PricingPlan {
  id: string;
  name: string;
  price: { monthly: number; annual: number };
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const { toast } = useToast();

  const handlePlanSelect = (plan: string) => {
    toast({
      title: "Forfait sélectionné",
      description: `Vous avez choisi le forfait ${plan}. Redirection vers le paiement...`,
    });
  };

  const pricingPlans: PricingPlan[] = [
    {
      id: "starter",
      name: "Starter",
      price: { monthly: 29, annual: 290 },
      description: "Parfait pour débuter avec l'essentiel des fonctionnalités",
      features: [
        "5 projets",
        "Collaboration limitée",
        "Support par email",
        "Exportation PDF",
        "Mises à jour gratuites",
      ]
    },
    {
      id: "pro",
      name: "Professionnel",
      price: { monthly: 79, annual: 790 },
      description: "La solution idéale pour les équipes professionnelles",
      features: [
        "Projets illimités",
        "Collaboration complète",
        "Support prioritaire",
        "Exportations avancées",
        "API access",
        "Intégrations tierces",
        "Domaine personnalisé",
      ],
      highlighted: true,
      badge: "Populaire"
    },
    {
      id: "enterprise",
      name: "Entreprise",
      price: { monthly: 0, annual: 0 },
      description: "Solutions sur mesure pour les grandes organisations",
      features: [
        "Tout dans Professionnel",
        "Intégration personnalisée",
        "Support dédié 24/7",
        "Formation sur site",
        "Conformité RGPD avancée",
        "Déploiement sur premise",
        "SLA garanti",
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/5 pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tarification Transparente</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choisissez le forfait qui correspond à vos besoins, sans frais cachés et avec une garantie de satisfaction
          </p>
          
          <div className="flex items-center justify-center mt-8 space-x-4">
            <span className={`text-sm ${billingCycle === 'monthly' ? 'text-foreground' : 'text-muted-foreground'}`}>Mensuel</span>
            <Toggle
              pressed={billingCycle === 'annual'}
              onPressedChange={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="data-[state=on]:bg-primary"
            />
            <span className={`text-sm ${billingCycle === 'annual' ? 'text-foreground' : 'text-muted-foreground'}`}>
              Annuel <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Économisez 15%</span>
            </span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.id}
              className={`border ${plan.highlighted ? 'border-2 border-primary shadow-lg relative' : 'border-border/50'} transition-all duration-300 hover:shadow-xl`}
            >
              {plan.badge && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  {plan.badge}
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-2 space-y-1">
                  <div className="flex items-end">
                    {plan.id === 'enterprise' ? (
                      <span className="text-3xl font-bold">Sur mesure</span>
                    ) : (
                      <>
                        <span className="text-3xl font-bold">{billingCycle === 'monthly' ? plan.price.monthly : plan.price.annual}€</span>
                        <span className="text-muted-foreground ml-1">{billingCycle === 'monthly' ? '/mois' : '/an'}</span>
                      </>
                    )}
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mr-2 mt-1">
                        <Check className="h-4 w-4 text-green-500" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                {plan.id === 'enterprise' ? (
                  <Button 
                    variant={plan.highlighted ? "default" : "outline"} 
                    className="w-full"
                    onClick={() => handlePlanSelect(plan.name)}
                  >
                    Contacter l'équipe commerciale
                  </Button>
                ) : (
                  <Button 
                    variant={plan.highlighted ? "default" : "outline"} 
                    className={`w-full ${plan.highlighted ? "bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90" : ""}`}
                    onClick={() => handlePlanSelect(plan.name)}
                  >
                    Choisir ce forfait
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="border-0 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Questions Fréquentes</h3>
              <div className="space-y-4">
                {[
                  {
                    q: "Puis-je changer de forfait à tout moment ?",
                    a: "Oui, vous pouvez passer à un forfait supérieur à tout moment. Le changement vers un forfait inférieur prendra effet à la fin de votre période de facturation."
                  },
                  {
                    q: "Y a-t-il une période d'essai ?",
                    a: "Tous nos forfaits incluent une période d'essai de 14 jours sans engagement et sans carte bancaire."
                  },
                  {
                    q: "Comment fonctionne la facturation ?",
                    a: "La facturation est effectuée au début de chaque période (mensuelle ou annuelle). Nous acceptons les cartes bancaires et les virements SEPA."
                  }
                ].map((faq, i) => (
                  <div key={i} className="border-t border-border/50 pt-4 first:border-0 first:pt-0">
                    <h4 className="font-semibold mb-2">{faq.q}</h4>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Besoin d'une solution personnalisée ?</p>
          <Link to="/contact">
            <Button variant="outline">Contactez notre équipe</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

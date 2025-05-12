
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Layout, Palette, UserCheck, Zap, MessagesSquare, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Features = () => {
  const { toast } = useToast();

  const showFeatureDemo = (feature: string) => {
    toast({
      title: `Démo ${feature}`,
      description: `La démonstration de ${feature} sera bientôt disponible`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/5 pt-24">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Nos Fonctionnalités</h1>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
          Découvrez comment StudioFusion révolutionne la création digitale avec des outils pensés pour l'excellence française
        </p>

        <Tabs defaultValue="design" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
            <TabsTrigger value="deployment">Déploiement</TabsTrigger>
          </TabsList>
          
          <TabsContent value="design" className="space-y-8 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-border/50 bg-card hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-blue-500 w-fit mb-2 text-white">
                    <Layout className="h-5 w-5" />
                  </div>
                  <CardTitle>Éditeur Visuel Avancé</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Créez des interfaces élégantes sans écrire de code, avec des composants inspirés du design français.
                  </CardDescription>
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Éditeur Visuel" 
                    className="rounded-md w-full h-48 object-cover" 
                  />
                </CardContent>
                <CardFooter>
                  <Link to="/editor" className="w-full">
                    <Button variant="outline" className="w-full">
                      Essayer maintenant
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="border-border/50 bg-card hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-purple-500 w-fit mb-2 text-white">
                    <Palette className="h-5 w-5" />
                  </div>
                  <CardTitle>Bibliothèque de Composants</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Des centaines de composants prêts à l'emploi, conçus avec une esthétique à la française.
                  </CardDescription>
                  <img 
                    src="https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Bibliothèque de Composants" 
                    className="rounded-md w-full h-48 object-cover" 
                  />
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" onClick={() => showFeatureDemo("Bibliothèque de Composants")}>
                    Explorer
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="collaboration" className="space-y-8 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-border/50 bg-card hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-green-500 w-fit mb-2 text-white">
                    <UserCheck className="h-5 w-5" />
                  </div>
                  <CardTitle>Collaboration en Temps Réel</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Travaillez ensemble sur vos projets simultanément, avec un historique des modifications détaillé.
                  </CardDescription>
                  <img 
                    src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Collaboration" 
                    className="rounded-md w-full h-48 object-cover" 
                  />
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" onClick={() => showFeatureDemo("Collaboration")}>
                    Démonstration
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-border/50 bg-card hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-amber-500 w-fit mb-2 text-white">
                    <MessagesSquare className="h-5 w-5" />
                  </div>
                  <CardTitle>Commentaires Contextuels</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Ajoutez des commentaires directement sur les éléments de l'interface pour une communication précise.
                  </CardDescription>
                  <img 
                    src="https://images.unsplash.com/photo-1596079890744-c1a0462d0975?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Commentaires Contextuels" 
                    className="rounded-md w-full h-48 object-cover" 
                  />
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" onClick={() => showFeatureDemo("Commentaires")}>
                    Essayer
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="deployment" className="space-y-8 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-border/50 bg-card hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-red-500 w-fit mb-2 text-white">
                    <Zap className="h-5 w-5" />
                  </div>
                  <CardTitle>Déploiement En Un Clic</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Publiez vos projets instantanément avec une infrastructure optimisée pour la performance.
                  </CardDescription>
                  <img 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Déploiement" 
                    className="rounded-md w-full h-48 object-cover" 
                  />
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" onClick={() => showFeatureDemo("Déploiement")}>
                    Essayer
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-border/50 bg-card hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-indigo-500 w-fit mb-2 text-white">
                    <Globe className="h-5 w-5" />
                  </div>
                  <CardTitle>Support Multi-Plateforme</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Adaptez automatiquement vos créations pour tous les appareils et navigateurs.
                  </CardDescription>
                  <img 
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Multi-Plateforme" 
                    className="rounded-md w-full h-48 object-cover" 
                  />
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" onClick={() => showFeatureDemo("Multi-Plateforme")}>
                    Explorer
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-16">
          <Link to="/demo">
            <Button size="lg" className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90">
              Réserver une Démo Personnalisée
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Features;

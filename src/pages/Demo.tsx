
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Calendar, CheckCircle, Clock, MessagesSquare, User } from "lucide-react";

const Demo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    newsletter: false,
  });
  
  const [formStep, setFormStep] = useState(1);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, newsletter: checked }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formStep < 3) {
      setFormStep(formStep + 1);
      return;
    }
    
    // Form completion
    toast({
      title: "Demande envoyée",
      description: "Notre équipe vous contactera dans les 24 heures.",
    });
    
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        newsletter: false,
      });
      setFormStep(1);
    }, 1000);
  };
  
  const isNextDisabled = () => {
    if (formStep === 1) {
      return !formData.name || !formData.email;
    }
    if (formStep === 2) {
      return !formData.company || !formData.message;
    }
    return false;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/5 pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight">Réservez votre démo personnalisée</h1>
              <p className="text-lg text-muted-foreground">
                Découvrez comment StudioFusion peut transformer votre processus de création d'interfaces avec une présentation adaptée à vos besoins spécifiques.
              </p>
              
              <div className="flex items-center gap-3 mt-8">
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                  <Clock className="h-4 w-4 text-green-600" />
                </div>
                <p className="text-sm">Démonstration de 30 minutes</p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                  <User className="h-4 w-4 text-blue-600" />
                </div>
                <p className="text-sm">Personnalisée à votre secteur</p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full">
                  <Calendar className="h-4 w-4 text-purple-600" />
                </div>
                <p className="text-sm">Choix flexible des horaires</p>
              </div>
              
              <div className="mt-8">
                <Card className="border-0 shadow-sm bg-primary/5">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <MessagesSquare className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="italic text-sm">
                          "La démonstration personnalisée a parfaitement répondu à nos questions spécifiques. L'équipe a été impressionnée par la rapidité d'implémentation."
                        </p>
                        <p className="text-sm font-medium mt-2">Marie Dubois, Directrice UX chez TechFrame</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          <div>
            <Card>
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Votre démo personnalisée</h2>
                    <div className="text-sm text-muted-foreground">
                      Étape {formStep} / 3
                    </div>
                  </div>
                  <div className="relative h-1 w-full bg-secondary/50 rounded-full overflow-hidden mb-6">
                    <div 
                      className="absolute h-full bg-primary transition-all duration-300 ease-in-out" 
                      style={{ width: `${(formStep / 3) * 100}%` }}
                    />
                  </div>
                </div>
                
                <form onSubmit={handleSubmit}>
                  {formStep === 1 && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nom complet</Label>
                        <Input 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Comment devons-nous vous appeler ?"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email professionnel</Label>
                        <Input 
                          id="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          type="email" 
                          placeholder="Où pouvons-nous vous contacter ?"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Numéro de téléphone (optionnel)</Label>
                        <Input 
                          id="phone" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+33 6 12 34 56 78"
                        />
                      </div>
                    </div>
                  )}
                  
                  {formStep === 2 && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="space-y-2">
                        <Label htmlFor="company">Entreprise</Label>
                        <Input 
                          id="company" 
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Nom de votre entreprise"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Comment pouvons-nous vous aider ?</Label>
                        <Textarea 
                          id="message" 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Décrivez votre projet et vos besoins spécifiques..."
                          rows={4}
                          required
                        />
                      </div>
                    </div>
                  )}
                  
                  {formStep === 3 && (
                    <div className="space-y-8 animate-fade-in">
                      <div className="border rounded-lg p-4 bg-muted/30">
                        <h3 className="font-medium mb-4">Confirmez vos informations</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Nom</span>
                            <span>{formData.name}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Email</span>
                            <span>{formData.email}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Entreprise</span>
                            <span>{formData.company}</span>
                          </div>
                          {formData.phone && (
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Téléphone</span>
                              <span>{formData.phone}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="newsletter" 
                          checked={formData.newsletter}
                          onCheckedChange={handleCheckboxChange}
                        />
                        <Label htmlFor="newsletter" className="text-sm">
                          Je souhaite recevoir des actualités et conseils sur la création d'interfaces
                        </Label>
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    {formStep > 1 && (
                      <Button 
                        type="button" 
                        variant="outline"
                        className="sm:flex-1"
                        onClick={() => setFormStep(formStep - 1)}
                      >
                        Retour
                      </Button>
                    )}
                    <Button 
                      type="submit"
                      className={`${formStep === 3 ? 'bg-gradient-to-r from-green-600 to-teal-600' : ''} sm:flex-1`}
                      disabled={isNextDisabled()}
                    >
                      {formStep === 3 ? (
                        <span className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4" /> Confirmer
                        </span>
                      ) : "Continuer"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;

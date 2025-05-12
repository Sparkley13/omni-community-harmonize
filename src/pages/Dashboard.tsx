
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Plus, Settings, User, Home, Layout, Palette, Image, ChevronDown, ChevronRight, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock data for projects
const mockProjects = [
  { id: 1, name: "Refonte Site E-commerce", thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", updatedAt: "Aujourd'hui" },
  { id: 2, name: "Application Mobile Foodtech", thumbnail: "https://images.unsplash.com/photo-1604782206219-3b9d4b601d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", updatedAt: "Hier" },
  { id: 3, name: "Dashboard Analytics", thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", updatedAt: "Il y a 2 jours" },
  { id: 4, name: "Landing Page Startup", thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", updatedAt: "La semaine dernière" },
];

// Mock data for components
const componentCategories = [
  {
    name: "Layout",
    icon: Layout,
    items: ["Container", "Grid", "Flex Box", "Section", "Divider"]
  },
  {
    name: "UI Éléments",
    icon: Palette,
    items: ["Boutons", "Cartes", "Alertes", "Badges", "Modals", "Dropdowns"]
  },
  {
    name: "Media",
    icon: Image,
    items: ["Image Gallery", "Video Player", "Carousel", "Icon Set"]
  }
];

const Dashboard = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [openCategories, setOpenCategories] = useState<string[]>(["Layout"]);
  const { toast } = useToast();

  const toggleCategory = (category: string) => {
    setOpenCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  const handleCreateProject = () => {
    toast({
      title: "Nouveau projet",
      description: "Votre nouveau projet a été créé avec succès.",
    });
  };

  const handleComponentDrag = (component: string) => {
    toast({
      title: "Composant ajouté",
      description: `Le composant ${component} a été ajouté à votre projet.`,
    });
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-card hidden md:block">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
              <span className="font-bold text-white">SF</span>
            </div>
            <span className="font-semibold text-xl">StudioFusion</span>
          </div>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Rechercher..." 
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="p-2">
          <nav className="space-y-1">
            {["Tableau de bord", "Projets", "Templates", "Paramètres", "Aide"].map((item, index) => (
              <Button 
                key={index} 
                variant={index === 0 ? "secondary" : "ghost"} 
                className="w-full justify-start"
              >
                {index === 0 && <Home className="mr-2 h-4 w-4" />}
                {index === 1 && <Layout className="mr-2 h-4 w-4" />}
                {index === 2 && <Palette className="mr-2 h-4 w-4" />}
                {index === 3 && <Settings className="mr-2 h-4 w-4" />}
                {index === 4 && <User className="mr-2 h-4 w-4" />}
                {item}
              </Button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Tableau de bord</h1>
            <Button onClick={handleCreateProject}>
              <Plus className="mr-2 h-4 w-4" /> Nouveau Projet
            </Button>
          </div>

          <Tabs defaultValue="projects" className="space-y-6">
            <TabsList>
              <TabsTrigger value="projects">Mes Projets</TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
              <TabsTrigger value="recent">Activité Récente</TabsTrigger>
            </TabsList>
            
            <TabsContent value="projects" className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {mockProjects.map(project => (
                  <Card 
                    key={project.id} 
                    className={`cursor-pointer hover:shadow-md transition-all ${activeProject === project.id ? 'ring-2 ring-primary' : ''}`}
                    onClick={() => setActiveProject(project.id)}
                  >
                    <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                      <img 
                        src={project.thumbnail} 
                        alt={project.name} 
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardContent className="pt-4">
                      <CardTitle className="text-lg">{project.name}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        Modifié: {project.updatedAt}
                      </p>
                    </CardContent>
                  </Card>
                ))}
                <Card className="border-dashed border-2 flex items-center justify-center cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-colors">
                  <CardContent className="flex flex-col items-center justify-center py-8">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Plus className="h-6 w-6 text-primary" />
                    </div>
                    <p className="font-medium">Créer un nouveau projet</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="templates" className="space-y-4 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {["E-commerce", "Portfolio", "Blog", "Landing Page", "Application Mobile", "Dashboard"].map((template, i) => (
                  <Card key={i} className="cursor-pointer hover:shadow-md transition-all">
                    <div className="h-40 bg-gradient-to-br from-blue-600/70 to-indigo-600/70 rounded-t-lg flex items-center justify-center">
                      <span className="text-white font-semibold text-xl">{template}</span>
                    </div>
                    <CardFooter className="justify-between py-3">
                      <span className="text-sm">8 variantes</span>
                      <Button size="sm" variant="ghost">
                        Utiliser
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="recent" className="space-y-4 animate-fade-in">
              <Card>
                <CardContent className="p-0">
                  <ul className="divide-y">
                    {[
                      { action: "Modification du design", project: "Refonte Site E-commerce", time: "Il y a 2 heures" },
                      { action: "Ajout de composant", project: "Application Mobile Foodtech", time: "Il y a 5 heures" },
                      { action: "Exportation PDF", project: "Dashboard Analytics", time: "Hier, 15:30" },
                      { action: "Commentaire ajouté", project: "Landing Page Startup", time: "Hier, 11:15" },
                      { action: "Nouveau projet créé", project: "Portfolio Photographe", time: "23/05/2023" }
                    ].map((activity, i) => (
                      <li key={i} className="flex justify-between items-center p-4 hover:bg-muted/40">
                        <div>
                          <p className="font-medium">{activity.action}</p>
                          <p className="text-sm text-muted-foreground">{activity.project}</p>
                        </div>
                        <span className="text-xs text-muted-foreground">{activity.time}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Right Sidebar - Component Library */}
      {activeProject && (
        <aside className="w-64 border-l bg-card hidden lg:block overflow-auto">
          <div className="p-4 border-b">
            <h3 className="font-semibold mb-1">Bibliothèque de Composants</h3>
            <p className="text-xs text-muted-foreground">Glissez et déposez sur votre projet</p>
          </div>
          <ScrollArea className="h-[calc(100vh-65px)]">
            <div className="p-4">
              {componentCategories.map((category) => (
                <Collapsible
                  key={category.name}
                  open={openCategories.includes(category.name)}
                  className="mb-2"
                >
                  <CollapsibleTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="w-full flex justify-between items-center p-2 h-auto"
                      onClick={() => toggleCategory(category.name)}
                    >
                      <div className="flex items-center">
                        <category.icon className="h-4 w-4 mr-2" />
                        <span>{category.name}</span>
                      </div>
                      {openCategories.includes(category.name) ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="pl-6 pr-2 py-2 space-y-1">
                      {category.items.map((item, i) => (
                        <div 
                          key={i}
                          className="text-sm py-1.5 px-2 rounded hover:bg-accent cursor-move"
                          draggable
                          onDragEnd={() => handleComponentDrag(item)}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
              
              <div className="mt-8 pt-4 border-t">
                <h4 className="font-semibold text-xs uppercase text-muted-foreground mb-2">Projets récents</h4>
                <div className="space-y-2">
                  {mockProjects.slice(0, 3).map(project => (
                    <div key={project.id} className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded overflow-hidden flex-shrink-0">
                        <img 
                          src={project.thumbnail} 
                          alt="" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-sm truncate">{project.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollArea>
        </aside>
      )}
    </div>
  );
};

export default Dashboard;


import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Code,
  Eye,
  Layout,
  Layers,
  Palette,
  PenTool,
  Sliders,
  WandSparkles,
  Component,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Types for the editor components
interface ComponentItem {
  id: string;
  type: string;
  content: string;
  props: {
    className?: string;
    style?: Record<string, string>;
    [key: string]: any;
  };
}

const Editor = () => {
  const { toast } = useToast();
  const [selectedTab, setSelectedTab] = useState<string>("edit");
  const [selectedComponentId, setSelectedComponentId] = useState<string | null>(null);
  const [components, setComponents] = useState<ComponentItem[]>([
    {
      id: "heading-1",
      type: "heading",
      content: "Titre Principal",
      props: {
        className: "text-3xl font-bold text-gray-800",
        style: { fontFamily: "Playfair Display, serif" },
      },
    },
    {
      id: "paragraph-1",
      type: "paragraph",
      content: "Votre contenu captivant commence ici. Ajoutez des descriptions élégantes qui inspirent vos visiteurs.",
      props: {
        className: "text-lg text-gray-600 my-4",
      },
    },
    {
      id: "button-1",
      type: "button",
      content: "Découvrir",
      props: {
        className: "bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors",
      },
    },
  ]);
  
  const [availableComponents] = useState([
    { id: "heading", label: "Titre", icon: <PenTool size={18} /> },
    { id: "paragraph", label: "Paragraphe", icon: <Layout size={18} /> },
    { id: "image", label: "Image", icon: <Eye size={18} /> },
    { id: "button", label: "Bouton", icon: <Component size={18} /> },
    { id: "divider", label: "Séparateur", icon: <Layers size={18} /> },
    { id: "card", label: "Carte", icon: <Code size={18} /> },
  ]);

  // Function to handle component selection
  const handleComponentSelect = (componentId: string) => {
    setSelectedComponentId(componentId);
  };

  // Function to update component properties
  const handleComponentUpdate = (
    id: string,
    field: "content" | "props",
    value: any
  ) => {
    setComponents(
      components.map((component) =>
        component.id === id
          ? { ...component, [field]: value }
          : component
      )
    );
  };

  // Function to add a new component
  const handleAddComponent = (type: string) => {
    const newId = `${type}-${components.length + 1}`;
    const newComponent: ComponentItem = {
      id: newId,
      type,
      content: type === "heading" ? "Nouveau Titre" : 
              type === "paragraph" ? "Nouveau paragraphe" : 
              type === "button" ? "Action" : "",
      props: {
        className: type === "heading" ? "text-2xl font-bold" : 
                 type === "paragraph" ? "text-base" : 
                 type === "button" ? "bg-blue-500 text-white px-4 py-2 rounded" : "",
      },
    };

    setComponents([...components, newComponent]);
    setSelectedComponentId(newId);
    
    toast({
      title: "Composant ajouté",
      description: `Un nouveau composant de type ${type} a été ajouté à votre design.`,
    });
  };

  // Function to handle drag and drop
  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    
    const items = Array.from(components);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    setComponents(items);
  };

  // Function to render a component preview
  const renderComponent = (component: ComponentItem) => {
    switch (component.type) {
      case "heading":
        return <h2 {...component.props}>{component.content}</h2>;
      case "paragraph":
        return <p {...component.props}>{component.content}</p>;
      case "button":
        return <button {...component.props}>{component.content}</button>;
      case "image":
        return <img src={component.content || "https://via.placeholder.com/400x200"} alt="Preview" {...component.props} />;
      case "divider":
        return <hr {...component.props} />;
      case "card":
        return (
          <div className="border rounded-lg p-4 shadow-sm" {...component.props}>
            {component.content}
          </div>
        );
      default:
        return <div>{component.content}</div>;
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
          Éditeur Visuel Avancé
        </h1>
        
        <div className="grid grid-cols-12 gap-6">
          {/* Left sidebar - Component Library */}
          <div className="col-span-12 md:col-span-3">
            <Card className="h-full">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Component size={20} />
                  Bibliothèque
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {availableComponents.map((componentType) => (
                    <Button
                      key={componentType.id}
                      variant="outline"
                      className="flex flex-col items-center justify-center h-20 text-xs"
                      onClick={() => handleAddComponent(componentType.id)}
                    >
                      {componentType.icon}
                      <span className="mt-1">{componentType.label}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main canvas */}
          <div className="col-span-12 md:col-span-6">
            <Card className="min-h-[60vh] border-2">
              <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
                <div className="border-b px-4 py-2 flex items-center justify-between">
                  <TabsList className="grid w-[200px] grid-cols-2">
                    <TabsTrigger value="edit" className="flex items-center gap-1">
                      <PenTool size={14} />
                      Éditer
                    </TabsTrigger>
                    <TabsTrigger value="preview" className="flex items-center gap-1">
                      <Eye size={14} />
                      Aperçu
                    </TabsTrigger>
                  </TabsList>
                  
                  <Button
                    size="sm"
                    className="bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => {
                      toast({
                        title: "Design sauvegardé",
                        description: "Votre design a été sauvegardé avec succès.",
                      });
                    }}
                  >
                    Sauvegarder
                  </Button>
                </div>
                
                <TabsContent value="edit" className="p-0">
                  <div className="p-8 min-h-[50vh] bg-white dark:bg-gray-950">
                    <DragDropContext onDragEnd={handleDragEnd}>
                      <Droppable droppableId="canvas">
                        {(provided) => (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className="space-y-4"
                          >
                            {components.map((component, index) => (
                              <Draggable
                                key={component.id}
                                draggableId={component.id}
                                index={index}
                              >
                                {(provided) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className={`p-2 border border-dashed rounded-md cursor-move transition-all ${
                                      selectedComponentId === component.id
                                        ? "border-primary bg-primary/5"
                                        : "border-gray-200 hover:border-gray-300"
                                    }`}
                                    onClick={() => handleComponentSelect(component.id)}
                                  >
                                    {renderComponent(component)}
                                  </div>
                                )}
                              </Draggable>
                            ))}
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                    </DragDropContext>
                  </div>
                </TabsContent>
                
                <TabsContent value="preview" className="p-0">
                  <div className="p-8 min-h-[50vh] bg-white dark:bg-gray-950">
                    {components.map((component) => (
                      <div key={component.id} className="mb-4">
                        {renderComponent(component)}
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>
          
          {/* Right sidebar - Properties */}
          <div className="col-span-12 md:col-span-3">
            <Card className="h-full">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Sliders size={20} />
                  Propriétés
                </h3>
                
                {selectedComponentId ? (
                  (() => {
                    const component = components.find(
                      (c) => c.id === selectedComponentId
                    );
                    
                    if (!component) return <p>Sélectionnez un composant</p>;
                    
                    return (
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="content">Contenu</Label>
                          <Textarea
                            id="content"
                            value={component.content}
                            onChange={(e) =>
                              handleComponentUpdate(
                                component.id,
                                "content",
                                e.target.value
                              )
                            }
                            className="mt-1"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="class">Classes</Label>
                          <Input
                            id="class"
                            value={component.props.className || ""}
                            onChange={(e) =>
                              handleComponentUpdate(component.id, "props", {
                                ...component.props,
                                className: e.target.value,
                              })
                            }
                            className="mt-1"
                          />
                        </div>
                        
                        <div>
                          <Label className="text-sm font-medium mb-2 block">
                            Style
                          </Label>
                          <div className="space-y-2">
                            <div className="grid grid-cols-2 gap-2">
                              <div>
                                <Label htmlFor="color" className="text-xs">
                                  Couleur
                                </Label>
                                <div className="flex gap-2">
                                  <Popover>
                                    <PopoverTrigger asChild>
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-full h-8 flex items-center justify-between"
                                      >
                                        <div
                                          className="w-4 h-4 rounded-full"
                                          style={{
                                            backgroundColor:
                                              component.props?.style?.color || "#000000",
                                          }}
                                        ></div>
                                        <Palette size={14} />
                                      </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-64">
                                      <div className="grid grid-cols-5 gap-1">
                                        {[
                                          "#000000",
                                          "#FFFFFF",
                                          "#FF0000",
                                          "#00FF00",
                                          "#0000FF",
                                          "#FFFF00",
                                          "#00FFFF",
                                          "#FF00FF",
                                          "#C0C0C0",
                                          "#808080",
                                        ].map((color) => (
                                          <Button
                                            key={color}
                                            variant="outline"
                                            className="w-8 h-8 p-0 m-0"
                                            style={{ backgroundColor: color }}
                                            onClick={() =>
                                              handleComponentUpdate(
                                                component.id,
                                                "props",
                                                {
                                                  ...component.props,
                                                  style: {
                                                    ...(component.props.style || {}),
                                                    color,
                                                  },
                                                }
                                              )
                                            }
                                          />
                                        ))}
                                      </div>
                                    </PopoverContent>
                                  </Popover>
                                </div>
                              </div>
                              
                              <div>
                                <Label htmlFor="fontSize" className="text-xs">
                                  Taille
                                </Label>
                                <select
                                  id="fontSize"
                                  className="w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
                                  value={component.props?.style?.fontSize || ""}
                                  onChange={(e) =>
                                    handleComponentUpdate(component.id, "props", {
                                      ...component.props,
                                      style: {
                                        ...(component.props.style || {}),
                                        fontSize: e.target.value,
                                      },
                                    })
                                  }
                                >
                                  <option value="">Défaut</option>
                                  <option value="0.875rem">Small</option>
                                  <option value="1rem">Medium</option>
                                  <option value="1.25rem">Large</option>
                                  <option value="1.5rem">XL</option>
                                  <option value="2rem">2XL</option>
                                </select>
                              </div>
                            </div>
                            
                            <div>
                              <Label className="text-xs flex items-center gap-2">
                                <Checkbox
                                  id="bold"
                                  checked={
                                    component.props?.style?.fontWeight === "bold"
                                  }
                                  onCheckedChange={(checked) =>
                                    handleComponentUpdate(component.id, "props", {
                                      ...component.props,
                                      style: {
                                        ...(component.props.style || {}),
                                        fontWeight: checked ? "bold" : "normal",
                                      },
                                    })
                                  }
                                />
                                <span>Gras</span>
                              </Label>
                            </div>
                          </div>
                        </div>
                        
                        <div className="pt-4 flex justify-end space-x-2">
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => {
                              setComponents(
                                components.filter((c) => c.id !== selectedComponentId)
                              );
                              setSelectedComponentId(null);
                              toast({
                                title: "Composant supprimé",
                                description: "Le composant a été supprimé avec succès.",
                              });
                            }}
                          >
                            Supprimer
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              // Duplicate the component
                              const componentToDuplicate = components.find(
                                (c) => c.id === selectedComponentId
                              );
                              if (componentToDuplicate) {
                                const newComponent = {
                                  ...componentToDuplicate,
                                  id: `${componentToDuplicate.type}-${
                                    components.length + 1
                                  }`,
                                };
                                setComponents([...components, newComponent]);
                                setSelectedComponentId(newComponent.id);
                                toast({
                                  title: "Composant dupliqué",
                                  description: "Le composant a été dupliqué avec succès.",
                                });
                              }
                            }}
                          >
                            Dupliquer
                          </Button>
                        </div>
                      </div>
                    );
                  })()
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <WandSparkles className="mx-auto h-12 w-12 opacity-50" />
                    <p className="mt-2">Sélectionnez un élément pour éditer ses propriétés</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;

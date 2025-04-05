
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FoodItem {
  name: string;
  description: string;
  nutrients: string;
  image: string;
}

const DietRecommendation = () => {
  const dietCategories = [
    {
      title: "Iron-Rich Local Foods",
      description: "Foods that help combat anemia",
      items: [
        {
          name: "पालक (Spinach)",
          description: "पालक आयरन, विटामिन ए और सी से भरपूर होता है।",
          nutrients: "Iron, Vitamin A, C, K",
          image: "https://source.unsplash.com/random/100x100/?spinach"
        },
        {
          name: "काला चना (Black Chickpeas)",
          description: "काला चना प्रोटीन और आयरन का अच्छा स्रोत है।",
          nutrients: "Iron, Protein, Fiber",
          image: "https://source.unsplash.com/random/100x100/?chickpeas"
        },
        {
          name: "गुड़ (Jaggery)",
          description: "गुड़ आयरन का प्राकृतिक स्रोत है और रक्त में हीमोग्लोबिन बढ़ाने में मदद करता है।",
          nutrients: "Iron, Minerals",
          image: "https://source.unsplash.com/random/100x100/?jaggery"
        }
      ]
    },
    {
      title: "प्रोटीन युक्त आहार (Protein Rich Foods)",
      description: "Foods that promote muscle health",
      items: [
        {
          name: "दाल (Lentils)",
          description: "विभिन्न प्रकार की दालें प्रोटीन का उत्तम स्रोत हैं।",
          nutrients: "Protein, Iron, Fiber",
          image: "https://source.unsplash.com/random/100x100/?lentils"
        },
        {
          name: "दही (Yogurt)",
          description: "दही में प्रोटीन और कैल्शियम प्रचुर मात्रा में होता है।",
          nutrients: "Protein, Calcium, Probiotics",
          image: "https://source.unsplash.com/random/100x100/?yogurt"
        }
      ]
    }
  ];

  const FoodCard = ({ item }: { item: FoodItem }) => (
    <div className="flex border rounded-lg overflow-hidden">
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-16 h-16 object-cover"
        onError={(e) => {
          e.currentTarget.src = "https://placekitten.com/100/100";
          e.currentTarget.onerror = null;
        }}
      />
      <div className="p-2">
        <h4 className="font-medium text-sm">{item.name}</h4>
        <p className="text-xs text-muted-foreground">{item.description}</p>
        <p className="text-xs font-medium mt-1 text-green">{item.nutrients}</p>
      </div>
    </div>
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">स्वस्थ आहार सुझाव</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {dietCategories.map((category, index) => (
            <div key={index}>
              <h3 className="font-medium text-blue mb-2">{category.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
              <div className="grid gap-3">
                {category.items.map((item, i) => (
                  <FoodCard key={i} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <Button className="w-full mt-6 bg-green hover:bg-green/90">
          Generate Personalized Diet Plan
        </Button>
      </CardContent>
    </Card>
  );
};

export default DietRecommendation;

import React, { useState } from "react";

const NutritionRecommendationScreen = () => {
  const [favorites, setFavorites] = useState([]);
  const [sortOption, setSortOption] = useState("meal");

  const foodItems = [
    {
      name: "Oatmeal",
      meal: "Breakfast",
      image: "/path/to/oatmeal.svg",
      benefits: "Rich in fiber and nutrients.",
    },
    {
      name: "Grilled Chicken",
      meal: "Lunch",
      image: "/path/to/chicken.svg",
      benefits: "High in protein.",
    },
    {
      name: "Salad",
      meal: "Dinner",
      image: "/path/to/salad.svg",
      benefits: "Packed with vitamins.",
    },
  ];

  const toggleFavorite = (name) => {
    setFavorites((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
    );
  };

  const sortedItems = [...foodItems].sort((a, b) => {
    if (sortOption === "meal") {
      return a.meal.localeCompare(b.meal);
    }
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <h2 className="text-2xl font-bold mb-4">Nutrition Recommendations</h2>
      <div className="flex mb-4">
        <button onClick={() => setSortOption("meal")} className="bg-secondary text-white px-4 py-2 rounded mr-2">
          Sort by Meal
        </button>
        <button onClick={() => setSortOption("name")} className="bg-secondary text-white px-4 py-2 rounded">
          Sort by Name
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sortedItems.map((item) => (
          <div key={item.name} className="bg-white p-4 rounded-lg shadow-md">
            <img src={item.image} alt={item.name} className="w-full mb-2" />
            <h3 className="text-lg font-medium">{item.name}</h3>
            <p className="text-muted-foreground mb-2">{item.benefits}</p>
            <button
              onClick={() => toggleFavorite(item.name)}
              className={`px-4 py-2 rounded ${favorites.includes(item.name) ? "bg-support text-white" : "bg-muted text-black"}`}
            >
              {favorites.includes(item.name) ? "Unsave" : "Save as Favorite"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NutritionRecommendationScreen; 
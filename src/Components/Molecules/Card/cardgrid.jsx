import React from 'react';
import RecipeCard from './card';

const RecipeCardGrid = () => {
  const recipes = [
    {
      id: 1, // Ensure this key is present
      image: 'https://cdn.pixabay.com/photo/2017/11/25/17/17/sandwich-2977251_1280.jpg',
      title: 'Classic Spaghetti Carbonara',
      description: 'A creamy and comforting Italian pasta dish.',
      time: 30,
      difficulty: 'Easy',
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">🍲 Featured Recipes</h1>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6">
        {recipes.map((recipe) => {
          console.log("RecipeCardGrid sending recipeId:", recipe.id); // Debugging Log
          return <RecipeCard key={recipe.id} recipeId={recipe.id} {...recipe} />;
        })}
      </div>
    </div>
  );
};

export default RecipeCardGrid;

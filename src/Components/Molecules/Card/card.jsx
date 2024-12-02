import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation

// RecipeCard Component
const RecipeCard = ({ image, title, description, time, difficulty, recipeId }) => {
  return (
    <div className="max-w-md rounded-lg overflow-hidden shadow-lg bg-white transition-all hover:shadow-xl hover:scale-105 transform duration-300 border border-gray-200">
      <img className="w-full h-56 object-cover" src={image} alt={title} />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm font-medium text-gray-500">⏱️ {time} mins</span>
          <span className={`text-xs font-medium px-3 py-1 rounded-full ${difficulty === 'Easy' ? 'bg-green-100 text-green-600' : difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-600' : 'bg-red-100 text-red-600'}`}>
            {difficulty}
          </span>
        </div>
        {/* Link for View Recipe button */}
        <Link to={`/recipe/${recipeId}`}>
          <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300">
            View Recipe
          </button>
        </Link>
      </div>
    </div>
  );
};

// RecipeCardGrid Component
const RecipeCardGrid = () => {
  const recipes = [
    {
      id: 1,
      image: 'https://cdn.pixabay.com/photo/2017/11/25/17/17/sandwich-2977251_1280.jpg',
      title: 'Classic Spaghetti Carbonara',
      description: 'A creamy and comforting Italian pasta dish.',
      time: 30,
      difficulty: 'Easy',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/300x200.png?text=Recipe+2',
      title: 'Grilled Chicken Salad',
      description: 'A healthy and refreshing meal with a smoky flavor.',
      time: 20,
      difficulty: 'Medium',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/300x200.png?text=Recipe+3',
      title: 'Molten Chocolate Cake',
      description: 'A decadent dessert with a gooey chocolate center.',
      time: 40,
      difficulty: 'Hard',
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Featured Recipes</h1>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeCardGrid;

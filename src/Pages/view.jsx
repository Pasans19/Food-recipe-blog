import React from 'react';
import { useParams } from 'react-router-dom';

// Function to get recipe by ID
const getRecipeById = (id) => {
  const recipes = [
    { id: '1', title: 'Classic Spaghetti Carbonara', image: 'https://via.placeholder.com/300', description: 'A creamy and comforting Italian pasta dish.', time: 30, difficulty: 'Easy', servings: 4, ingredients: ['Spaghetti', 'Eggs', 'Cheese', 'Bacon'], instructions: ['Boil pasta', 'Fry bacon', 'Mix eggs and cheese', 'Combine and serve'] },
    { id: '2', title: 'Grilled Chicken Salad', image: 'https://via.placeholder.com/300', description: 'A healthy and refreshing meal with a smoky flavor.', time: 20, difficulty: 'Medium', servings: 2, ingredients: ['Chicken', 'Lettuce', 'Tomatoes', 'Cucumber'], instructions: ['Grill chicken', 'Chop vegetables', 'Toss everything together'] },
    { id: '3', title: 'Molten Chocolate Cake', image: 'https://via.placeholder.com/300', description: 'A decadent dessert with a gooey chocolate center.', time: 40, difficulty: 'Hard', servings: 6, ingredients: ['Chocolate', 'Flour', 'Eggs', 'Sugar'], instructions: ['Melt chocolate', 'Mix ingredients', 'Bake and serve'] },
  ];

  return recipes.find(recipe => recipe.id === id) || {};  // Return empty object if not found
};

const RecipeViewPage = () => {
  const { recipeId } = useParams();  // Retrieve recipeId from URL
  const recipe = getRecipeById(recipeId);  // Get recipe by ID
  
  if (!recipe.id) {
    // If no recipe is found, show a fallback message
    return (
      <div className="py-12 px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Recipe not found</h2>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img className="w-full h-80 object-cover" src={recipe.image} alt={recipe.title} />
        <div className="p-6">
          <h1 className="text-4xl font-bold text-gray-800">{recipe.title}</h1>
          <div className="mt-2 text-sm text-gray-500">
            <span>⏱️ {recipe.time} mins</span> | <span>{recipe.difficulty} | {recipe.servings} servings</span>
          </div>
          <p className="mt-4 text-lg text-gray-600">{recipe.description}</p>

          <h3 className="mt-6 text-2xl font-semibold text-gray-800">Ingredients</h3>
          <ul className="mt-2 list-disc list-inside text-gray-600">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h3 className="mt-6 text-2xl font-semibold text-gray-800">Instructions</h3>
          <ol className="mt-2 list-decimal list-inside text-gray-600">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeViewPage;

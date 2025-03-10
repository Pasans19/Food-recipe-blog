import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ image, title, description, time, difficulty, recipeId }) => {
  console.log("RecipeCard received recipeId:", recipeId); // Debugging Log

  return (
    <div className="max-w-md rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl hover:scale-105 transform transition-all duration-300 border border-gray-200">
      <img className="w-full h-56 object-cover" src={image} alt={title} />

      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm font-medium text-gray-500">⏱️ {time} mins</span>
          <span
            className={`text-xs font-medium px-3 py-1 rounded-full ${
              difficulty === 'Easy'
                ? 'bg-green-100 text-green-600'
                : difficulty === 'Medium'
                ? 'bg-yellow-100 text-yellow-600'
                : 'bg-red-100 text-red-600'
            }`}
          >
            {difficulty}
          </span>
        </div>

        {/* Prevent undefined error before calling toString() */}
        {recipeId !== undefined ? (
          <Link to={`/recipe/${recipeId.toString()}`}>
            <button className="mt-6 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-all">
              View Recipe
            </button>
          </Link>
        ) : (
          <p className="text-red-500 text-sm">Error: Recipe ID is missing!</p>
        )}
      </div>
    </div>
  );
};

export default RecipeCard;

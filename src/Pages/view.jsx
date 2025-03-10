import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../Components/Molecules/Navbar/navbar';
import Footer from '../Components/Molecules/Foter/foter';

// Sample Recipe Data
const recipeData = {
  1: {
    title: 'Classic Spaghetti Carbonara',
    image: 'https://cdn.pixabay.com/photo/2017/11/25/17/17/sandwich-2977251_1280.jpg',
    image: 'https://cdn.pixabay.com/photo/2017/11/25/17/17/sandwich-2977251_1280.jpg',
    description: 'A creamy Italian pasta dish with eggs, cheese, pancetta, and black pepper.',
    time: 30,
    difficulty: 'Easy',
    ingredients: [
      '200g spaghetti',
      '100g pancetta',
      '2 large eggs',
      '50g pecorino cheese',
      '50g parmesan cheese',
      'Freshly ground black pepper',
      'Salt to taste',
    ],
    
    instructions: [
      'Boil the pasta in salted water until al dente.',
      'In a separate pan, cook pancetta until crispy.',
      'Reserve about 1 cup of pasta water before draining.',
      'Whisk eggs with cheese and pepper in a bowl until smooth.',
      'Once pasta is drained, keep it hot by setting it aside in a bowl.',
      'Add the hot pasta to the crispy pancetta in the pan.',
      'Off heat, pour the egg mixture over the hot pasta and pancetta.',
      'Toss well to coat the pasta in the creamy egg sauce.',
      'Add reserved pasta water a little at a time to adjust the sauce consistency.',
      'Taste and adjust seasoning with more cheese or pepper, if desired.',
      'Serve immediately with extra cheese and freshly ground black pepper.'
    ]
    
  },
};

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = recipeData[Number(id)]; // Convert id to a number to match keys

  if (!recipe) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar /> {/* Navbar at the top */}
        <div className="flex-grow text-center mt-20">
          <h1 className="text-3xl font-bold text-red-500">🚫 Recipe Not Found!</h1>
          <p className="text-gray-600 mt-2">Oops! The recipe you're looking for doesn't exist.</p>
          <Link to="/">
            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-all">
              🔙 Go Back to Recipes
            </button>
          </Link>
        </div>
        <Footer /> {/* Footer at the bottom */}
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> {/* Navbar at the top */}
      <div className="flex-grow max-w-4xl mx-auto my-12 p-6 bg-white rounded-lg shadow-lg">
        <img className="w-full h-64 object-cover rounded-lg" src={recipe.image} alt={recipe.title} />

        <h1 className="text-4xl font-bold text-gray-800 mt-6">{recipe.title}</h1>
        <div className="flex justify-between text-gray-600 mt-2">
          <span>⏱️ {recipe.time} mins</span>
          <span
            className={`px-3 py-1 text-xs font-medium rounded-full ${
              recipe.difficulty === 'Easy'
                ? 'bg-green-100 text-green-600'
                : recipe.difficulty === 'Medium'
                ? 'bg-yellow-100 text-yellow-600'
                : 'bg-red-100 text-red-600'
            }`}
          >
            {recipe.difficulty}
          </span>
        </div>

        <h2 className="text-2xl font-semibold mt-6">🛒 Ingredients</h2>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mt-6">👨‍🍳 Instructions</h2>
        <ol className="list-decimal list-inside mt-2 text-gray-700">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="mt-1">{step}</li>
          ))}
        </ol>

        <div className="mt-6">
          <Link to="/">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-all">
              🔙 Back to Recipes
            </button>
          </Link>
        </div>
      </div>
      <Footer /> {/* Footer at the bottom */}
    </div>
  );
};

export default RecipeDetails;

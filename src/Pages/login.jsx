import React, { useState } from 'react';
import { FaUtensils } from 'react-icons/fa'; // Import food-related icon

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6 border border-orange-100">
          {/* Logo and Header */}
          <div className="text-center">
            <FaUtensils className="mx-auto h-12 w-12 text-orange-500 mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to RecipeHub!</h1>
            <p className="text-gray-600">Sign in to discover delicious recipes</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2.5 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-colors bg-orange-50/30"
                placeholder="chef@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2.5 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-colors bg-orange-50/30"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-orange-500 border-orange-300 rounded focus:ring-orange-400"
                />
                <label className="ml-2 text-sm text-gray-600">Keep me logged in</label>
              </div>
              <a href="#" className="text-sm text-orange-600 hover:text-orange-500 font-medium">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white py-3 rounded-lg hover:from-orange-500 hover:to-orange-600 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
            >
              Start Cooking
            </button>
          </form>

          <div className="text-center text-sm text-gray-500">
            New to RecipeHub?{' '}
            <a href="/signup" className="text-orange-600 hover:text-orange-500 font-medium">
              Create an account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
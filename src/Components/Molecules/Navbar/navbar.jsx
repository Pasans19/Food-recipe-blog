import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Use React Router for navigation

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`Searching for: ${searchQuery}`);
    // Implement your search logic here
  };

  return (
    <nav className="bg-gray-900 shadow-lg p-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white text-3xl font-bold">
              🍽️ RecipeBlog
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <form onSubmit={handleSearch} className="flex">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-72 p-2 rounded-l-md border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-5 rounded-r-md hover:bg-orange-600 focus:outline-none"
                >
                  Search
                </button>
              </form>
            </div>
            <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-lg font-medium transition-all duration-300">Home</Link>
            <Link to="/#recipes" className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-lg font-medium transition-all duration-300">Recipes</Link>
            <Link to="/#blog" className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-lg font-medium transition-all duration-300">Blog</Link>
            <Link to="/#contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-lg font-medium transition-all duration-300">Contact</Link>
            <Link to="/signin" className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-lg font-medium transition-all duration-300">Signin</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="bg-orange-500 p-3 rounded-md text-white hover:bg-orange-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-3 space-y-3">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 rounded-l-md border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-orange-500"
            />
            <button type="submit" className="bg-orange-500 text-white px-5 rounded-r-md hover:bg-orange-600 focus:outline-none">Search</button>
          </form>
          <Link to="/" className="block text-gray-300 px-4 py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white transition-all duration-300">Home</Link>
          <Link to="/#recipes" className="block text-gray-300 px-4 py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white transition-all duration-300">Recipes</Link>
          <Link to="/#blog" className="block text-gray-300 px-4 py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white transition-all duration-300">Blog</Link>
          <Link to="/#contact" className="block text-gray-300 px-4 py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white transition-all duration-300">Contact</Link>
          <Link to="/signin" className="block text-gray-300 px-4 py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white transition-all duration-300">Signin</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
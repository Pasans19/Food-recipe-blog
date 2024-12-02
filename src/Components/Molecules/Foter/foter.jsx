import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 px-6">
        <div>
          <h3 className="font-bold text-lg">About RecipeBlog</h3>
          <p className="mt-2 text-gray-400">
            RecipeBlog is your go-to platform for discovering, sharing, and creating new recipes.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-orange-500">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-orange-500">Recipes</a></li>
            <li><a href="#" className="text-gray-400 hover:text-orange-500">Blog</a></li>
            <li><a href="#" className="text-gray-400 hover:text-orange-500">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg">Follow Us</h3>
          <div className="mt-2 space-x-4">
            <a href="#" className="text-gray-400 hover:text-orange-500">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-orange-500">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-orange-500">Instagram</a>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-500 mt-8">© 2024 RecipeBlog. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

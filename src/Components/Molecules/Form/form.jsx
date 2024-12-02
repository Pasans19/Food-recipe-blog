import React, { useState } from 'react';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <div className="bg-orange-100 py-12">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-3xl font-bold text-orange-500 mb-4">Stay Updated!</h2>
        <p className="text-gray-700 mb-6">Subscribe to our newsletter for the latest recipes and tips.</p>
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-lg border border-gray-300 flex-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <button
            type="submit"
            className="p-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionForm;

import React from 'react';

const Testimonials = () => {
  const feedbacks = [
    {
      name: 'Jane Doe',
      feedback: 'This blog has transformed my cooking skills. The recipes are easy to follow and absolutely delicious!',
      avatar: 'https://via.placeholder.com/100.png?text=Jane',
    },
    {
      name: 'John Smith',
      feedback: 'I found unique recipes here that I couldn’t find anywhere else. Highly recommended!',
      avatar: 'https://via.placeholder.com/100.png?text=John',
    },
    {
      name: 'Emily Brown',
      feedback: 'Perfect for anyone who loves to cook and experiment in the kitchen. Amazing community!',
      avatar: 'https://via.placeholder.com/100.png?text=Emily',
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">What Our Readers Say</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 px-6">
        {feedbacks.map((feedback, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img src={feedback.avatar} alt={feedback.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
            <p className="italic text-gray-700">"{feedback.feedback}"</p>
            <h3 className="mt-4 text-orange-500 font-semibold">{feedback.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

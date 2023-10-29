import React from 'react';

const Pricing = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Premium Pricing</h2>
        <p className="text-gray-600 mb-8">Choose a plan that fits your needs.</p>
        <div className="flex justify-center space-x-8">
          {/* Monthly Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8 w-1/3">
            <h3 className="text-2xl font-semibold text-gray-800">Monthly</h3>
            <p className="text-gray-600 mb-4">Billed Monthly</p>
            <p className="text-3xl font-semibold text-indigo-600">$10</p>
            <p className="text-gray-600 mt-4">Access to premium features</p>
            <button className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">Get Started</button>
          </div>

          {/* Yearly Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8 w-1/3">
            <h3 className="text-2xl font-semibold text-gray-800">Yearly</h3>
            <p className="text-gray-600 mb-4">Billed Annually</p>
            <p className="text-3xl font-semibold text-indigo-600">$100</p>
            <p className="text-gray-600 mt-4">Access to premium features</p>
            <button className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

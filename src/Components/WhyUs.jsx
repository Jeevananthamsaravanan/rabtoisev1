import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const WhyUs = () => {
  return (
    <section className="bg-gray-100 py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl satoshi-black text-center text-gray-900 mb-8">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 satoshi-variable sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center">
            <FaCheckCircle className="text-4xl text-green-500 mb-2" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Quality Service
            </h3>
            <p className="text-gray-700 text-center">
              We provide top-notch service to ensure customer satisfaction.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaCheckCircle className="text-4xl text-green-500 mb-2" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-700 text-center">
              Our delivery process is quick and efficient, saving you time.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaCheckCircle className="text-4xl text-green-500 mb-2" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Affordable Prices
            </h3>
            <p className="text-gray-700 text-center">
              We offer competitive prices without compromising quality.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaCheckCircle className="text-4xl text-green-500 mb-2" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Exceptional Support
            </h3>
            <p className="text-gray-700 text-center">
              Our support team is available 24/7 to assist you with any queries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

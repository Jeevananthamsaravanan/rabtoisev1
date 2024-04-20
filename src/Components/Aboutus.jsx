import React from 'react';
import { FaUsers } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section className="bg-gray-100  py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10 mb-8 md:mb-0">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <img src='./aboutus.webp'/>
            </div>
          </div>
          <div className="md:w-1/2 text-center md:text-start">
            <h2 className="text-3xl  satoshi-bold text-gray-800 mb-4">About Rabtoise</h2>
            <p className="text-gray-600 satoshi-regular leading-relaxed">
              Rabtoise is a premier website and web app development company, dedicated to providing top-notch solutions tailored to meet our clients' needs. With a team of experienced developers and designers, we strive to deliver cutting-edge digital products that drive businesses forward.
            </p>
            <p className="text-gray-600 satoshi-regular leading-relaxed mt-4">
              Our mission is to empower businesses by leveraging the latest technologies and trends in web development. We specialize in creating responsive and user-friendly websites and applications that leave a lasting impression on users.
            </p>
            <div className="mt-6">
              <a href="#services" className="text-blue-500 satoshi-bold hover:underline">Learn more about our services</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

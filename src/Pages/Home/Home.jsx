import React from "react";
import { BsFillRocketTakeoffFill, BsLightningChargeFill } from "react-icons/bs";
import { MdConnectWithoutContact } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { TbApiApp } from "react-icons/tb";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-100 rounded-full">
            <span>New Feature: API Integration Live</span>
                  <BsLightningChargeFill />
         </div>
        
        <h1 className="flex flex-col md:flex-row items-center justify-center gap-2 text-4xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
  <span>Welcome to</span>
  <span className="text-blue-600 flex items-center gap-2">
    My Project 
    <BsFillRocketTakeoffFill className="text-3xl md:text-6xl" />
  </span>
</h1>

        <p className="max-w-2xl text-gray-600 text-lg md:text-xl mb-10 leading-relaxed">
          The ultimate platform to manage your contacts and explore powerful APIs. 
          Streamline your workflow with our modern, fast, and secure interface.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300"
          >
            Get Started
          </Link>
          <Link
            to="/"
            className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 shadow-sm hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Grid (Extra Professional Touch) */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<MdConnectWithoutContact className="text-blue-600" />}
              title="Contact Management" 
              desc="Easily store and manage all your professional contacts in one place."
            />
            <FeatureCard 
              icon={<TbApiApp className="text-blue-600" />} 
              title="Powerful API" 
              desc="Integrate our robust API system directly into your existing workflow."
            />
            <FeatureCard 
              icon={<RiSecurePaymentFill className="text-blue-600"/>} 
              title="Secure Data" 
              desc="Your information is protected with industry-standard security protocols."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

// Reusable Feature Component
const FeatureCard = ({ icon, title, desc }) => (
  <div className="p-8 border border-gray-100 rounded-2xl bg-gray-50 hover:shadow-xl transition-shadow duration-300">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{desc}</p>
  </div>
);

export default Home;
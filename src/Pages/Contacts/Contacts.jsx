import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { BiCheckCircle, BiEnvelope, BiUser, BiMessageDetail } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
import toast, { Toaster } from 'react-hot-toast';

const Contacts = () => {
  const navigate = useNavigate();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ mode: "onSubmit" });

  const onSubmit = (data) => {
    setSubmittedData(data); 
    toast.success("Message sent successfully!");
    setShowSuccessModal(true); 
  };

  const handleGoHome = () => {
    setShowSuccessModal(false);
    reset(); 
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <Toaster position="top-center" />
      
      <div className="max-w-md mx-auto bg-white p-8 rounded-[32px] shadow-xl border border-gray-100">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <BiEnvelope size={32} />
          </div>
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">Contact Us</h2>
          <p className="text-gray-500 mt-2">We'd love to hear from you</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          {/* Name Field */}
          <div className="relative">
            <label htmlFor="name" className="text-sm font-bold text-gray-700 ml-1 mb-2 block">Full Name</label>
            <div className="relative">
              <BiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                {...register("name", { 
                  required: "Full name is required",
                  pattern: { value: /^[A-Za-z\s]+$/, message: "Only alphabets are allowed" }
                })}
                className={`pl-11 pr-4 py-4 border ${errors.name ? "border-red-500 ring-4 ring-red-50" : "border-gray-200 focus:ring-4 focus:ring-blue-50"} rounded-2xl outline-none w-full transition-all`}
              />
            </div>
            {errors.name && <span className="text-red-500 text-xs font-bold mt-1 ml-2">{errors.name.message}</span>}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="text-sm font-bold text-gray-700 ml-1 mb-2 block">Email Address</label>
            <div className="relative">
              <BiEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              <input
                id="email"
                type="email"
                placeholder="example@mail.com"
                {...register("email", {
                  required: "Email is required!",
                  pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email format!" }
                })}
                className={`pl-11 pr-4 py-4 border ${errors.email ? "border-red-500 ring-4 ring-red-50" : "border-gray-200 focus:ring-4 focus:ring-blue-50"} rounded-2xl outline-none w-full transition-all`}
              />
            </div>
            {errors.email && <span className="text-red-500 text-xs font-bold mt-1 ml-2">{errors.email.message}</span>}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="text-sm font-bold text-gray-700 ml-1 mb-2 block">Your Message</label>
            <div className="relative">
              <BiMessageDetail className="absolute left-4 top-4 text-gray-400 text-xl" />
              <textarea
                id="message"
                placeholder="How can we help?"
                rows="4"
                {...register("message", { required: "Message cannot be empty!" })}
                className={`pl-11 pr-4 py-4 border ${errors.message ? "border-red-500 ring-4 ring-red-50" : "border-gray-200 focus:ring-4 focus:ring-blue-50"} rounded-2xl outline-none w-full transition-all`}
              ></textarea>
            </div>
            {errors.message && <span className="text-red-500 text-xs font-bold mt-1 ml-2">{errors.message.message}</span>}
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold hover:bg-blue-600 active:scale-95 transition-all shadow-xl mt-2"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* --- SUCCESS MODAL --- */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300"></div>
          
          <div className="relative bg-white w-full max-w-sm rounded-[40px] p-10 shadow-2xl text-center animate-in zoom-in duration-300">
            <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
              <BiCheckCircle size={60} />
            </div>
            
            <h3 className="text-2xl font-black text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Hey <span className="font-bold text-gray-800">{submittedData?.name}</span>, your message has been received. We'll get back to you soon!
            </p>

            <button 
              onClick={handleGoHome}
              className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-green-600 transition-all shadow-lg"
            >
              Go to Home Page
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contacts;
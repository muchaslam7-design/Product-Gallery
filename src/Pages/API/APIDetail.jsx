import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const APIDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        console.log(res.data)
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetail();
  }, [id]);

  if (!product) return <h2 className="p-6">Loading...</h2>;
  // 🔹 Discount calculation (20% off)
  const discountPercent = 20;
  const oldPrice = product.price;
  const discountedPrice = (oldPrice - (oldPrice * discountPercent) / 100).toFixed(2);

  return (
    <div className="p-6">
      <Link to="/api" className="text-blue-500 underline">⬅ Back</Link>

      <div className="flex gap-6 mt-6 bg-gray-100 p-6 rounded-lg shadow">
        <img
          src={product.image}
          alt={product.title}
          className="w-80 h-80 object-cover rounded-lg"
        />
        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-600 mt-2">{product.category}</p>
          <h2 className="text-xl text-green-600 mt-4">${product.price}</h2>
          

           {/* 🔹 Price with discount */}
          <div className="mt-4">
            <span className="text-gray-500 line-through text-lg mr-3">
              ${oldPrice}
            </span>
            <span className="text-green-600 text-2xl font-bold">
              ${discountedPrice}
            </span>
            <span className="ml-2 text-red-500 text-sm">
              (-{discountPercent}% OFF)
            </span>
          </div>

          <p className="mt-4">{product.description}</p>

          {/* 🔹 Rating UI */}
          <div className="mt-4">
            <span className="text-yellow-500 text-xl">★</span>
            <span className="text-yellow-500 text-xl">★</span>
            <span className="text-yellow-500 text-xl">★</span>
            <span className="text-yellow-500 text-xl">★</span>
            <span className="text-gray-400 text-xl">★</span>
            <p className="text-sm text-gray-500 mt-1">
              {product.rating?.rate} / 5 ({product.rating?.count} reviews)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIDetail;

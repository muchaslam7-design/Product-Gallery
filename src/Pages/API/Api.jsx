import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BiSearchAlt, BiCartAlt, BiPlus, BiMinus } from 'react-icons/bi'; 
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import toast, { Toaster } from 'react-hot-toast';

const Api = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const itemsPerPage = 6

  // ✅ Fixed useEffect Logic
  useEffect(() => {
    const fetchData = async () => {
      // Agar internet nahi hai toh fetch na karein
      if (!window.navigator.onLine) {
         toast.error("Offline: Cannot load products", { id: 'api-error' });
         return;
      }

      setLoading(true);
      try {
        const res = await axios.get('https://fakestoreapi.com/products');
        setProducts(res.data);
      } catch (error) {
        toast.error("Failed to fetch products!", { id: 'api-error' }); 
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    const handleOnline = () => {
      setIsOnline(true);
      toast.success("Back Online!", { id: 'status-toast', icon: '🌐' });
      fetchData(); // Net aane par data dobara mangwayein
    };

    const handleOffline = () => {
      setIsOnline(false);
      toast.error("You are currently offline!", { id: 'status-toast', icon: '📡' });
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setQuantity(1); 
    setIsModalOpen(true);
  };

  const handleConfirmAdd = () => {
    toast.success(`${quantity} Item(s) added to bag!`, {
      style: { borderRadius: '15px', background: '#1e293b', color: '#fff' },
      iconTheme: { primary: '#3b82f6', secondary: '#fff' },
    });
    setIsModalOpen(false);
  };

  const filteredProducts = (products || []).filter((item) => {
    const title = item.title || ''
    const matchesSearch = title.toLowerCase().includes(search.toLowerCase())
    let matchesCategory = category === 'all' || item.category === category
    return matchesSearch && matchesCategory
  })

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / itemsPerPage))
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 min-h-screen bg-gray-50">
      <Toaster position="bottom-right" />

      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">Marketplace</h2>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white border border-gray-100 rounded-full shadow-sm mt-1">
               <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-red-500 animate-pulse'}`}></div>
               <span className={`text-[10px] font-bold uppercase tracking-wider ${isOnline ? 'text-green-600' : 'text-red-600'}`}>
                 {isOnline ? 'Online' : 'Offline'}
               </span>
            </div>
          </div>
          <p className="text-gray-500 mt-1">Discover our latest premium products</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative group">
            <BiSearchAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl group-focus-within:text-blue-500 transition-colors" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-3 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 outline-none w-full md:w-64 shadow-sm bg-white transition-all"
            />
          </div>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-3 border border-gray-200 rounded-2xl bg-white shadow-sm outline-none focus:ring-4 focus:ring-blue-100 transition-all cursor-pointer"
          >
            <option value="all">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
        </div>
      </div>

      {/* No Connection Alert */}
      {!isOnline && products.length === 0 && (
         <div className="flex flex-col items-center justify-center h-80 text-center animate-in fade-in duration-500">
            <div className="text-6xl mb-4">📡</div>
            <h3 className="text-xl font-bold text-gray-800">No Connection</h3>
            <p className="text-gray-500 max-w-xs">Please check your internet settings to load products.</p>
         </div>
      )}

      {loading ? (
        <div className="flex flex-col items-center justify-center h-80">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          {products.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {paginatedProducts.map((data) => (
                <div key={data.id} className="group bg-white rounded-3xl p-5 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col relative">
                  <Link to={`/product/${data.id}`} className="h-64 mb-6 overflow-hidden rounded-2xl flex items-center justify-center bg-white">
                    <img src={data.image} alt={data.title} className="h-48 w-48 object-contain group-hover:scale-110 transition-transform duration-500" />
                  </Link>
                  <div className="flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md uppercase tracking-widest">{data.category}</span>
                      <span className="text-xl font-bold text-gray-900">${data.price}</span>
                    </div>
                    <h3 className="font-bold text-gray-800 line-clamp-2 mb-4 leading-snug">{data.title}</h3>
                    <button 
                      onClick={() => handleOpenModal(data)}
                      className="mt-auto flex items-center justify-center gap-2 w-full bg-gray-900 text-white py-4 rounded-2xl font-bold hover:bg-blue-600 active:scale-95 transition-all shadow-lg"
                    >
                      <BiCartAlt className="text-xl" /> Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && products.length > 0 && (
            <div className="mt-20 flex justify-center pb-10">
                <div className="flex items-center bg-white p-1.5 rounded-2xl shadow-sm border border-gray-100">
                  <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)} className="p-2.5 rounded-xl hover:bg-gray-50 disabled:opacity-20"><HiOutlineChevronLeft size={24}/></button>
                  <div className="flex gap-1 px-2">
                    {[...Array(totalPages)].map((_, i) => (
                        <button key={i} onClick={() => setCurrentPage(i + 1)} className={`w-10 h-10 rounded-xl font-bold ${currentPage === i+1 ? 'bg-blue-600 text-white' : 'text-gray-500'}`}>{i+1}</button>
                    ))}
                  </div>
                  <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)} className="p-2.5 rounded-xl hover:bg-gray-50 disabled:opacity-20"><HiOutlineChevronRight size={24}/></button>
                </div>
            </div>
          )}
        </>
      )}

      {/* Modal Section */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative bg-white w-full max-w-md rounded-[32px] p-8 shadow-2xl animate-in zoom-in duration-300">
             <button onClick={() => setIsModalOpen(false)} className="absolute right-6 top-6 p-2 hover:bg-gray-100 rounded-full"><IoMdClose size={24} /></button>
             <div className="text-center">
                <img src={selectedProduct.image} className="w-24 h-24 object-contain mx-auto mb-4" alt="" />
                <h3 className="text-xl font-bold mb-6">Select Quantity</h3>
                <div className="flex items-center justify-center gap-8 mb-8">
                   <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-12 h-12 rounded-full border-2 flex items-center justify-center hover:border-blue-500"><BiMinus/></button>
                   <span className="text-3xl font-black">{quantity}</span>
                   <button onClick={() => setQuantity(q => q + 1)} className="w-12 h-12 rounded-full border-2 flex items-center justify-center hover:border-blue-500"><BiPlus/></button>
                </div>
                <button onClick={handleConfirmAdd} className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all flex justify-between px-8">
                   <span>Confirm Order</span>
                   <span>${(selectedProduct.price * quantity).toFixed(2)}</span>
                </button>
             </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Api;
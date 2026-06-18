import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import Loader from '../components/Loader';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  const [active,setActive] = useState(0)
  const categories = [
  "beauty",
  "fragrances",
  "furniture",
  "groceries",

]


  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://dummyjson.com/products`);
      const data = await res.json();
      setProducts(data.products);
      setFilteredProducts(data.products); 
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = (category,index) => {
    setCategory(category);
    setActive(index)
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.category === category));
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (products.length === 0) {
    return <p>Please connect to the internet.</p>;
  }

  return (
    <section className='min-h-screen w-full pt-24'>
     
      <div className="container p-5 mx-auto">
      {/* Page Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Products</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Explore our carefully curated collection of premium products</p>
      </div>

      {/* Category Filter */}
      <div className='flex gap-3 items-center justify-start overflow-x-auto mb-12 pb-3 px-2 -mx-2'>
        <button 
          key="all" 
          className={`px-6 py-2 rounded-full min-w-fit font-semibold transition-all duration-300 transform hover:scale-105 ${
            active === -1 
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50' 
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }` }
          onClick={() => handleClick('All', -1)}
        >
          All Products
        </button>
        {categories.map((category, index) => (
          <button 
            key={index} 
            className={`px-6 py-2 rounded-full min-w-fit font-semibold transition-all duration-300 transform hover:scale-105 capitalize ${
              index === active 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50' 
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }` }
            onClick={() => handleClick(category, index)}
          >
            {category}
          </button>
        ))}
      </div>
        <div className="flex flex-wrap -m-4">
          {filteredProducts?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

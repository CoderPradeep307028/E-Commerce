import React from 'react'
import img from "/cart.png"
import { Link } from 'react-router-dom'
const Hero = () => {
    return (
        <section className="relative overflow-hidden pt-24 pb-12">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
            <div className="absolute top-0 -left-1/2 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 -right-1/2 w-full h-full bg-gradient-to-l from-purple-500/10 to-pink-500/10 blur-3xl rounded-full"></div>
            
            <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col-reverse items-center relative z-10 gap-8">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center animate-fade-in-up">
                    <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-300/30 backdrop-blur-sm">
                        <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Welcome to Our Store</span>
                    </div>
                    <h1 className="sm:text-5xl text-4xl mb-6 font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-white dark:via-blue-400 dark:to-purple-400">
                        Discover Amazing Products
                    </h1>
                    <p className="mb-8 leading-relaxed text-gray-600 dark:text-gray-300 text-lg max-w-xl">
                        Explore our curated collection of high-quality products. From fashion to electronics, find everything you need in one place.
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <Link className="inline-flex text-white bg-gradient-to-r from-blue-600 to-blue-700 py-3 px-8 rounded-lg text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300" to={"/products"}>
                            Shop Now
                        </Link>
                        <Link className="inline-flex text-white bg-gradient-to-r from-purple-600 to-purple-700 py-3 px-8 rounded-lg text-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300" to={"/cart"}>
                            View Cart
                        </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/3 w-full" id='hero-img'>
                    <div className="relative animate-float">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-30"></div>
                        <img
                            className="object-cover object-center rounded-2xl p-5 relative z-10 hover:shadow-2xl transition-shadow duration-300"
                            alt="hero"
                            src={img}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
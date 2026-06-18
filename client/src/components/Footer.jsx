

import { CiShoppingCart, CiMail } from 'react-icons/ci';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-gray-200 dark:border-gray-800 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden"></div>
      
      <div className="container mx-auto px-5 py-12 relative z-10">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <CiShoppingCart size={28} className="text-blue-600" />
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Store</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Your one-stop shop for quality products and amazing deals.</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/products" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Products</a></li>
              <li><a href="/cart" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Cart</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Return Policy</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center hover:from-gray-800 hover:to-black text-gray-700 dark:text-gray-300 hover:text-white transition-all transform hover:scale-110">
                <FaGithub size={18} />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center hover:from-blue-600 hover:to-blue-700 text-gray-700 dark:text-gray-300 hover:text-white transition-all transform hover:scale-110">
                <FaLinkedin size={18} />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center hover:from-blue-400 hover:to-blue-500 text-gray-700 dark:text-gray-300 hover:text-white transition-all transform hover:scale-110">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center hover:from-red-500 hover:to-red-600 text-gray-700 dark:text-gray-300 hover:text-white transition-all transform hover:scale-110">
                <CiMail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Store. All Rights Reserved.</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 md:mt-0">Developed with ❤️ by <a href="https://my-portfolio-theta-woad.vercel.app/" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noreferrer">Pradeep Suthar</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
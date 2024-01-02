import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">My Store</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-gray-300">
                Products
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300">
                About
              </a>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

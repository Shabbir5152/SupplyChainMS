import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Supply Chain Management Dashboard</h1>
        </div>
      </header>

      <div className="flex flex-1">

        <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
          <nav>
            <ul>
              <li className='className="block py-2 px-4 font-extrabold'>Portals</li>
              <li><Link to="/products" className="block py-2 px-4 hover:bg-gray-700 rounded">Products</Link></li>
              <li><Link to="/suppliers" className="block py-2 px-4 hover:bg-gray-700 rounded">Suppliers</Link></li>
              <li><Link to="/warehouses" className="block py-2 px-4 hover:bg-gray-700 rounded">Warehouses</Link></li>
              <li><Link to="/inventory" className="block py-2 px-4 hover:bg-gray-700 rounded">Inventory</Link></li>
              <li><Link to="/orders" className="block py-2 px-4 hover:bg-gray-700 rounded">Orders</Link></li>
              <li><Link to="/alerts" className="block py-2 px-4 hover:bg-gray-700 rounded">Alerts</Link></li>
            </ul>
          </nav>
        </aside>

        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>

      <footer className="bg-blue-600 text-white p-4">
        <div className="text-center">© 2024 Company Name. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Layout;

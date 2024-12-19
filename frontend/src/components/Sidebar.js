// import React from 'react';
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <h2>Supply Chain MS</h2>
//       <ul>
//         <li><Link to="/orders">Orders</Link></li>
//         <li><Link to="/products">Products</Link></li>
//         <li><Link to="/suppliers">Suppliers</Link></li>
//         <li><Link to="/warehouses">Warehouses</Link></li>
//         <li><Link to="/inventory">Inventory</Link></li>
//         <li><Link to="/alerts">Alerts</Link></li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-full p-5">
      <h2 className="text-2xl font-semibold text-teal-400 mb-6">SupplyChainMS</h2>
      <nav>
        <ul>
          <li>
            <Link to="/orders" className="block py-2 px-4 rounded hover:bg-teal-500">
              Orders
            </Link>
          </li>
          <li>
            <Link to="/products" className="block py-2 px-4 rounded hover:bg-teal-500">
              Products
            </Link>
          </li>
          <li>
            <Link to="/suppliers" className="block py-2 px-4 rounded hover:bg-teal-500">
              Suppliers
            </Link>
          </li>
          <li>
            <Link to="/inventory" className="block py-2 px-4 rounded hover:bg-teal-500">
              Inventory
            </Link>
          </li>
          <li>
            <Link to="/warehouses" className="block py-2 px-4 rounded hover:bg-teal-500">
              Warehouses
            </Link>
          </li>
          <li>
            <Link to="/alerts" className="block py-2 px-4 rounded hover:bg-teal-500">
              Alerts
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

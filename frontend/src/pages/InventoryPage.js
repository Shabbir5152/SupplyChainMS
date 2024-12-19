// import React, { useEffect, useState } from 'react';
// import { getInventory, addInventory, updateInventory } from '../services/inventoryService';

// const InventoryPage = () => {
//   const [inventory, setInventory] = useState([]);
//   const [newItem, setNewItem] = useState({ WarehouseID: '', ProductID: '', Stock: '', LowStockThreshold: '' });

//   useEffect(() => {
//     fetchInventory();
//   }, []);

//   const fetchInventory = async () => {
//     const data = await getInventory();
//     setInventory(data);
//   };

//   const handleAddInventory = async (e) => {
//     e.preventDefault();
//     await addInventory(newItem);
//     setNewItem({ WarehouseID: '', ProductID: '', Stock: '', LowStockThreshold: '' });
//     fetchInventory();
//   };

//   const handleUpdateStock = async (id, stock, threshold) => {
//     await updateInventory(id, { Stock: stock, LowStockThreshold: threshold });
//     fetchInventory();
//   };

//   return (
//     <div>
//       <h1>Inventory</h1>
//       <form onSubmit={handleAddInventory}>
//         <input
//           type="text"
//           placeholder="Warehouse ID"
//           value={newItem.WarehouseID}
//           onChange={(e) => setNewItem({ ...newItem, WarehouseID: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Product ID"
//           value={newItem.ProductID}
//           onChange={(e) => setNewItem({ ...newItem, ProductID: e.target.value })}
//         />
//         <input
//           type="number"
//           placeholder="Stock"
//           value={newItem.Stock}
//           onChange={(e) => setNewItem({ ...newItem, Stock: e.target.value })}
//         />
//         <input
//           type="number"
//           placeholder="Low Stock Threshold"
//           value={newItem.LowStockThreshold}
//           onChange={(e) => setNewItem({ ...newItem, LowStockThreshold: e.target.value })}
//         />
//         <button type="submit">Add Item</button>
//       </form>
//       <table>
//         <thead>
//           <tr>
//             <th>Inventory ID</th>
//             <th>Warehouse</th>
//             <th>Product</th>
//             <th>Stock</th>
//             <th>Low Stock Threshold</th>
//           </tr>
//         </thead>
//         <tbody>
//           {inventory.map((item) => (
//             <tr key={item.InventoryID}>
//               <td>{item.InventoryID}</td>
//               <td>{item.WarehouseName}</td>
//               <td>{item.ProductName}</td>
//               <td>
//                 {item.Stock}{' '}
//                 <button onClick={() => handleUpdateStock(item.InventoryID, item.Stock + 1, item.LowStockThreshold)}>
//                   Restock
//                 </button>
//               </td>
//               <td>{item.LowStockThreshold}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default InventoryPage;

import React, { useEffect, useState } from 'react';
import { getInventory, addInventory, updateInventory } from '../services/inventoryService';

const InventoryPage = () => {
  const [inventory, setInventory] = useState([]);
  const [newItem, setNewItem] = useState({ WarehouseID: '', ProductID: '', Stock: '', LowStockThreshold: '' });

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    const data = await getInventory();
    setInventory(data);
  };

  const handleAddInventory = async (e) => {
    e.preventDefault();
    await addInventory(newItem);
    setNewItem({ WarehouseID: '', ProductID: '', Stock: '', LowStockThreshold: '' });
    fetchInventory();
  };

  const handleUpdateStock = async (id, stock, threshold) => {
    await updateInventory(id, { Stock: stock, LowStockThreshold: threshold });
    fetchInventory();
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Inventory</h1>
      <form onSubmit={handleAddInventory} className="mb-6 space-y-4">
        <input
          type="text"
          placeholder="Warehouse ID"
          value={newItem.WarehouseID}
          onChange={(e) => setNewItem({ ...newItem, WarehouseID: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          placeholder="Product ID"
          value={newItem.ProductID}
          onChange={(e) => setNewItem({ ...newItem, ProductID: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="number"
          placeholder="Stock"
          value={newItem.Stock}
          onChange={(e) => setNewItem({ ...newItem, Stock: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="number"
          placeholder="Low Stock Threshold"
          value={newItem.LowStockThreshold}
          onChange={(e) => setNewItem({ ...newItem, LowStockThreshold: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-lg">Add Item</button>
      </form>

      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left text-gray-600">Inventory ID</th>
            <th className="px-4 py-2 text-left text-gray-600">Warehouse</th>
            <th className="px-4 py-2 text-left text-gray-600">Product</th>
            <th className="px-4 py-2 text-left text-gray-600">Stock</th>
            <th className="px-4 py-2 text-left text-gray-600">Low Stock Threshold</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.InventoryID} className="border-t border-gray-200">
              <td className="px-4 py-2 text-gray-700">{item.InventoryID}</td>
              <td className="px-4 py-2 text-gray-700">{item.WarehouseName}</td>
              <td className="px-4 py-2 text-gray-700">{item.ProductName}</td>
              <td className="px-4 py-2 text-gray-700">
                <button
                  onClick={() => handleUpdateStock(item.InventoryID, item.Stock - 1, item.LowStockThreshold)}
                  className="mr-2 px-4 py-2 bg-red-500 text-white rounded-full font-semibold"
                >
                  -
                </button>
                {' '}{item.Stock}{' '}
                <button
                  onClick={() => handleUpdateStock(item.InventoryID, item.Stock + 1, item.LowStockThreshold)}
                  className="ml-2 px-4 py-2 bg-green-500 text-white rounded-full"
                >
                  +
                </button>
              </td>
              <td className="px-4 py-2 text-gray-700">{item.LowStockThreshold}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryPage;

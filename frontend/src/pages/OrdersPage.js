// import React, { useEffect, useState } from 'react';
// import { getOrders, addOrder } from '../services/ordersService';

// const OrdersPage = () => {
//   const [orders, setOrders] = useState([]);
//   const [newOrder, setNewOrder] = useState({ CustomerName: '', WarehouseID: '', DeliveryDate: '' });

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     const data = await getOrders();
//     setOrders(data);
//   };

//   const handleAddOrder = async (e) => {
//     e.preventDefault();
//     await addOrder(newOrder);
//     setNewOrder({ CustomerName: '', WarehouseID: '', DeliveryDate: '' });
//     fetchOrders();
//   };

//   return (
//     <div>
//       <h1>Orders</h1>
//       <form onSubmit={handleAddOrder}>
//         <input
//           type="text"
//           placeholder="Customer Name"
//           value={newOrder.CustomerName}
//           onChange={(e) => setNewOrder({ ...newOrder, CustomerName: e.target.value })}
//         />
//         <button type="submit">Add Order</button>
//       </form>
//       <table>
//         <thead>
//           <tr>
//             <th>OrderID</th>
//             <th>Customer Name</th>
//             <th>Order Date</th>
//             <th>Delivery Date</th>
//             <th>Status</th>
//             <th>WarehouseID</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order) => (
//             <tr key={order.OrderID}>
//               <td>{order.OrderID}</td>
//               <td>{order.CustomerName}</td>
//               <td>{order.OrderDate}</td>
//               <td>{order.DeliveryDate}</td>
//               <td>{order.Status}</td>
//               <td>{order.WarehouseID}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default OrdersPage;

import React, { useEffect, useState } from 'react';
import { getOrders, addOrder } from '../services/ordersService';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({ CustomerName: '', WarehouseID: '', DeliveryDate: '' });

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const data = await getOrders();
    setOrders(data);
  };

  const handleAddOrder = async (e) => {
    e.preventDefault();
    await addOrder(newOrder);
    setNewOrder({ CustomerName: '', WarehouseID: '', DeliveryDate: '' });
    fetchOrders();
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Orders</h1>
      <form onSubmit={handleAddOrder} className="mb-6 space-y-4">
        <input
          type="text"
          placeholder="Customer Name"
          value={newOrder.CustomerName}
          onChange={(e) => setNewOrder({ ...newOrder, CustomerName: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />

        <input
          type="text"
          placeholder="Warehouse ID"
          value={newOrder.WarehouseID}
          onChange={(e) => setNewOrder({ ...newOrder, WarehouseID: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />

        <input
          type="date"
          placeholder="Delivery Date"
          value={newOrder.DeliveryDate}
          onChange={(e) => setNewOrder({ ...newOrder, DeliveryDate: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-lg">Add Order</button>
      </form>

      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left text-gray-600">OrderID</th>
            <th className="px-4 py-2 text-left text-gray-600">Customer Name</th>
            <th className="px-4 py-2 text-left text-gray-600">Order Date</th>
            <th className="px-4 py-2 text-left text-gray-600">Delivery Date</th>
            <th className="px-4 py-2 text-left text-gray-600">Status</th>
            <th className="px-4 py-2 text-left text-gray-600">WarehouseID</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.OrderID} className="border-t border-gray-200">
              <td className="px-4 py-2 text-gray-700">{order.OrderID}</td>
              <td className="px-4 py-2 text-gray-700">{order.CustomerName}</td>
              <td className="px-4 py-2 text-gray-700">{new Date(order.OrderDate).toLocaleDateString()}</td>
              <td className="px-4 py-2 text-gray-700">{new Date(order.DeliveryDate).toLocaleDateString()}</td>
              <td className="px-4 py-2 text-gray-700">{order.Status}</td>
              <td className="px-4 py-2 text-gray-700">{order.WarehouseID}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;

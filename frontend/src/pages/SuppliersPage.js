// import React, { useEffect, useState } from 'react';
// import { getSuppliers, addSupplier, updateSupplier, deleteSupplier } from '../services/suppliersService';

// const SuppliersPage = () => {
//   const [suppliers, setSuppliers] = useState([]);
//   const [newSupplier, setNewSupplier] = useState({ Name: '', ContactDetails: '', Email: '' });

//   useEffect(() => {
//     fetchSuppliers();
//   }, []);

//   const fetchSuppliers = async () => {
//     const data = await getSuppliers();
//     setSuppliers(data);
//   };

//   const handleAddSupplier = async (e) => {
//     e.preventDefault();
//     await addSupplier(newSupplier);
//     setNewSupplier({ Name: '', ContactDetails: '', Email: '' });
//     fetchSuppliers();
//   };

//   const handleDeleteSupplier = async (id) => {
//     await deleteSupplier(id);
//     fetchSuppliers();
//   };

//   return (
//     <div>
//       <h1>Suppliers</h1>
//       <form onSubmit={handleAddSupplier}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={newSupplier.Name}
//           onChange={(e) => setNewSupplier({ ...newSupplier, Name: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Contact Details"
//           value={newSupplier.ContactDetails}
//           onChange={(e) => setNewSupplier({ ...newSupplier, ContactDetails: e.target.value })}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={newSupplier.Email}
//           onChange={(e) => setNewSupplier({ ...newSupplier, Email: e.target.value })}
//         />
//         <button type="submit">Add Supplier</button>
//       </form>
//       <table>
//         <thead>
//           <tr>
//             <th>Supplier ID</th>
//             <th>Name</th>
//             <th>Contact Details</th>
//             <th>Email</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {suppliers.map((supplier) => (
//             <tr key={supplier.SupplierID}>
//               <td>{supplier.SupplierID}</td>
//               <td>{supplier.Name}</td>
//               <td>{supplier.ContactDetails}</td>
//               <td>{supplier.Email}</td>
//               <td>
//                 <button onClick={() => handleDeleteSupplier(supplier.SupplierID)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default SuppliersPage;

import React, { useEffect, useState } from 'react';
import { getSuppliers, addSupplier } from '../services/suppliersService';

const SupplierPage = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [newSupplier, setNewSupplier] = useState({ Name: '',  ContactDetails: '', Email: ''});

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const fetchSuppliers = async () => {
    const data = await getSuppliers();
    setSuppliers(data);
  };

  const handleAddSupplier = async (e) => {
    e.preventDefault();
    await addSupplier(newSupplier);
    setNewSupplier({ Name: '', ContactDetails: '', Email: ''});
    fetchSuppliers();
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Suppliers</h1>

      {/* Add Supplier Form */}
      <form onSubmit={handleAddSupplier} className="mb-6 space-y-4">
        <input
          type="text"
          placeholder="Supplier Name"
          value={newSupplier.Name}
          onChange={(e) => setNewSupplier({ ...newSupplier, Name: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          placeholder="Contact Details"
          value={newSupplier.ContactDetails}
          onChange={(e) => setNewSupplier({ ...newSupplier, ContactDetails: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          placeholder="Email"
          value={newSupplier.Email}
          onChange={(e) => setNewSupplier({ ...newSupplier, Email: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-lg">Add Supplier</button>
      </form>

      {/* Suppliers Table */}
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left text-gray-600">Supplier ID</th>
            <th className="px-4 py-2 text-left text-gray-600">Supplier Name</th>
            <th className="px-4 py-2 text-left text-gray-600">Contact Info</th>
            <th className="px-4 py-2 text-left text-gray-600">Email</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <tr key={supplier.SupplierID} className="border-t border-gray-200">
              <td className="px-4 py-2 text-gray-700">{supplier.SupplierID}</td>
              <td className="px-4 py-2 text-gray-700">{supplier.Name}</td>
              <td className="px-4 py-2 text-gray-700">{supplier.ContactDetails}</td>
              <td className="px-4 py-2 text-gray-700">{supplier.Email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SupplierPage;

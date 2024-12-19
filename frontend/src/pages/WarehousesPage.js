// import React, { useEffect, useState } from 'react';
// import { getWarehouses, addWarehouse, updateWarehouse, deleteWarehouse } from '../services/warehousesService';

// const WarehousesPage = () => {
//   const [warehouses, setWarehouses] = useState([]);
//   const [newWarehouse, setNewWarehouse] = useState({ Name: '', Location: '', Capacity: '' });

//   useEffect(() => {
//     fetchWarehouses();
//   }, []);

//   const fetchWarehouses = async () => {
//     const data = await getWarehouses();
//     setWarehouses(data);
//   };

//   const handleAddWarehouse = async (e) => {
//     e.preventDefault();
//     await addWarehouse(newWarehouse);
//     setNewWarehouse({ Name: '', Location: '', Capacity: '' });
//     fetchWarehouses();
//   };

//   const handleDeleteWarehouse = async (id) => {
//     await deleteWarehouse(id);
//     fetchWarehouses();
//   };

//   return (
//     <div>
//       <h1>Warehouses</h1>
//       <form onSubmit={handleAddWarehouse}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={newWarehouse.Name}
//           onChange={(e) => setNewWarehouse({ ...newWarehouse, Name: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Location"
//           value={newWarehouse.Location}
//           onChange={(e) => setNewWarehouse({ ...newWarehouse, Location: e.target.value })}
//         />
//         <input
//           type="number"
//           placeholder="Capacity"
//           value={newWarehouse.Capacity}
//           onChange={(e) => setNewWarehouse({ ...newWarehouse, Capacity: e.target.value })}
//         />
//         <button type="submit">Add Warehouse</button>
//       </form>
//       <table>
//         <thead>
//           <tr>
//             <th>Warehouse ID</th>
//             <th>Name</th>
//             <th>Location</th>
//             <th>Capacity</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {warehouses.map((warehouse) => (
//             <tr key={warehouse.WarehouseID}>
//               <td>{warehouse.WarehouseID}</td>
//               <td>{warehouse.Name}</td>
//               <td>{warehouse.Location}</td>
//               <td>{warehouse.Capacity}</td>
//               <td>
//                 <button onClick={() => handleDeleteWarehouse(warehouse.WarehouseID)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default WarehousesPage;

// import React, { useEffect, useState } from 'react';
// import { getWarehouses, addWarehouse, updateWarehouse, deleteWarehouse } from '../services/warehousesService';

// const WarehousePage = () => {
//   const [warehouses, setWarehouses] = useState([]);
//   const [newWarehouse, setNewWarehouse] = useState({ WarehouseID: '', Name: '', Location: '', Capacity: '' });
//   const [updateWarehouseData, setUpdateWarehouseData] = useState({ WarehouseID: '', Name: '', Location: '', Capacity: '' });
//   const [isUpdating, setIsUpdating] = useState(false);

//   useEffect(() => {
//     fetchWarehouses();
//   }, []);

//   const fetchWarehouses = async () => {
//     const data = await getWarehouses();
//     setWarehouses(data);
//   };

//   const handleAddWarehouse = async (e) => {
//     e.preventDefault();
//     if (!newWarehouse.WarehouseID || !newWarehouse.Name || !newWarehouse.Location || !newWarehouse.Capacity) {
//       alert('Please fill all fields');
//       return;
//     }
//     await addWarehouse(newWarehouse); // Add warehouse API call
//     setNewWarehouse({ WarehouseID: '', Name: '', Location: '', Capacity: '' }); // Reset form
//     fetchWarehouses(); // Refresh warehouse list
//   };
  
//   const handleUpdateWarehouse = async (e) => {
//     e.preventDefault();
//     const { WarehouseID, Name, Location, Capacity } = updateWarehouseData;
  
//     console.log('Updating Warehouse ID:', WarehouseID); // Debugging log
//     if (!WarehouseID || WarehouseID.trim() === '') {
//       alert('Please select a valid warehouse to update.');
//       return;
//     }
  
//     try {
//       await updateWarehouse(WarehouseID, { Name, Location, Capacity });
//       setUpdateWarehouseData({ WarehouseID: '', Name: '', Location: '', Capacity: '' });
//       setIsUpdating(false); // Reset after update
//       fetchWarehouses();
//       alert('Warehouse updated successfully!');
//     } catch (error) {
//       console.error('Failed to update warehouse:', error);
//       alert(error.message || 'An error occurred while updating the warehouse. Please try again.');
//     }
//   };
  
//   const editWarehouse = (warehouse) => {
//     console.log('Editing warehouse:', warehouse); // Debugging log
//     setIsUpdating(true);
//     setUpdateWarehouseData({
//       WarehouseID: warehouse.WarehouseID.toString(), // Ensure it's a string
//       Name: warehouse.Name,
//       Location: warehouse.Location,
//       Capacity: warehouse.Capacity,
//     });
//   };
  
  
//   const handleDeleteWarehouse = async (id) => { 
//     if (!id) {
//       alert('Invalid Warehouse ID.');
//       return;
//     }
//     const confirmDelete = window.confirm('Are you sure you want to delete this warehouse?');
//     if (!confirmDelete) return;
//     try {
//       await deleteWarehouse(id); 
//       await fetchWarehouses(); 
//       alert('Warehouse deleted successfully!');
//     } catch (err) {
//       console.error('Failed to delete warehouse:', err);
//       alert(`An error occurred: ${err.message || 'Please try again.'}`);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">Warehouses</h1>

//       {/* Add Warehouse Form */}
//       <form className="mb-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
//         <input
//           type="number"
//           placeholder="Warehouse ID"
//           value={isUpdating ? updateWarehouseData.WarehouseID : newWarehouse.WarehouseID}
//           onChange={(e) => {
//             const value = e.target.value.toString(); // Ensure it's treated as a string
//             console.log('Input change:', { isUpdating, value }); // Debugging log
//             if (isUpdating) {
//               setUpdateWarehouseData((prev) => ({ ...prev, WarehouseID: value }));
//             } else {
//               setNewWarehouse((prev) => ({ ...prev, WarehouseID: value }));
//             }
//           }}
//           className="w-full p-2 border border-gray-300 rounded-lg"
//         />


//         <input
//           type="text"
//           placeholder="Warehouse Name"
//           value={isUpdating ? updateWarehouseData.Name : newWarehouse.Name}
//           onChange={(e) =>
//             isUpdating
//               ? setUpdateWarehouseData({ ...updateWarehouseData, Name: e.target.value })
//               : setNewWarehouse({ ...newWarehouse, Name: e.target.value })
//           }
//           className="w-full p-2 border border-gray-300 rounded-lg"
//         />
//         <input
//           type="text"
//           placeholder="Warehouse Location"
//           value={isUpdating ? updateWarehouseData.Location : newWarehouse.Location}
//           onChange={(e) =>
//             isUpdating
//               ? setUpdateWarehouseData({ ...updateWarehouseData, Location: e.target.value })
//               : setNewWarehouse({ ...newWarehouse, Location: e.target.value })
//           }
//           className="w-full p-2 border border-gray-300 rounded-lg"
//         />
//         <input
//           type="number"
//           placeholder="Capacity"
//           value={isUpdating ? updateWarehouseData.Capacity : newWarehouse.Capacity}
//           onChange={(e) =>
//             isUpdating
//               ? setUpdateWarehouseData({ ...updateWarehouseData, Capacity: e.target.value })
//               : setNewWarehouse({ ...newWarehouse, Capacity: e.target.value })
//           }
//           className="w-full p-2 border border-gray-300 rounded-lg"
//         />
//         <button
//           type="button"
//           onClick={handleAddWarehouse} // Add new warehouse
//           className="px-6 py-2 bg-blue-500 text-white rounded-lg"
//         >
//           Add Warehouse
//         </button>
//         <button
//           type="button"
//           onClick={handleUpdateWarehouse} // Update existing warehouse
//           className="ml-3 px-6 py-2 bg-green-500 text-white rounded-lg"
//         >
//           Update Warehouse
//         </button>


//       </form>


//       {/* Warehouses Table */}
//       <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="px-4 py-2 text-left text-gray-600">Warehouse ID</th>
//             <th className="px-4 py-2 text-left text-gray-600">Warehouse Name</th>
//             <th className="px-4 py-2 text-left text-gray-600">Location</th>
//             <th className="px-4 py-2 text-left text-gray-600">Capacity</th>
//             <th className="px-4 py-2 text-left"></th>
//           </tr>
//         </thead>
//         <tbody>
//           {warehouses.map((warehouse) => (
//             <tr key={warehouse.WarehouseID} className="border-t border-gray-200">
//               <td className="px-4 py-2 text-gray-700">{warehouse.WarehouseID}</td>
//               <td className="px-4 py-2 text-gray-700">{warehouse.Name}</td>
//               <td className="px-4 py-2 text-gray-700">{warehouse.Location}</td>
//               <td className="px-4 py-2 text-gray-700">{warehouse.Capacity}</td>
//               <td className="">
//                 <button
//                   onClick={() => handleDeleteWarehouse(warehouse.WarehouseID)}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   🗑️
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default WarehousePage;

import React, { useEffect, useState } from 'react';
import { getWarehouses, addWarehouse, updateWarehouse, deleteWarehouse } from '../services/warehousesService';

const WarehousePage = () => {
  const [warehouses, setWarehouses] = useState([]);
  const [formState, setFormState] = useState({
    WarehouseID: '',
    Name: '',
    Location: '',
    Capacity: '',
  });
  const [isUpdating, setIsUpdating] = useState(false);

  // Fetch warehouses on component mount
  useEffect(() => {
    fetchWarehouses();
  }, []);

  // Fetch all warehouses
  const fetchWarehouses = async () => {
    try {
      const data = await getWarehouses();
      setWarehouses(data);
    } catch (error) {
      console.error('Failed to fetch warehouses:', error);
      alert('An error occurred while fetching warehouses.');
    }
  };

  // Handle input changes dynamically
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  // Add or update warehouse based on isUpdating
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { WarehouseID, Name, Location, Capacity } = formState;
  
    if (!WarehouseID || !Name || !Location || !Capacity) {
      alert('Please fill all fields.');
      return;
    }

    if (isUpdating && typeof WarehouseID !== 'string' && typeof WarehouseID !== 'number') {
      alert('Invalid Warehouse ID');
      return;
    }
  
    try {
      const warehouseID = String(WarehouseID);
      if (isUpdating) {
        await updateWarehouse(warehouseID, { Name, Location, Capacity });
        alert('Warehouse updated successfully!');
      } else {
        await addWarehouse(formState);
        alert('Warehouse added successfully!');
      }
  
      // Reset form and refresh list
      resetForm();
      fetchWarehouses();
    } catch (error) {
      console.error('Error during submit:', error);
      alert('An error occurred. Please try again.');
    }
  };
  

  // Edit warehouse
  const editWarehouse = (warehouse) => {
    setIsUpdating(true);
    console.log('Editing warehouse:', warehouse); // Debugging log
    console.log("warehouse id : ", warehouse.WarehouseID);
    setFormState({ ...warehouse });
  };

  const handleDeleteWarehouse = async (id) => {
    if (!id || !window.confirm('Are you sure you want to delete this warehouse?')) return;

    try {
      await deleteWarehouse(id);
      alert('Warehouse deleted successfully!');
      fetchWarehouses();
    } catch (error) {
      console.error('Failed to delete warehouse:', error);
      alert('An error occurred while deleting the warehouse.');
    }
  };

  const resetForm = () => {
    setFormState({ WarehouseID: '', Name: '', Location: '', Capacity: '' });
    setIsUpdating(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Warehouses</h1>

      <form className="mb-6 space-y-4" onSubmit={handleSubmit}>
        <input
          type="number"
          name="WarehouseID"
          placeholder="Warehouse ID"
          value={formState.WarehouseID}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          name="Name"
          placeholder="Warehouse Name"
          value={formState.Name}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          name="Location"
          placeholder="Warehouse Location"
          value={formState.Location}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="number"
          name="Capacity"
          placeholder="Capacity"
          value={formState.Capacity}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />

        <button
          type="submit"
          className={`px-6 py-2 text-white rounded-lg ${isUpdating ? 'bg-green-500' : 'bg-blue-500'}`}
        >
          {isUpdating ? 'Update Warehouse' : 'Add Warehouse'}
        </button>
        {isUpdating && (
          <button
            type="button"
            onClick={resetForm}
            className="ml-3 px-6 py-2 bg-gray-500 text-white rounded-lg"
          >
            Cancel
          </button>
        )}
      </form>

      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left text-gray-600">Warehouse ID</th>
            <th className="px-4 py-2 text-left text-gray-600">Warehouse Name</th>
            <th className="px-4 py-2 text-left text-gray-600">Location</th>
            <th className="px-4 py-2 text-left text-gray-600">Capacity</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {warehouses.map((warehouse) => (
            <tr key={warehouse.WarehouseID} className="border-t border-gray-200">
              <td className="px-4 py-2">{warehouse.WarehouseID}</td>
              <td className="px-4 py-2">{warehouse.Name}</td>
              <td className="px-4 py-2">{warehouse.Location}</td>
              <td className="px-4 py-2">{warehouse.Capacity}</td>
              <td className="px-4 py-2">
                <button onClick={() => editWarehouse(warehouse)} className="text-blue-500 hover:text-blue-700">
                  ✏️
                </button>
                {/* <button
                  onClick={() => handleDeleteWarehouse(warehouse.WarehouseID)}
                  className="text-red-500 hover:text-red-700 ml-3"
                >
                  🗑️
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WarehousePage;

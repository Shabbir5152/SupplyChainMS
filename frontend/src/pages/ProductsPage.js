// import React, { useEffect, useState } from 'react';
// import { getProducts, addProduct } from '../services/productsService';

// const ProductsPage = () => {
//   const [products, setProducts] = useState([]);
//   const [newProduct, setNewProduct] = useState({ Name: '', Category: '', Price: '', SupplierID: '' });

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     const data = await getProducts();
//     setProducts(data);
//   };

//   const handleAddProduct = async (e) => {
//     e.preventDefault();
//     await addProduct(newProduct);
//     setNewProduct({ Name: '', Category: '', Price: '', SupplierID: '' });
//     fetchProducts();
//   };

//   return (
//     <div>
//       <h1>Products</h1>
//       <form onSubmit={handleAddProduct}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={newProduct.Name}
//           onChange={(e) => setNewProduct({ ...newProduct, Name: e.target.value })}
//         />
//         <button type="submit">Add Product</button>
//       </form>
//       <table>
//         <thead>
//           <tr>
//             <th>ProductID</th>
//             <th>Name</th>
//             <th>Category</th>
//             <th>Price</th>
//             <th>SupplierID</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product.ProductID}>
//               <td>{product.ProductID}</td>
//               <td>{product.Name}</td>
//               <td>{product.Category}</td>
//               <td>{product.Price}</td>
//               <td>{product.SupplierID}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ProductsPage;

import React, { useEffect, useState } from 'react';
import { getProducts, addProduct } from '../services/productsService';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ ProductID: '', ProductName: '', Price: '', SupplierID: '' });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    await addProduct(newProduct);
    setNewProduct({ ProductID: '', ProductName: '', Price: '', SupplierID: '' });
    fetchProducts();
  };

  const handleUpdateSupplier = async (id, stock, threshold) => {
    await updateSupplier(id, { Stock: stock, LowStockThreshold: threshold });
    fetchProducts();
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      
      {/* Add Product Form */}
      <form onSubmit={handleAddProduct} className="mb-6 space-y-4">
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.Name}
          onChange={(e) => setNewProduct({ ...newProduct, Name: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          placeholder="Product Category"
          value={newProduct.Category}
          onChange={(e) => setNewProduct({ ...newProduct, Category: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.Price}
          onChange={(e) => setNewProduct({ ...newProduct, Price: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          placeholder="Supplier ID"
          value={newProduct.SupplierID}
          onChange={(e) => setNewProduct({ ...newProduct, SupplierID: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-lg">Add Product</button>
      </form>

      {/* Products Table */}
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left text-gray-600">Product ID</th>
            <th className="px-4 py-2 text-left text-gray-600">Product Name</th>
            <th className="px-4 py-2 text-left text-gray-600">Category</th>
            <th className="px-4 py-2 text-left text-gray-600">Price</th>
            <th className="px-4 py-2 text-left text-gray-600">Supplier ID</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.ProductID} className="border-t border-gray-200">
              <td className="px-4 py-2 text-gray-700">{product.ProductID}</td>
              <td className="px-4 py-2 text-gray-700">{product.Name}</td>
              <td className="px-4 py-2 text-gray-700">{product.Category}</td>
              <td className="px-4 py-2 text-gray-700">${product.Price}</td>
              <td className="px-4 py-2 text-gray-700">{product.SupplierID}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductPage;

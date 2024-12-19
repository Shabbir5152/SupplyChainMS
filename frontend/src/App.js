import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import OrdersPage from './pages/OrdersPage';
import ProductsPage from './pages/ProductsPage';
import SuppliersPage from './pages/SuppliersPage';
import WarehousesPage from './pages/WarehousesPage';
import InventoryPage from './pages/InventoryPage';
import AlertsPage from './pages/AlertsPage';

import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/suppliers" element={<SuppliersPage />} />
          <Route path="/warehouses" element={<WarehousesPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/alerts" element={<AlertsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// // Import Pages
// import OrdersPage from './pages/OrdersPage';
// import ProductsPage from './pages/ProductsPage';
// import SuppliersPage from './pages/SuppliersPage';
// import WarehousesPage from './pages/WarehousesPage';
// import InventoryPage from './pages/InventoryPage';
// import AlertsPage from './pages/AlertsPage';
// import Layout from './components/Layout';

// // Import Authentication Pages
// import LoginPage from './pages/LoginPage';
// import ForgotPassword from './pages/ForgotPassword';
// import SignUp from './pages/SignUp';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLoginSuccess = () => {
//     setIsAuthenticated(true);
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/login"
//           element={<LoginPage onLoginSuccess={handleLoginSuccess} />}
//         />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route
//           path="/"
//           element={
//             isAuthenticated ? (
//               <Layout>
//                 <Routes>
//                   <Route path="/orders" element={<OrdersPage />} />
//                   <Route path="/products" element={<ProductsPage />} />
//                   <Route path="/suppliers" element={<SuppliersPage />} />
//                   <Route path="/warehouses" element={<WarehousesPage />} />
//                   <Route path="/inventory" element={<InventoryPage />} />
//                   <Route path="/alerts" element={<AlertsPage />} />
//                 </Routes>
//               </Layout>
//             ) : (
//               <Navigate to="/login" />
//             )
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { GoogleOAuthProvider } from '@react-oauth/google';  // Import Google OAuth Provider

// // Import Pages
// import OrdersPage from './pages/OrdersPage';
// import ProductsPage from './pages/ProductsPage';
// import SuppliersPage from './pages/SuppliersPage';
// import WarehousesPage from './pages/WarehousesPage';
// import InventoryPage from './pages/InventoryPage';
// import AlertsPage from './pages/AlertsPage';
// import Layout from './components/Layout';

// // Import Authentication Pages
// import LoginPage from './pages/LoginPage';
// import ForgotPassword from './pages/ForgotPassword';
// import SignUp from './pages/SignUp';

// function App() {
//   return (
//     <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
//       <Router>
//         <Layout>
//           <Routes>
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/forgot-password" element={<ForgotPassword />} />
//             <Route path="/signup" element={<SignUp />} />
//             <Route path="/orders" element={<OrdersPage />} />
//             <Route path="/products" element={<ProductsPage />} />
//             <Route path="/suppliers" element={<SuppliersPage />} />
//             <Route path="/warehouses" element={<WarehousesPage />} />
//             <Route path="/inventory" element={<InventoryPage />} />
//             <Route path="/alerts" element={<AlertsPage />} />
//           </Routes>
//         </Layout>
//       </Router>
//     </GoogleOAuthProvider>
//   );
// }

// export default App;

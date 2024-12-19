// import React from 'react';

// const Header = () => {
//   return (
//     <header className="header">
//       <h1>Supply Chain Management System</h1>
//     </header>
//   );
// };

// export default Header;

const Header = () => {
  return (
    <header className="bg-teal-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl">Supply Chain Management</h1>
      <nav>
        <a href="/" className="text-white hover:text-teal-200 px-4">Home</a>
        <a href="/login" className="text-white hover:text-teal-200 px-4">Login</a>
      </nav>
    </header>
  );
};

export default Header;

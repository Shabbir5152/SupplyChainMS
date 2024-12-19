export const getSuppliers = async () => {
    const response = await fetch('http://localhost:5000/api/suppliers');
    return response.json();
  };
  
  export const addSupplier = async (supplier) => {
    await fetch('http://localhost:5000/api/suppliers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(supplier),
    });
  };
  
  export const updateSupplier = async (id, supplier) => {
    await fetch(`http://localhost:5000/api/suppliers/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(supplier),
    });
  };
  
  export const deleteSupplier = async (id) => {
    await fetch(`http://localhost:5000/api/suppliers/${id}`, {
      method: 'DELETE',
    });
  };
  
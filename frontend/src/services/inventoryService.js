export const getInventory = async () => {
    const response = await fetch('http://localhost:5000/api/inventory');
    return response.json();
  };
  
  export const addInventory = async (inventory) => {
    await fetch('http://localhost:5000/api/inventory', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inventory),
    });
  };
  
  export const updateInventory = async (id, inventory) => {
    await fetch(`http://localhost:5000/api/inventory/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inventory),
    });
  };
  
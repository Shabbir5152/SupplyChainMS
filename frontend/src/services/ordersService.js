export const getOrders = async () => {
    const response = await fetch('http://localhost:5000/api/orders');
    return response.json();
  };
  
  export const addOrder = async (order) => {
    await fetch('http://localhost:5000/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order),
    });
  };
  
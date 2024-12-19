export const getProducts = async () => {
  const response = await fetch('http://localhost:5000/api/products');
  return response.json();
};

export const addProduct = async (product) => {
  await fetch('http://localhost:5000/api/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
};

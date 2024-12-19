export const getWarehouses = async () => {
    const response = await fetch('http://localhost:5000/api/warehouses');
    return response.json();
  };
  
  export const addWarehouse = async (warehouse) => {
    await fetch('http://localhost:5000/api/warehouses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(warehouse),
    });
  };
  
  export const updateWarehouse = async (id, warehouse) => {
    try {
      console.log('Updating warehouse with ID:', id);
      console.log('Warehouse data:', warehouse);
  
      const response = await fetch(`http://localhost:5000/api/warehouses/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(warehouse),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error updating warehouse');
      }
  
      const result = await response.json();
      console.log('Update successful:', result);
      return result;
    } catch (error) {
      console.error('Error in updateWarehouse:', error);
      throw error;
    }
  };
  
  
  // export const deleteWarehouse = async (id) => {
  //   try {
  //     console.log('Deleting warehouse with ID:', id);
  //     const response = await fetch(`http://localhost:5000/api/warehouses/${id}`, {
  //       method: 'DELETE',
  //     });

  //     if (!response.ok) {
  //       const errorData = await response.json();
  //       throw new error(errorData.message || 'Error deleting warehouse');
  //     }
  
  //     const result = await response.json();
  //     console.log('Delete successful:', result);
  //     return result;
  //   } catch (error) {
  //     console.error('Error in deleteWarehouse:', error);
  //   }
    
  // };

  export const deleteWarehouse = async (id) => {
    if (!id) {
      console.error('Error: Warehouse ID is required to delete.');
      return { success: false, message: 'Warehouse ID is required' };
    }
  
    try {
      console.log('Deleting warehouse with ID:', id);
      const response = await fetch(`http://localhost:5000/api/warehouses/${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        const errorData = await response.json().catch(() => null); 
        throw new Error(errorData?.message || 'Error deleting warehouse');
      }
  
      const result = await response.json().catch(() => null); 
      console.log('Delete successful:', result || { success: true });
      return result || { success: true, message: 'Warehouse deleted successfully' };
    } catch (error) {
      console.error('Error in deleteWarehouse:', error);
      return { success: false, message: error.message };
    }
  };
  


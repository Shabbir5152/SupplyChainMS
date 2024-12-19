const db = require('../models/db');

exports.getWarehouses = (req, res) => {
  db.query('SELECT * FROM Warehouses', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.addWarehouse = (req, res) => {
  const { WarehouseID, Name, Location, Capacity } = req.body;
  db.query(
    'INSERT INTO Warehouses (WarehouseID, Name, Location, Capacity) VALUES (?, ?, ?, ?)',
    [WarehouseID, Name, Location, Capacity],
    (err) => {
      if (err) return res.status(500).send(err);
      res.status(201).send('Warehouse added');
    }
  );
};

exports.updateWarehouse = (req, res) => {
  const { WarehouseID, Name, Location, Capacity } = req.body;
  const { id } = req.params; 

  console.log('Received update request for warehouse:', { WarehouseID, Name, Location, Capacity });
  if (!Name || !Location || !Capacity) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const query = 'UPDATE Warehouses SET Name = ?, Location = ?, Capacity = ? WHERE WarehouseID = ?';
  db.query(query, [Name, Location, Capacity, id], (err, result) => {
    if (err) {
      console.error('Error updating warehouse:', err);
      return res.status(500).json({ message: 'Error updating warehouse' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Warehouse not found' });
    }

    res.status(200).json({ message: 'Warehouse updated successfully' });
  });
};

exports.deleteWarehouse = (req, res) => {
  const { id } = req.body;
  db.query('set FOREIGN_KEY_CHECKS = 0, DELETE FROM Warehouses WHERE WarehouseID = ?, set FOREIGN_KEY_CHECKS = 1', [id], (err) => {
    if (err) return res.status(500).send(err);
    res.status(200).json({ message: 'Warehouse deleted successfully' });
  });
};

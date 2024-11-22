const db = require('../models/db');

exports.getInventory = (req, res) => {
  db.query(
    `SELECT Inventory.InventoryID, Inventory.WarehouseID, Inventory.ProductID, Inventory.Stock, Inventory.LowStockThreshold,
            Products.Name AS ProductName, Warehouses.Name AS WarehouseName
     FROM Inventory
     JOIN Products ON Inventory.ProductID = Products.ProductID
     JOIN Warehouses ON Inventory.WarehouseID = Warehouses.WarehouseID`,
    (err, results) => {
      if (err) return res.status(500).send(err);
      res.json(results);
    }
  );
};

exports.addInventory = (req, res) => {
  const { WarehouseID, ProductID, Stock, LowStockThreshold } = req.body;
  db.query(
    'INSERT INTO Inventory (WarehouseID, ProductID, Stock, LowStockThreshold) VALUES (?, ?, ?, ?)',
    [WarehouseID, ProductID, Stock, LowStockThreshold],
    (err) => {
      if (err) return res.status(500).send(err);
      res.status(201).send('Inventory item added');
    }
  );
};

exports.updateInventory = (req, res) => {
  const { id } = req.params;
  const { Stock, LowStockThreshold } = req.body;
  db.query(
    'UPDATE Inventory SET Stock = ?, LowStockThreshold = ? WHERE InventoryID = ?',
    [Stock, LowStockThreshold, id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.send('Inventory updated');
    }
  );
};

const db = require('../models/db');

exports.getOrders = (req, res) => {
  db.query('SELECT * FROM Orders', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.addOrder = (req, res) => {
  const { CustomerName, WarehouseID, DeliveryDate } = req.body;
  db.query(
    'INSERT INTO Orders (CustomerName, WarehouseID, DeliveryDate) VALUES (?, ?, ?)',
    [CustomerName, WarehouseID, DeliveryDate],
    (err) => {
      if (err) return res.status(500).send(err);
      res.status(201).send('Order added');
    }
  );
};

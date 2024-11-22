const db = require('../models/db');

exports.getProducts = (req, res) => {
  db.query('SELECT * FROM Products', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.addProduct = (req, res) => {
  const { Name, Category, Price, SupplierID } = req.body;
  db.query(
    'INSERT INTO Products (Name, Category, Price, SupplierID) VALUES (?, ?, ?, ?)',
    [Name, Category, Price, SupplierID],
    (err) => {
      if (err) return res.status(500).send(err);
      res.status(201).send('Product added');
    }
  );
};

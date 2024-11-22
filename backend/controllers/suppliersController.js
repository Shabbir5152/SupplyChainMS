const db = require('../models/db');

exports.getSuppliers = (req, res) => {
  db.query('SELECT * FROM Suppliers', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.addSupplier = (req, res) => {
  const { Name, ContactDetails, Email } = req.body;
  if(!Name){
    alert("Please add supplier name!")
  }
  if(!ContactDetails){
    alert("Please add supplier contacts!")
  }
  if(!Email){
    alert("Please add supplier email!")
  }
  db.query(
    'INSERT INTO Suppliers (Name, ContactDetails, Email) VALUES (?, ?, ?)',
    [Name, ContactDetails, Email],
    (err) => {
      if (err) return res.status(500).send(err);
      res.status(201).send('Supplier added');
    }
  );
};

exports.updateSupplier = (req, res) => {
  const { id } = req.params;
  const { Name, ContactDetails, Email } = req.body;
  db.query(
    'UPDATE Suppliers SET Name = ?, ContactDetails = ?, Email = ? WHERE SupplierID = ?',
    [Name, ContactDetails, Email, id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.send('Supplier updated');
    }
  );
};

exports.deleteSupplier = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM Suppliers WHERE SupplierID = ?', [id], (err) => {
    if (err) return res.status(500).send(err);
    res.send('Supplier deleted');
  });
};

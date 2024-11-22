const db = require('../models/db');

exports.getAlerts = (req, res) => {
  db.query('SELECT * FROM Alerts', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

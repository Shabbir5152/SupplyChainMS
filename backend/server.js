const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
  clientID: 'YOUR_GOOGLE_CLIENT_ID',
  clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
  callbackURL: 'http://localhost:5000/api/auth/google/callback',
}, function (token, tokenSecret, profile, done) {
  // Save user profile and token in the session or database
  return done(null, { profile, token });
}));

const productsRoutes = require('./routes/productsRoutes');
const ordersRoutes = require('./routes/ordersRoutes');
const suppliersRoutes = require('./routes/suppliersRoutes');
const warehousesRoutes = require('./routes/warehousesRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const alertsRoutes = require('./routes/alertsRoutes');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());

app.post('/api/google-login', passport.authenticate('google', { session: false }), (req, res) => {
  // Send a response with user info and token
  res.json({ token: req.user.token });
});

// Routes
app.use('/api/products', productsRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/suppliers', suppliersRoutes);
app.use('/api/warehouses', warehousesRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/alerts', alertsRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

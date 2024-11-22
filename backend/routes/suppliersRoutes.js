const express = require('express');
const router = express.Router();
const suppliersController = require('../controllers/suppliersController');

router.get('/', suppliersController.getSuppliers);
router.post('/', suppliersController.addSupplier);
router.put('/:id', suppliersController.updateSupplier);
router.delete('/:id', suppliersController.deleteSupplier);

module.exports = router;

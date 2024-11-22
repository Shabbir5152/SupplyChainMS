const express = require('express');
const router = express.Router();
const warehousesController = require('../controllers/warehousesController');

router.get('/', warehousesController.getWarehouses);
router.post('/', warehousesController.addWarehouse);
router.put('/:id', warehousesController.updateWarehouse);
router.delete('/:id', warehousesController.deleteWarehouse);

module.exports = router;

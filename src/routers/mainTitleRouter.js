const { Router } = require('express');
const controller = require('../controller/controller');

const router = Router();

router.get('/', controller.getTitle);
router.get('/:id', controller.getTitleById);

module.exports = router;
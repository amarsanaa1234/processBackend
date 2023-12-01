const { Router } = require('express');
const controller = require('../controller/controller');

const router = Router();

router.get('/', controller.getTitle);
router.get('/:id', controller.getTitleById);
router.post('/', controller.createTitle);

module.exports = router;
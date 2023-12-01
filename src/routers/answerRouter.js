const { Router } = require('express');
const controller = require('../controller/controller');
const router = Router();

router.get('/', controller.getAnswer);
router.get('/:id', controller.getAnswerById);

module.exports = router;
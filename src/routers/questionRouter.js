const { Router } = require('express');
const controller = require('../controller/controller');

const router = Router();

router.get('/', controller.getQuestion);
router.get('/:id', controller.getQuestionById);

module.exports = router;
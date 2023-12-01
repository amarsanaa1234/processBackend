"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
// import { CalculatorRequestBody } from '../types';
// import { validateCalculatorRequest } from '../middlewares';
exports.router = (0, express_1.Router)();
exports.router.get('/', (req, res) => {
    res.send({
        message: 'Get all calculations',
        data: [
            { id: 1, result: 1 },
            { id: 2, result: 2 },
        ],
    });
});
exports.router.get('/:id', (req, res) => {
    res.send({
        message: 'Get calculation by ID',
        id: req.params.id,
        result: 1,
    });
});
// router.delete('/:id', (req: Request, res) => {
//   res.status(204).end();
// });
// router.put(
//   '/:id',
//   validateCalculatorRequest,
//   (req: Request<{ id: string }, any>, res) => {
//     const { operator, operand1, operand2 } = req.body;
//     let result: number | string;
//     switch (operator) {
//       case '+':
//         result = operand1 + operand2;
//         break;
//       case '-':
//         result = operand1 - operand2;
//         break;
//       case '*':
//         result = operand1 * operand2;
//         break;
//       case '/':
//         result = operand1 / operand2;
//         break;
//       default:
//         result = 'Invalid operator';
//         break;
//     }
//     res.send({
//       message: 'Update a calculation',
//       id: req.params.id,
//       timestamp: req,
//       result,
//     });
//   }
// );
// router.post(
//   '/',
//   validateCalculatorRequest,
//   (req: Request<{}, any>, res) => {
//     const { operator, operand1, operand2 } = req.body;
//     let result: number | string;
//     switch (operator) {
//       case '+':
//         result = operand1 + operand2;
//         break;
//       case '-':
//         result = operand1 - operand2;
//         break;
//       case '*':
//         result = operand1 * operand2;
//         break;
//       case '/':
//         result = operand1 / operand2;
//         break;
//       default:
//         result = 'Invalid operator';
//         break;
//     }
//     res.status(201).send({
//       message: 'Create new calculation',
//       timestamp: req.getMaxListeners,
//       result,
//     });
//   }
// );

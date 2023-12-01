"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routers_1 = require("./routers");
const app = (0, express_1.default)();
const port = 4000;
// app.use(express.json());
// app.use(logger);
app.use('/question', routers_1.question);
// app.use(errorHandler);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

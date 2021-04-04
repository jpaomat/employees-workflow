"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_route_1 = __importDefault(require("./routes/index.route"));
var app = express_1.default();
// MIDDLEWARES
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(index_route_1.default);
app.listen(4000);
console.log('Running on port', 4000);

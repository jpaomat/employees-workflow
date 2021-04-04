"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_controller_1 = require("../controllers/index.controller");
var router = express_1.Router();
router.get('/employees', index_controller_1.getEmployees);
router.get('/test');
exports.default = router;

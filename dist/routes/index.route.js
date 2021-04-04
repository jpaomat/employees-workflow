"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_controller_1 = require("../controllers/index.controller");
var router = express_1.Router();
//ROUTES
router.get('/employees', index_controller_1.getEmployees);
router.get('/employees/:idEmployee', index_controller_1.getEmployeeById);
router.post('/employees', index_controller_1.createEmployee);
router.delete('/employees/:idEmployee', index_controller_1.deleteEmployee);
router.put('/employees/:idEmployee', index_controller_1.editEmployee);
router.get('/test');
exports.default = router;

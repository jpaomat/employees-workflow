import { Router } from 'express';
import { getEmployees, getEmployeeById, createEmployee, deleteEmployee, editEmployee} from '../controllers/index.controller';
const router = Router();

//ROUTES
router.get('/employees', getEmployees);
router.get('/employees/:idEmployee', getEmployeeById);
router.post('/employees', createEmployee);
router.delete('/employees/:idEmployee', deleteEmployee);
router.put('/employees/:idEmployee', editEmployee);

router.get('/test',);
export default router;
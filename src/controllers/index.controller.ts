import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import { pool } from '../database';

export const getEmployees = async (req: Request, res: Response): Promise<Response> => {
    try {
        const employees: QueryResult = await pool.query('SELECT * FROM employees');
        return res.status(200).json(employees.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal server error');
    }
};

export const getEmployeeById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const idEmployee = req.params.idEmployee;
        const employee: QueryResult = await pool.query('SELECT * FROM employees WHERE idEmployee=$1', [idEmployee]);
        return res.status(200).json(employee.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal server error');
    }
};

export const createEmployee = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { idEmpoyee, fullname, occupation, idBoss } = req.body;
        const query = 'INSERT INTO employees(idEmployee, fullname, occupation, idBoss) VALUES($1, $2, $3, $4)';
        await pool.query(query, [idEmpoyee, fullname, occupation, idBoss]);
        return res.status(200).json({
            message: 'User created Successfully',
            body: req.body
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal server error');
    }
};

export const deleteEmployee = async (req: Request, res: Response): Promise<Response> => {
    try {
        const idEmployee = req.params.idEmployee;
        await pool.query('DELETE FROM employees WHERE idEmployee=$1', [idEmployee]);
        return res.status(200).json(`Employee ${idEmployee} deleted successfully`);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal server error');
    }
};

export const editEmployee = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = req.params.idEmployee;
        const { idEmpoyee, fullname, occupation, idBoss } = req.body;
        await pool.query('UPDATE employees SET idEmployee=$1, fullname=$2, occupation=$3, idBoss=$4 WHERE idEmployee=$1', [id, fullname, occupation, idBoss]);
        return res.status(200).json(`Employee ${id} update successfully`);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal server error');
    }
};
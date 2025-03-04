import { pool } from '../db.js'


export const getCI = async (req, res) => {
    const { ci } = req.params
    try {
        const { rows } = await pool.query('SELECT * FROM userci ', [ci]);
        if (rows.length == 0) {
            return res.status(404).json({ message: "Usuario no encontrado" })
        }
        res.json(rows)
    } catch (error) {
        res.json({...error})
    }
}

export const getActive = (req, res) => {
    res.json({ message: "ESTOY ACTIVO" })
}
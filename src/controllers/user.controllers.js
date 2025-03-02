import { pool } from '../db.js'


export const getCI = async (req, res) => {
    const { ci } = req.params
    const {rows} = await pool.query('SELECT * FROM UserCI WHERE ci = $1', [ci]);
    if(rows.length == 0) {
        return res.status(404).json({message: "Usuario no encontrado"}) 
    }
    res.json(rows)
}
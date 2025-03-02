import pg from 'pg'
import { DB_database, DB_host, DB_password, DB_port, DB_user } from './config.js'

export const pool = new pg.Pool({
    user: DB_user,
    host: DB_host,
    database: DB_database,
    password: DB_password,
    port: DB_port
})


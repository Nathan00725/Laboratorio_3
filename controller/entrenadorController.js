import { db } from "../db/conn.js";

const getEntrenador= async(req, res)=>{

    const sql = `select * from tbl_entrenador`;

    const result = await db.query(sql);

    res.json(result);

}

const postEntrenador = async(req, res)=>{ 

    const {nombre} = req.body;
    const params = [nombre];
    const sql = `insert into tbl_entrenador
    (nombre)
    values 
    ($1) returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

const putEntrenador = async (req, res)=>{

    const { nombre } = req.body;
    const {id} = req.params;
    
    const params = [nombre, id];

    const sql = `update tbl_entrenador
    set nombre = $1
    where id = $2
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}


const deleteEntrenador = async (req, res)=>{

    const {id} = req.params;
    const params = [ id];

    const sql = `delete from tbl_entrenador
    where id = $1
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);
}



export {getEntrenador, postEntrenador, putEntrenador, deleteEntrenador}
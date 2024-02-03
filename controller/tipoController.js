import { db } from "../db/conn.js";

const getTipo= async(req, res)=>{

    const sql = `select * from tbl_tipo_pokemon`;

    const result = await db.query(sql);

    res.json(result);

}

const postTipo = async(req, res)=>{ 

    const {nombre} = req.body;
    const params = [nombre];
    const sql = `insert into tbl_tipo_pokemon
    (nombre)
    values 
    ($1) returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

const putTipo = async (req, res)=>{

    const { nombre } = req.body;
    const {id} = req.params;
    
    const params = [nombre, id];

    const sql = `update tbl_tipo_pokemon
    set 
    nombre = $1
    where id = $2
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}


const deleteTipo = async (req, res)=>{

    const params = [req.params.id];

    const sql = `delete from tbl_pokemones where id = $1 returning *`;

    const result = await db.query(sql, params);

    res.json(result);
}



export {getTipo, postTipo, putTipo, deleteTipo}
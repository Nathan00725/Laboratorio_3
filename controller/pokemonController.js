import {db} from '../db/conn.js';

const getpokemon =  async (req, res)=>{
  
    const sql= `SELECT a.id, 
    a.nombre as nombre_pokemon, 
    a.sonido, 
    b.nombre as nombre_tipo,
    d.nombre as nombre_entrenador
from tbl_pokemones a
inner join tbl_tipo_pokemon b on a.id_tipo = b.id
inner join tbl_entrenador d 
         on a.id_nombre = d.id`;

    const result = await db.query(sql);
    res.json(result)
    
}

const postpokemon = async(req, res)=>{
 
    //Sintaxis de destructuracion
    const { nombre , sonido, id_tipo, id_nombre} = req.body;
 
     const params =  [nombre, sonido, id_tipo, id_nombre];
 
     const sql = `insert into tbl_pokemones 
                 (nombre, sonido, id_tipo, id_nombre )
                 values 
                 ($1, $2, $3, $4) returning * `
 
     const result = await db.query(sql , params);
 
     res.json(result);
 }

 const putpokemon = async (req, res)=>{

    const {nombre, sonido, id_tipo, id_nombre} = req.body
    const {id} = req.params

    const params = [
        nombre,
        sonido,
        id_tipo,
        id_nombre,
        id
    ]
    
    const sql = `update tbl_pokemones
                  set
                  nombre = $1,
                  sonido = $2
                  id_tipo = $3,
                  id_nombre = $4
                where id = $5 returning *`;
 
    const result = await db.query(sql, params)
 
    res.json(result);

}

const deletepokemon = async (req, res)=>{

    const params = [req.params.id];

    const sql = `delete from tbl_pokemones where id = $1 returning *`;

    const result = await db.query(sql, params);

    res.json(result);
}

export {getpokemon, postpokemon, putpokemon, deletepokemon  }
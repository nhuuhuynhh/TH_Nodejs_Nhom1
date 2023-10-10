import pool from './../configs/connectDB.js'

const getAllUser = async () =>{
    const [rows, fields] = await pool.execute('SELECT * FROM `users`')
    return rows
}

const detailUser = async (user) =>{
    const [rows, fields] = await pool.execute('SELECT * FROM `users` where id=?',[user])
    return rows[0]
}


const insertUser = async (username, password,fullname,address,sex,gmail,groupid) => {
    await pool.execute(`INSERT INTO users (username, password,fullname,address,sex,gmail,groupid) values ("${username}", "${password}", "${fullname}", "${address}", "${sex}", "${gmail}", "${groupid}")`)
}

const editUser = async (id,username, password,fullname,address,sex,gmail,groupid) => {
    await pool.execute(`UPDATE users set username=?, password=?,fullname=?,address=?,sex=?,gmail=?,groupid=? WHERE id = "${id}"`, [username, password,fullname,address,sex,gmail,groupid])
}

const deleteUser =  async (id) =>{
    await pool.execute(`delete from users where id="${id}"`)
   
}






export default {getAllUser,detailUser,insertUser,editUser,deleteUser}
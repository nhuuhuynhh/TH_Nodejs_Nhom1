import express from "express"
import userModel from "../services/userModel.js"
import bodyParser from "body-parser"
const UserPage = (req, res)=>{
    return res.render("newUser",{data: {title: 'Tao tai khoan'}})
}

const listUser = async (req, res)=>{
    let userList = await userModel.getAllUser()
     res.render("home",{data: {page: 'listUser', title: 'Danh sachs tai khoan',rows: userList}})
}

const aboutPagee = (req, res)=>{
    return res.render("home",{data: {page: 'about',title: 'About website', content: 'admin@abc.com.vn'}})
}


// const loginUser = (req, res)=>{
//     return res.render("home",{data: {title: 'Dang nhap',page: 'login'}})
// }

const createUser = async(req, res) => {
     res.render("home",{data: {page: 'newUser', title: 'Tạo tài khoản'}})
}

const insertUser = async (req, res) => {
    
    

    const {username, password,fullname,address,sex,gmail,groupid}= req.body;

    
    
    
    // if (!userModel.isUserExist(username)){
        await userModel.insertUser(username, password,fullname,address,sex,gmail,groupid)
        res.redirect("/list-user")
    // }
    // else
    //     res.send("User exist")


}



const detail_user = async (req, res)=>{
    // if (isAuthentication(req, res)== true){
    let user = req.params.username
    let dataUser = await userModel.detailUser(user)
     res.render("home",{data: {title: 'chi tiet nguoi dung',page: 'detailUser',rows: dataUser}})
    // }
}

//view edit
const edit_userView = async (req, res)=>{
    // if (isAuthentication(req, res)== true){
    let user = req.params.username
    let dataUser = await userModel.detailUser(user)
     res.render("home",{data: {title: 'edit',page: 'editUser',rows: dataUser}})
    // }
}

//edit 

const edit_user = async (req, res) => {
    console.log(req.body)

    const id = req.body.id 

    const {username, password,fullname,address,sex,gmail,groupid}= req.body;

    await userModel.editUser(id,username, password,fullname,address,sex,gmail,groupid)
    res.redirect("/list-user")
    
}

const delete_user = async (req, res)=>{
    const { id } = req.body
    await userModel.deleteUser(id)
    res.redirect("/list-user")
    // }
}



const login = async (req, res)=>{
    // if (isAuthentication(req, res)== true){
    
    res.render("home",{data: {title: 'Dang nhap',page: 'login'}})
    // }
}
// const loginbody = async (req, res)=>{
//    let sql = "SELECT * FROM users WHERE username = ? AND password = ? ";
//    await pool.execute(sql,[req.body.username, req.body.password], function (err,data){
//     if(!err){
//         res.redirect("/")
//     }
//    })
// }






export { UserPage, listUser,detail_user,aboutPagee,createUser,insertUser,edit_userView,delete_user,edit_user,login};

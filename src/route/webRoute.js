//goi den cac controller tuong ung

import express from "express";
import pool from './../configs/connectDB.js'
import { getHomePage } from "../controllers/HomeController.js";

// import aboutPage from "../controllers/AboutController.js";

import { UserPage, listUser,detail_user,aboutPagee,createUser,insertUser,edit_userView,delete_user,edit_user,login } from "../controllers/UserController.js";




const router = express.Router()

const initWebRoute = (app) =>{
    
    router.get('/', getHomePage)

    // app.use(function(req, res, next){
    //     let check  = false;
    //     if(check){
    //         next();
            
    //     }else{
    //         res.redirect('/about')
            
    //     }
    // })
    
    router.get('/about', aboutPagee)

    router.get('/loginpage', createUser)




    //1.3b path: /create-new-user
    router.get('/create-new-user',UserPage)

    router.get('/list-user',listUser)

  

    //route truyen bien

    router.get('/detail_user/:username',detail_user)

    router.get('/edit_user/:username',edit_userView)

    // router.get('/delete_user/:username',delete_user)


    
    //tao tai khoan trong view newUsers

    router.post('/insert-new-user', insertUser)
 

    router.post('/update_user', edit_user)
    
    router.post('/delete_user', delete_user)




    router.get('/login',login)
    
    router.post('/login',function (req, res){
        let sql = "SELECT * FROM users WHERE username = ? AND password = ? ";
             pool.execute(sql,[req.body.username, req.body.password], function (err,data){
                if(!err){
                    res.redirect("/")
                }
            })
    })


    return app.use('/', router)
}

export default initWebRoute


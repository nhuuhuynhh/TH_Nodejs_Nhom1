import express from "express"
import homeController from "../controllers/HomeController"
// import aboutController from "../controllers/AboutController"
import userController from "../controllers/UserController"

const router = express.Router()

const initWebRoutes = (app) => {
    router.get("/", homeController.homePage)
    router.get("/about", homeController.aboutPagee)
    router.get("/create-new-user", userController.loginpage)
     router.get("/list-user", userController.listUser)
     router.get("/login", userController.login)
    // router.get("/about", aboutController.aboutPage)

    //route truyen bien

    router.get('/detail_user/:username',userController.detail_user)


    // router.get("/create-new-user", userController.newUser)

    // router.get("/list-user", userController.listUser)
    // router.get("/detail-user/:user", userController.detailUser)

    router.get("*", (req, res) => {
        return res.send("404, không tìm thấy trang")
    })

    return app.use("/" ,router)
}

// nhap /about server -> response -> "home"

module.exports = initWebRoutes
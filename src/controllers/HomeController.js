//render ve cac trang view tuong ung
//express dung de ket noi voi server 
//Thiết lập các lớp trung gian để trả về các HTTP request.
//Define router cho phép sử dụng với các hành động khác nhau dựa trên phương thức HTTP và URL.
//Cho phép trả về các trang HTML dựa vào các tham số.

import express from "express"

const getHomePage = (req, res)=>{
    return res.render("home",{data: {}})
}






// export default getHomePage
export { getHomePage };
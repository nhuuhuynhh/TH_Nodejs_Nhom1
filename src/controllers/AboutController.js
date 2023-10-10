import express from "express"

const aboutPage = (req, res)=>{
    return res.render("about",{data: {title: 'About website', content: 'admin@abc.com.vn'}})
}

export default aboutPage
import express from "express"

const homePage = async(req, res) => {
    return res.render("home",{data: {}})
}

const aboutPagee = async(req, res) => {
    return res.render("home",{data: {page: 'about'}})
}


module.exports = {
    homePage,
    aboutPagee
   
}

// export { homePage} ;
const configViewEngine = (app) => {
    app.set("view engine", "ejs") // import thu vien ejs
    app.set("views", "./src/views") // set thu muc views
}

module.exports = configViewEngine
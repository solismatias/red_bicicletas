let Bicicleta = require("../models/bicicleta")

exports.bicicleta_list = function (req, res) {
    res.render("bicicletas/index", { bicis: Bicicleta.allBicis })
}

// Cuando entramos al formulario
exports.bicicleta_create_get = function (req, res) {
    res.render("bicicletas/create")
}

// Cuando ya agregamos una nueva bicicleta 
exports.bicicleta_create_post = function (req, res) {
    // los parametros vienen por el formulario => req.body
    let bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo)
    bici.ubicacion = [req.body.latitud, req.body.longitud]
    Bicicleta.add(bici)

    res.redirect("/bicicletas")
}
// Cuando entramos al formulario
exports.bicicleta_update_get = function (req, res) {
    let bici = Bicicleta.findById(req.params.id)
    res.render("bicicletas/update", { bici })
}

// Cuando ya agregamos una nueva bicicleta 
exports.bicicleta_update_post = function (req, res) {
    let bici = Bicicleta.findById(req.params.id)
    bici.id = req.body.id
    bici.color = req.body.color
    bici.modelo = req.body.modelo
    bici.ubicacion = [req.body.latitud, req.body.longitud]

    res.redirect("/bicicletas")
}

exports.bicicleta_delete_post = function (req, res) {
    Bicicleta.removeById(req.body.id)

    res.redirect("/bicicletas")
}
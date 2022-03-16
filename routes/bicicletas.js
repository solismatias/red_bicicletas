let express = require("express")
let router = express.Router()
let bicicletaController = require("../controllers/bicicleta")

router.get("/", bicicletaController.bicicleta_list)
router.get("/create", bicicletaController.bicicleta_create_get)
router.post("/create", bicicletaController.bicicleta_create_post)
router.post("/delete/:id", bicicletaController.bicicleta_delete_post)
router.post("/update/:id", bicicletaController.bicicleta_update_post)
router.get("/update/:id", bicicletaController.bicicleta_update_get)

module.exports = router
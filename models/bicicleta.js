let Bicicleta = function (id, color, modelo, ubicacion) {
    this.id = id
    this.color = color
    this.modelo = modelo
    this.ubicacion = ubicacion
}

Bicicleta.prototype.toString = () => {
    return "id: " + this.id + " | color: " + this.color
}

Bicicleta.allBicis = []
Bicicleta.add = aBici => {
    Bicicleta.allBicis.push(aBici)
}

Bicicleta.findById = function (aBiciId) {
    let aBici = Bicicleta.allBicis.find(x => x.id == aBiciId)
    if (aBici)
        return aBici
    else
        throw new Error("No existe la bicicleta id: " + aBiciId)
}

Bicicleta.removeById = function (aBiciId) {
    let aBiciIndex = Bicicleta.allBicis.findIndex(x => x.id == aBiciId)
    Bicicleta.allBicis.splice(aBiciIndex, 1) // le indico desde que posicion quiero eliminar el elemento del array y cauntos elementos
}

// let a = new Bicicleta(1, "rojo", "urbana", [-34.559340412821996, -58.465884366871215])
// let b = new Bicicleta(2, "blanco", "urbana", [-34.57390119716306, -58.460545723883484])

// Bicicleta.add(a)
// Bicicleta.add(b)


module.exports = Bicicleta
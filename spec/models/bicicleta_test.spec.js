const Bicicleta = require("../../models/bicicleta")


beforeEach(() => Bicicleta.allBicis = [])

describe("Bicicleta.allBicis", () => {
    it("comienza vacia", () => {
        expect(Bicicleta.allBicis.length).toBe(0)
    })
})

describe("Bicicleta.add", () => {
    it("Agregamos una", () => {
        expect(Bicicleta.allBicis.length).toBe(0)

        let a = new Bicicleta(1, "rojo", "urbana", [-34.559340412821996, -58.465884366871215])
        Bicicleta.add(a)

        expect(Bicicleta.allBicis.length).toBe(1)
        expect(Bicicleta.allBicis[0]).toBe(a)
    })
})

describe("Bicicleta.findById", () => {
    it("debe devolver la bici con id 1", () => {
        expect(Bicicleta.allBicis.length).toBe(0)

        let a = new Bicicleta(1, "rojo", "urbana")
        let b = new Bicicleta(2, "azul", "montaña")
        Bicicleta.add(a)
        Bicicleta.add(b)

        let targetBici = Bicicleta.findById(1)
        expect(targetBici.id).toBe(1)
        expect(targetBici.color).toBe(a.color)
        expect(targetBici.modelo).toBe(a.modelo)

    })
})
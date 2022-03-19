const { default: axios } = require("axios")
const Bicicleta = require("../../models/bicicleta")


describe("Bicicleta API", () => {
    describe("GET bicicletas", (done) => {
        it("status 200", () => {
            // expect(Bicicleta.allBicis.length).toBe(0)
            let a = new Bicicleta(1, "verde", "ruta", [-34.559340412821996, -58.465884366871215])
            Bicicleta.add(a)
            axios.get('api/bicicletas')
                .then(response => expect(response.status).toBe(200))
        })
    })
})
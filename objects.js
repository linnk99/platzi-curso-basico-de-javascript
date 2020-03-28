var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function() {
        console.log(`Auto ${this.modelo} ${this.annio}`)
    }
}

// llamar propiedades de objetos
miAuto.marca
miAuto.detalleDelAuto()


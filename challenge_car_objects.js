function auto(marca, modelo, annio) {
    this.marca = marca
    this.modelo = modelo
    this.annio = annio
}

var marcas = ["Tesla", "Volsk Wagen", "Toyota", "Audi", "Alfa Romeo", "Hyundai", "Renault"]
var modelos = ["Model A", "Model B", "Model C", "Model D", "Model E", "Model F", "Model G"]
var annios = [2020, 2019, 2019, 2018, 2017, 2016, 2015, 2014, 2013]
var nuevosAutos = []

for (var i = 0; i < 30; i++) {
    nuevosAutos[i] = new auto (
        marcas[Math.floor(Math.random() * marcas.length)],
        modelos[Math.floor(Math.random() * modelos.length)],
        annios[Math.floor(Math.random()) * annios.length]
    )
}

console.log(nuevosAutos)
const lenguajes = {
    compialdos : ["Java","C","C++"],
    interpretados : ["Python", "PHP", "Javascript"]
}

const body = {
    apellidos : "Francia",
    nombres : "Jhon",
    edad : 41,
    estacasado: true
}
const {apellidos,
    nombres,
    edad,
    estacasado
} = body
console.log(
    apellidos,
    nombres,
    edad,
    estacasado
)
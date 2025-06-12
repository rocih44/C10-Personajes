console.log("Hola Parcial!!!");
const express = require("express");
const { makeFilter, makeFiltroCompuesto } = require("./filtros/filtros");
const personaje = require("../data/personajes.json");

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

app.post("/", (req, res) => {
    const r = req.body.map((f) => makeFilter(f.attribute, f.operator, f.value));
    const rta = personaje.filter((p) => r.every((f) => f(p)));
    res.status(201).json(rta);
});

app.post("/compuesto", (req, res) => {
    const r = req.body;
    const filtros = makeFiltroCompuesto(r);
    console.log(filtros.toString());
    const rta = personaje.filter((p) => filtros(p));
    res.status(201).json(rta);
});

app.listen(PORT, (err) => {
    if (err) {
    console.error(err.message);
    process.exit(1);
}
console.log(`Aplicacion inicada en el puerto: ${PORT}`);
});

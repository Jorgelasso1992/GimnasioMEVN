//Requires
const express = require('express');
const path = require("path");
var bodyParser = require('body-parser');
var db = require("./db");
//Inicializacion variables necesarias
const app = express();
const port = 8000;
//procesamiento de las peticiones
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    console.log("--------------" + "\n" + "URL: " + req.url + "\n" + "Request method: " + req.method);
    next();
})
app.get("/", function (req, res) {
    res.sendFile(path.resolve("./apirest/index.html"));
});
//peticiones de la API
app.get("/productos", function (req, res) {
    let productos = db.getProductos();
    if (productos == -1) {
        res.status(200);
        res.send({
            response: "ok",
            data: "No hay registros en la BD"
        });
    } else {
        res.status(200);
        res.send({
            response: "ok",
            data: productos
        });
    }
});

app.get("/producto", function (req, res) {
    let productoGet = db.getProducto(req.query.id);
    if (productoGet == -1) {
        res.status(404);
        res.send({
            response: "error",
            data: "El producto no fue encontrado."
        });
    } else {
        res.status(200);
        res.send({
            response: "ok",
            data: productoGet
        });
    }

});

app.post("/producto", function (req, res) {
    let productCreated = db.addProducto(
        req.body.nombre,
        req.body.marca,
        req.body.costo,
        req.body.precioventa,
        req.body.fecha_vencimiento
    );
    if (productCreated == -1) {
        res.status = 500;
        res.send({
            response: "error",
            data: productCreated
        });
    }
    else {
        res.status = 200;
        res.send({
            response: "ok",
            data: productCreated
        });
    }

});

app.delete("/producto", function (req, res) {
    let deleted = db.deleteProducto(req.body.id);
    if (deleted == -1) {
        res.status(400);
        res.send({
            response: "error",
            data: "El registro no se elimino, debido a alguna falla"
        });
    } else {
        res.status(200);
        res.send({
            response: "ok",
            data: "Registro eliminado correctamente"
        });
    }
});

app.put("/producto", function (req, res) {
    let productoActualizado = db.updateProducto(
        req.body.id,
        req.body.nombre,
        req.body.marca,
        req.body.costo,
        req.body.precioventa,
        req.body.fecha_vencimiento
    );
    if (productoActualizado == -1) {
        res.status(400);
        res.send({
            response: "error",
            data: "El registro no se pudo actualizar."
        });
    } else {
        res.status(200);
        res.send({
            response: "ok",
            data: productoActualizado
        });
    }
});
//Lanzamiento del servidor
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
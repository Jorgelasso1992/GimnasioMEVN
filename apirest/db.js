const { v4: uuidv4 } = require('uuid');
const { Producto } = require("./producto");

function getNewId() {
    return uuidv4();
}

let db = {};
db = {
    "uid1": new Producto("uid1", "Aceite", "TodoCasa", 1600, 2200, new Date(2021, 12, 28)),
    "uid2": new Producto("uid2", "Torta Chocolate", "Bimbo", 8400, 9900, new Date(2021, 9, 31)),
    "uid3": new Producto("uid3", "Mayonesa", "Naturalia", 2500, 3100, new Date(2022, 8, 24))
}

function addProducto(nombre, marca, costo, precioventa, fecha_vencimiento) {
    try {
        var id = getNewId();
        let producto = new Producto(id, nombre, marca, costo, precioventa, fecha_vencimiento);
        db[id] = producto;
        return id;
    } catch {
        return -1;
    }
}

function deleteProducto(id) {
    for (key in db) {
        if (key == id) {
            delete db[id];
            return true;
        }
    }
    return -1;
}

function updateProducto(id, nombre, marca, costo, precioventa, fecha_vencimiento) {
    for (key in db) {
        if (key == id) {
            let producto = new Producto(id, nombre, marca, costo, precioventa, fecha_vencimiento);
            db[id] = producto;
            return id;
        }
    }
    return -1;
}

function getProducto(id) {
    for (key in db) {
        if (key == id) {
            return db[id];
        }
    }
    return -1;
}

function getProductos() {
    let lista = [];
    for (key in db) {
        lista.push(db[key]);
    }
    if (lista.length == 0) {
        return -1;
    }
    return lista;
}

module.exports = {
    addProducto,
    deleteProducto,
    updateProducto,
    getProducto,
    getProductos
}
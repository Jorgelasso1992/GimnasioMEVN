class Producto {
    constructor(id, nombre, marca, costo, precioventa, fecha_vencimiento) {
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.costo = costo;
        this.precioventa = precioventa;
        this.fecha_vencimiento = fecha_vencimiento;
    }
}
module.exports={
    Producto
}
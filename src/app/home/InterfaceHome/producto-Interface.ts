export interface Producto {
    idProducto:    number;
    producto:      string;
    idSeccion:     number;
    descripcion:   string;
    idMarca:       number;
    idColor:       number;
    idTalla:       number;
    valorUnitario: number;
    cantidad:      number;
    imagen:        string;
    seccion:       Seccion;
    marca:         Marca;
    color:         Color;
    talla:         Talla;
}

export interface Color {
    idColor: number;
    color:   string;
}

export interface Marca {
    idMarca: number;
    marca:   string;
}

export interface Seccion {
    idSeccion: number;
    seccion:   string;
}

export interface Talla {
    idTalla: number;
    talla:   string;
}



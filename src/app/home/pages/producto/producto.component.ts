import { Component } from '@angular/core';
import { ProductoService } from '../../service/producto.service';
import { Producto } from '../../InterfaceHome/producto-Interface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  termino: string="";
  hayError: boolean= false;
  productos: Producto[] = [];

  constructor(private productoService:ProductoService){}
  
  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);

    this.productoService.buscarProductos(this.termino).subscribe((productos)=>{
      console.log(productos);
      this.productos = productos

    }, (err) => {
      this.hayError = true;
      this.productos = [];
    } );

  }
  
  sugerencias(termino: string){
     this.hayError= false;
     //TODO:Crear sugerencias 

  }


}

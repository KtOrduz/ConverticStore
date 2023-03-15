import { Component } from '@angular/core';
import { ProductoService } from '../../service/producto.service';
import { Producto } from '../../InterfaceHome/producto-Interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  termino: string="";
  hayError: boolean= false;
  productos: Producto[] = [];
  mostrarLogin:boolean = false;
  mostrarLogout:Boolean = true;

  constructor(private productoService:ProductoService, private router: Router){}
  
  buscar(){
    this.hayError = false;
    console.log(this.termino);

    this.productoService.buscarProductos(this.termino).subscribe((productos)=>{
      console.log(productos);
      this.productos = productos

    }, (err) => {
      this.hayError = true;
      this.productos = [];
    } )
  }

  irALogin(){
    this.router.navigate(['login']);
    this.mostrarLogin = true;
    this.mostrarLogout = false;
    }

    irALogout(){
      this.router.navigate(['']);
      this.mostrarLogout = true;
      this.mostrarLogin = false;
          }

}

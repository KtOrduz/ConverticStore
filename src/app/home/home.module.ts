import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HombreComponent } from './pages/hombre/hombre.component';
import { MujerComponent } from './pages/mujer/mujer.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ProductoCardComponent } from './ComponentsHome/producto-card/producto-card.component';
import { ProductoBuscarComponent } from './ComponentsHome/producto-buscar/producto-buscar.component';


@NgModule({
  declarations: [
    HombreComponent,
    MujerComponent,
    ProductoComponent,
    NavbarComponent,
    ProductoCardComponent,
    ProductoBuscarComponent,

  ],
  exports: [
    HombreComponent,
    MujerComponent,
    ProductoComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
    RouterModule 
  ]
})
export class HomeModule { }

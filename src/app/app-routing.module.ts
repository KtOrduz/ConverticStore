import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { HombreComponent } from './home/pages/hombre/hombre.component';
import { MujerComponent } from './home/pages/mujer/mujer.component';
import { ProductoComponent } from './home/pages/producto/producto.component';

const routes: Routes = [

{
  path:'home',
  component: HombreComponent,
  pathMatch: 'full'
},

{
  path:'mujer',
  component: MujerComponent
},

{
  path:'productos/:id',
  component: ProductoComponent
},

{ path: 'login', 
component: LoginComponent  
},

{ path: 'registro',
component: RegistroComponent 
},

{ path: '**',
// redirectTo: '/' }|
  component: HombreComponent 
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

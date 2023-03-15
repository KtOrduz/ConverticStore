import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/services/RegistroService/registro.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string= "";
  password: string="";

  constructor(private registroService: RegistroService, private router: Router){
    
  }

  login(){
    
    this.registroService.loginUser(this.email, this.password).subscribe(result => {
      if(result){
        this.router.navigate(['home']);
      }else{
        alert("Usuario y/o contraseña invalida")
      }
    });
  }

  irARegistro(){
   
    this.router.navigate(['registro']);
    
  }

}

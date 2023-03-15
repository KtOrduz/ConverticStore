import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/services/RegistroService/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  nDocumento: string = "";
  nombres: string= "";
  apellidos: string ="";
  correoElectronico: string= "";
  contrasenna: string= "";
  idDocumento: number=0;
  confirmarContrasenna: string= "";
  regex: any= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
 

  constructor(private registroService: RegistroService, private router: Router){
   
  }

  registro(){
    if( this.contrasenna.length > 5){
          if(this.regex.test(this.contrasenna)){
            if(this.contrasenna == this.confirmarContrasenna){
              this.registroService.registrarUsuario(this.nDocumento, this.nombres, this.apellidos,  this.correoElectronico,  this.contrasenna, this.idDocumento).subscribe(result => {
              if(result){
                this.router.navigate(['login']);
              }else{
                alert("Usuario no registrado");
              }});
              
            }else{
              alert("Las contraseña y la confirmación de contraseña no coincide");
            }
            
          }else{
            alert("La contraseña debe tener mayusculas, minusculas y numeros");
          }        
        }else{
          alert("La contraseña debe tener minimo 5 caracteres");
        }
      
      }

    
  
  irALogin(){
    this.router.navigate(['login']);
  }
  

}


// this.registroService.registrarUsuario(this.nDocumento, this.nombres, this.apellidos,  this.correoElectronico,  this.contrasenna, this.idDocumento).subscribe(result => {
//   if( this.contrasenna.length > 5){
//     if(this.regex.test(this.contrasenna)){
//       if(this.contrasenna == this.confirmarContrasenna){
//         if(result){
//           this.router.navigate(['login']);
//         }else{
//           alert("Usuario no registrado");
//         }
//         console.log(result);
//       }else{
//         alert("Las contraseña y la confirmación de contraseña no coincide");
//       }
      
//     }else{
//       alert("La contraseña debe tener mayusculas, minusculas y numeros");
//     }        
//   }else{
//     alert("La contraseña debe tener minimo 5 caracteres");
//   }

// });




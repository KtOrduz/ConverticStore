import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private route: HttpClient) {  }

  loginUser(email: string, password: string){
    return this.route.post('http://localhost:8080/registro/login', {"correoElectronico":email, "contrasenna":password});
  }

registrarUsuario(nDocumento:String, nombres:String, apellidos:String, correoElectronico:string, contrasenna:string, idDocumento:number){
  return this.route.post('http://localhost:8080/registro/guardar', {"nDocumento":nDocumento,  "nombres":nombres,  "apellidos":apellidos,  "correoElectronico":correoElectronico, "contrasenna":contrasenna, "idDocumento":idDocumento } )
}

}

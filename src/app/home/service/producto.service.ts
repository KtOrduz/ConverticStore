import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../InterfaceHome/producto-Interface';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl: string ='http://localhost:8080/productos';

  constructor(private http: HttpClient) { }

buscarProductos(termino:string): Observable<Producto[]>{
  const url= `${this.apiUrl}/${termino}`;
  return this.http.get<Producto[]>(url);
}

buscarProductosHombre(termino:string): Observable<Producto[]>{
  const url= `${this.apiUrl}/hombre/${termino}`;
  return this.http.get<Producto[]>(url);
}

buscarProductosMujer(termino:string): Observable<Producto[]>{
  const url= `${this.apiUrl}/mujer/${termino}`;
  return this.http.get<Producto[]>(url);
} 

verProductosMujer(termino:string): Observable<Producto[]>{
  const url= `${this.apiUrl}/seccion/1`;
  return this.http.get<Producto[]>(url);
} 

verProductosHombre(termino:string): Observable<Producto[]>{
  const url= `${this.apiUrl}/seccion/2`;
  return this.http.get<Producto[]>(url);
} 
}

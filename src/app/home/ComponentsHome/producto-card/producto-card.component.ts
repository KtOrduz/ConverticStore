import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../InterfaceHome/producto-Interface';

@Component({
  selector: 'app-producto-card',
  templateUrl: './producto-card.component.html',
  styleUrls: ['./producto-card.component.css']
})
export class ProductoCardComponent {

  @Input() productos: Producto[] = [];

  constructor() {
  }
ngOnInit(): void{}

}

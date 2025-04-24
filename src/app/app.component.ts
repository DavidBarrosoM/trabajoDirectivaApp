import { Component,OnInit } from '@angular/core';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  tituloPagina = 'Registro de usuarios';
  mensaje = '';
  registrado = false;
  nombre: string = '';
  apellido: string = '';
  entradas = [
      {titulo:"Pythor cada día mas presente"},
      {titulo:"Java presente desde hace más de 20 años"},
      {titulo:"JavaScript cada vez más funcional"},
      {titulo:"Kotlin potencia para tus apps"},
      {titulo:"¿Dónde quedó pascal?"},
  ];
/* Esto no funciona
  entradas: Object[];
  constructor() {
    this.entradas = [
      {titulo:"Pythor cada día mas presente"},
      {titulo:"Java presente desde hace más de 20 años"},
      {titulo:"JavaScript cada vez más funcional"},
      {titulo:"Kotlin potencia para tus apps"},
      {titulo:"¿Dónde quedó pascal?"},
    ];
  }
    */
  registrarUsuario(){
    this.registrado = true;
    this.mensaje = 'Usuario registrado con éxito';
  }
}

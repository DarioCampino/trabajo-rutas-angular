import { formatDate } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';

  //alunos tipos de datos
  name: string = 'Dario Pantoja';
  age: number = 35;
  phone: null = null;
  otrotipo: undefined = undefined;
  cualquierdato: any;
  variostipos: string | number = 'esto es un dato';
  listCars:Array<any>=[1,'cadena',null];//definicion de una array o lista
  //listcars es nombre
  //Array<any>= tipo
  //[1,'cadena',null] contenido

  listCar2: Array<CarModel>=[
    {
      marca: 'Ford',
      modelo: 'year',
      year: 2021
    },
    {
      marca: 'chevrolet',
      modelo: 'aveo',
      year: 2020
    }
  ];

  listproductos: Array<productos>=[
    {
      codigo_interno: 1234,
      nombre: 'Jabon de baño',
      valor: 2000,
      cantidad: 2,
      tipo_de_embalaje: 'caja',
      precio_de_costo: 2.500,
    },
    {
      codigo_interno: 9874,
      nombre: 'papas fritas',
      valor: 2000,
      cantidad: 1,
      tipo_de_embalaje: 'bolsa',
      precio_de_costo: 1.200,
    },
    {
      codigo_interno: 300,
      nombre: 'bolsa de leche',
      valor: 4000,
      cantidad: 1,
      tipo_de_embalaje: 'caja',
      precio_de_costo: 3.500,
    }

  ]


  //Definicion de objetos

  car: any = {
    marca:'chevrolet',
    modelo:'spark',
    year:2000
  }

  car2: CarModel = {
    marca: 'bmw',
    modelo: 'porche',
    year: 2022
  }

  mimascota: mascota = {
    tipo: 'perro',
    nombre: 'toby',
    edad: 5,
    raza: 'beagle',
    enfermedades: false
  }

  miordenador: ordenador = {
    marca: 'acer',
    modelo: 'aspiere',
    cantidad_memoria: 250,
    cantidad_ram: 8,
    valor: 1800000

  }
}

//Inferces es definir un contrato de operacion, que condiciona  las variables a compartarse
  //de una manera determinada

interface CarModel{
  marca:string;
  modelo:string;
  year:number;
}

interface mascota{
  tipo: string;
  nombre: string;
  edad: number;
  raza: string;
  enfermedades: boolean;
}

interface ordenador{
  marca: string;
  modelo: string;
  cantidad_memoria: number;
  cantidad_ram: number;
  valor: number;
}

//Definir 3 listas que dependan de la definicion de datos de una interface denominada productos
//en cada lista definir 2 objetos dependientes de la interface

//codigo Interno, nombre, valor, cantidad, tipo de embalaje, precio de costo.

interface productos {
  codigo_interno: number | string;
  nombre: string;
  valor: number;
  cantidad: number;
  tipo_de_embalaje: string;
  precio_de_costo: any;
}

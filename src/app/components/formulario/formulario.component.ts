import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() parametrosSeleccionados = new EventEmitter<any>()

  categoriaSeleccionada = "top";
  //paisSeleccionado = "us"

  categorias: any[] = [
    {value: "politics", nombre: "Politica"},
    {value: "science", nombre: "Ciencia"},
    {value: "business", nombre: "Negocios"},
    {value: "environment", nombre: "Medio Ambiente"},
    {value: "food", nombre: "Alimentación"},
    {value: "health", nombre: "Salud"},
    {value: "sports", nombre: "Deportes"},
    {value: "technology", nombre: "Tecnología"},
    {value: "top", nombre: "Top"},
    {value: "world", nombre: "Mundo"},
    {value: "entertainment", nombre: "Entretenimiento"},

  ];

  //paises: any[] = [

//    {value: "us", nombre: "Estados Unidos"},




  //]




  constructor() { }

  ngOnInit(): void {

    const PARAMETROS = {
      categoria: this.categoriaSeleccionada = "top",
//      pais: this.paisSeleccionado = "us",

    }
    this.parametrosSeleccionados.emit(PARAMETROS)

  }

  buscarNoticia() {
    //EJEMPLO PARA PROBAR QUE ENVIA DATOS A FORMULARIO
    //console.log(this.categoriaSeleccionada);
    //console.log(this.paisSeleccionado);

    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
//      pais: this.paisSeleccionado
    }

    this.parametrosSeleccionados.emit(PARAMETROS)
  }



}

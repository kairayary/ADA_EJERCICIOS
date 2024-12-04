import  Auto  from "./auto";
import { ordenarPorAño, ordenarPorMarca } from "./utils";


class Concesionaria {
     //inventario es array de objeto de auto
    private inventario: Auto[];
  
    constructor() {
      this.inventario = [];
    }
  
    //recibe el objeto auto y lo agrega al array inventario
    agregarAuto(auto: Auto) {
      this.inventario.push(auto);
    }
  
    //Filtra el array inventario para eliminar 
    //el auto que coincida con la marca y el modelo proporcionados. 
    eliminarAuto(marca: string, modelo: string) {
      this.inventario = this.inventario.filter((auto) => auto.marca !== marca || auto.modelo !== modelo);
    }
  
    //devuelve el inventario completo
    obtenerInventario() {
      return this.inventario;
    }
  
    ordenarPorAño() {
      this.inventario = ordenarPorAño(this.inventario);
    }
  
    ordenarPorMarca() {
      this.inventario = ordenarPorMarca(this.inventario);
    }
  }
  
  export default Concesionaria;
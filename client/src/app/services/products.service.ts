//SERVICIO CONEXION A BACK PARA CON API GESTIONAR DB
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProductsService {

  BASE_URL: string = 'http://localhost:3000';

  options: Object = {withCredentials:true};

  constructor(private http: Http) {}

  handleError(e) {
  return Observable.throw(e.json().message);
  }

  getProducts() {
    return this.http.get(`${this.BASE_URL}/api/product`, this.options)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  getProduct(id) {
    return this.http.get(`${this.BASE_URL}/api/product/${id}`, this.options)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  edit(product) {
    return this.http.put(`${this.BASE_URL}/products/${product.id}`, product, this.options)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  remove(id) {
    return this.http.delete(`${this.BASE_URL}/product/${id}`, this.options)
      .map((res) => res.json())
      .catch(this.handleError);
  }
}


//SERVICIO DE INJECCION DE DATOS PARA FRONT MIENTRAS NO ME FUNCIONA DB
// import { Injectable } from '@angular/core';
//
// @Injectable()
// export class ProductsService {
//
//   private products:Product[] = [
//     {
//       name: "LICOR PAX",
//       category: "LICORES",
//       description: "Para la elaboración de este licor, seleccionamos cuidadosamente cerca de 40 botánicos y especias entre los que se encuentran la raíz de angélica, la canela de china, el cardamomo y la menta piperita, y con ellos obtenemos nuestro preciado Licor Pax con su característico sabor suave, cuya receta secreta se encuentra hoy custodiada por el Prior del Monasterio, que tiene encomendado protegerla y transmitirla cuando llegue el momento. Tras la maceración de los botánicos y especias con los mejores Orujos, el licor se envejece en barricas de roble que le dan ese sabor único que ha sido objeto de deseo desde hace siglos",
//       img: "assets/img/licor_pax.png",
//       price: "9.50",
//       stock: "10",
//       logo1:"assets/img/grandespensa-logo.png",
//       logo2:"assets/img/D-O-Cebreiro-logo.png"
//     },
//     {
//       name: "LICOR DE CAFÉ",
//       category: "LICORES",
//       description: "Tonalidad caoba, brillante y con destellos anaranjados, aromas a café de gran finura con interesantes y suaves tonos ahumados y piel de cítricos. Cálido y suave en boca, amable, sabroso y repleto de sensaciones aterciopeladas con final de boca persistente y muy personal.",
//       img: "assets/img/licores_pax_y_cafe.jpg",
//       stock: "20",
//       price: "8.50",
//       logo1:"assets/img/grandespensa-logo.png",
//       logo2:"assets/img/D-O-Cebreiro-logo.png"
//     },
//     {
//       name: "LICOR DE ARANDANOS",
//       category: "LICORES",
//       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam assumenda ipsam voluptates nemo, recusandae eveniet voluptatem similique suscipit velit at praesentium voluptatum, dolor iure veritatis quod dignissimos, unde perferendis. Facere?",
//       img: "assets/img/licor_arandanos.png",
//       stock: "30",
//       price: "8.50",
//       logo1:"assets/img/grandespensa-logo.png",
//       logo2:"assets/img/D-O-Cebreiro-logo.png"
//     },
//     {
//       name: "QUESO D.O. CEBREIRO 500gr.",
//       category: "QUESOS",
//       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam assumenda ipsam voluptates nemo, recusandae eveniet voluptatem similique suscipit velit at praesentium voluptatum, dolor iure veritatis quod dignissimos, unde perferendis. Facere?",
//       img: "assets/img/queso_cebreiro_500.png",
//       price: "5.00",
//       stock: "40",
//       logo1:"assets/img/grandespensa-logo.png",
//       logo2:"assets/img/D-O-Cebreiro-logo.png"
//     },
//     {
//       name: "QUESO D.O. CEBREIRO 800gr.",
//       category: "QUESOS",
//       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam assumenda ipsam voluptates nemo, recusandae eveniet voluptatem similique suscipit velit at praesentium voluptatum, dolor iure veritatis quod dignissimos, unde perferendis. Facere?",
//       img: "assets/img/queso_cebreiro_800.jpeg",
//       price: "8.00",
//       stock: "50",
//       logo1:"assets/img/grandespensa-logo.png",
//       logo2:"assets/img/D-O-Cebreiro-logo.png"
//     },
//     {
//       name: "ROSCA DE CACHO",
//       category: "DULCES",
//       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam assumenda ipsam voluptates nemo, recusandae eveniet voluptatem similique suscipit velit at praesentium voluptatum, dolor iure veritatis quod dignissimos, unde perferendis. Facere?",
//       img: "assets/img/rosca_cacho.png",
//       price: "7.50",
//       stock: "60",
//       logo1:"assets/img/grandespensa-logo.png",
//       logo2:"assets/img/D-O-Cebreiro-logo.png"
//     },
//     {
//       name: "TARTA DE ALMENDRA",
//       category: "DULCES",
//       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam assumenda ipsam voluptates nemo, recusandae eveniet voluptatem similique suscipit velit at praesentium voluptatum, dolor iure veritatis quod dignissimos, unde perferendis. Facere?",
//       img: "assets/img/tarta_almendra.png",
//       price: "7.50",
//       stock: "70",
//       logo1:"assets/img/grandespensa-logo.png",
//       logo2:"assets/img/D-O-Cebreiro-logo.png"
//     },
//     {
//       name: "PASTAS ARTESANAS",
//       category: "DULCES",
//       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam assumenda ipsam voluptates nemo, recusandae eveniet voluptatem similique suscipit velit at praesentium voluptatum, dolor iure veritatis quod dignissimos, unde perferendis. Facere?",
//       img: "assets/img/pastas_artesanas.png",
//       price: "5.00",
//       stock: "80",
//       logo1:"assets/img/grandespensa-logo.png",
//       logo2:"assets/img/D-O-Cebreiro-logo.png"
//     },
//     {
//       name: "MIEL DE FLORES DE SAMOS 500ml.",
//       category: "DULCES",
//       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam assumenda ipsam voluptates nemo, recusandae eveniet voluptatem similique suscipit velit at praesentium voluptatum, dolor iure veritatis quod dignissimos, unde perferendis. Facere?",
//       img: "assets/img/miel_flores_samos_500.png",
//       price: "6.00",
//       stock: "15",
//       logo1:"assets/img/grandespensa-logo.png",
//       logo2:"assets/img/D-O-Cebreiro-logo.png"
//     },
//     {
//       name: "MIEL DE FLORES DE SAMOS 1000ml.",
//       category: "DULCES",
//       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam assumenda ipsam voluptates nemo, recusandae eveniet voluptatem similique suscipit velit at praesentium voluptatum, dolor iure veritatis quod dignissimos, unde perferendis. Facere?",
//       img: "assets/img/miel_flores_samos_1000.jpeg",
//       price: "9.00",
//       stock: "25",
//       logo1:"assets/img/grandespensa-logo.png",
//       logo2:"assets/img/D-O-Cebreiro-logo.png"
//     },
//     {
//       name: "CHOCOLATE PURO 1kg.",
//       category: "CHOCOLATES",
//       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam assumenda ipsam voluptates nemo, recusandae eveniet voluptatem similique suscipit velit at praesentium voluptatum, dolor iure veritatis quod dignissimos, unde perferendis. Facere?",
//       img: "assets/img/choco_puro.png",
//       price: "10.00",
//       stock: "35",
//       logo1:"assets/img/grandespensa-logo.png",
//       logo2:"assets/img/D-O-Cebreiro-logo.png"
//     },
//     {
//       name: "CHOCOLATE A LA TAZA 125gr.",
//       category: "CHOCOLATES",
//       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam assumenda ipsam voluptates nemo, recusandae eveniet voluptatem similique suscipit velit at praesentium voluptatum, dolor iure veritatis quod dignissimos, unde perferendis. Facere?",
//       img: "assets/img/choco_taza.png",
//       price: "1.50",
//       stock: "45",
//       logo1:"assets/img/grandespensa-logo.png",
//       logo2:"assets/img/D-O-Cebreiro-logo.png"
//     },
//     {
//       name: "CHOCOLATE CON LECHE 125gr.",
//       category: "CHOCOLATES",
//       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam assumenda ipsam voluptates nemo, recusandae eveniet voluptatem similique suscipit velit at praesentium voluptatum, dolor iure veritatis quod dignissimos, unde perferendis. Facere?",
//       img: "assets/img/choco_leche.png",
//       price: "1.50",
//       stock: "55",
//       logo1:"assets/img/grandespensa-logo.png",
//       logo2:"assets/img/D-O-Cebreiro-logo.png"
//     }
//   ];
//
//
//
  // constructor() {
  //   console.log("Servicio listo para usar!!");
  //
  // }

  // getProducts(){
  //     return this.products;
  // }
  //
  // getProduct( idx: string ){
  //   return this.products[idx];
  //
  // }
//
//   searchProduct( word:string ):Product[]{
//
//     let productsArr:Product[] = [];
//     word = word.toLowerCase();
//
//     for( let product of this.products ){
//       let name = product.name.toLowerCase();
//
//       if ( name.indexOf( word ) >= 0 ){
//         productsArr.push( product );
//       }
//     }
//     return productsArr;
//   }
//
//
// }
//
// export interface Product{
//   name: string;
//   category: string;
//   description: string;
//   img: string;
//   price: string;
//   stock: string;
//   logo1: string;
//   logo2: string;
// };

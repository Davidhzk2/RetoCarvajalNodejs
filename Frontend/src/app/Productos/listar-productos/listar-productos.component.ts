import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProductoService} from '../../services/producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  products: any[] = [];
  productData:any;
  successMessage: String;
  errorMessage: String;
  price : String;
  constructor(private  product: ProductoService, private router:Router) {
    this.productData = {};
    this.successMessage = '';
    this.errorMessage = '';
    this.price = '1200';
   }

  ngOnInit(): void {
  this.product.listarProductos().subscribe(
    (res: any)=>{
      // console.log(res);
      this.products = res;
      console.log(this.products);
    },
    // (err)=>{
    //   console.log(err.error);
    //   this.errorMessage = err.error;
    //   this.closeAlert();
    // }
  )
    
  }
  closeAlert(){
    setTimeout(()=>{
      this.successMessage = '';
      this.errorMessage = '';
    },3000);
  }
  closeX(){

  }

}

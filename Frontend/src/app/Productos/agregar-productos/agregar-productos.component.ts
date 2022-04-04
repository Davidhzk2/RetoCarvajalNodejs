import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProductoService} from '../../services/producto.service';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.css']
})
export class AgregarProductosComponent implements OnInit {
    productData:any;
    successMessage: String;
    errorMessage: String;

  constructor(private  product: ProductoService, private router:Router) {
    this.productData = {};
    this.successMessage = '';
    this.errorMessage = ''
   }

  ngOnInit(): void {
  }
  
  addProduct(){
    if(
      !this.productData.nombre ||
      !this.productData.precio ||
      !this.productData.cantidadStock){
        console.log('Regsitro fallido: Data Incompleta');
        this.errorMessage = 'Regsitro fallido: Data Incompleta';
        this.closeAlert();
        this.productData = {};
      }else{
        this.product.registrarProductos(this.productData).subscribe(
          (res: any) =>{
            console.log(res);
            this.productData = {};
            this.router.navigate(['/']);
          },
          (err: any)=>{
            this.errorMessage = err.error;
            this.closeAlert();
            this.productData = {};
          }
        )
      }
  }
  closeAlert() {
    setTimeout(() => {
      this.errorMessage = '';
    }, 3000);
  }
  closeX() {
    this.errorMessage = '';
  }

}

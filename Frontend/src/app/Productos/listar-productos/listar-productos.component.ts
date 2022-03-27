import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProductoService} from '../../services/producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {

  productData:any;
  successMessage: String;
  errorMessage: String;

  constructor(private  product: ProductoService, private router:Router) {
    this.productData = {};
    this.successMessage = '';
    this.errorMessage = '';
   }

  ngOnInit(): void {
    console.log('Cargando prodcutos');
    
  }

}

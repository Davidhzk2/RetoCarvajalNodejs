import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  public env:String;

  constructor(private http: HttpClient) { 
    this.env = environment.APP_URL;
  }

  listarProductos(){
    return this.http.get(this.env + "products/listarProductos");
  }
}

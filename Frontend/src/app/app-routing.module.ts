import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// importar componentes 
import {ListarProductosComponent} from './Productos/listar-productos/listar-productos.component';
import {AgregarProductosComponent} from './Productos/agregar-productos/agregar-productos.component';

const routes: Routes = [
  {
    path: '',
    component: ListarProductosComponent,
    pathMatch: 'full'
  },
  {
    path: 'addProduct',
    component:AgregarProductosComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

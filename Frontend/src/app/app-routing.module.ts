import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// importar componentes 
import {ListarProductosComponent} from './Productos/listar-productos/listar-productos.component';

const routes: Routes = [
  {
    path: '',
    component: ListarProductosComponent,
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

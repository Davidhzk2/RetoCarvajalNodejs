import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Componentes 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarProductosComponent } from './Productos/listar-productos/listar-productos.component';
import { HeaderComponent } from './Home/header/header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// Servicios 
import {ProductoService} from './services/producto.service';

// Tools
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 

// 
import { HttpClientModule,HTTP_INTERCEPTORS } from "@angular/common/http";
import { AgregarProductosComponent } from './Productos/agregar-productos/agregar-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarProductosComponent,
    AgregarProductosComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

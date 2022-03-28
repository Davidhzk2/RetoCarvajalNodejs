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
import {MatCardModule} from '@angular/material/card'

// 
import { HttpClientModule,HTTP_INTERCEPTORS } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ListarProductosComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

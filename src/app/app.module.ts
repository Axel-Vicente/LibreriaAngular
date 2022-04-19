import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // porque http a secas esta deprecado
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibreriaService } from './Service/Libreria.service';
import { LibrosComponent } from './Libros/libros.component';
import { LibreriasComponent } from './Librerias/librerias.component';
import { AutoresComponent } from './Autores/autores.component';
import { AutoresEnLibreriasComponent } from './AutoresEnLibrerias/AutoresEnLibrerias.component';
import { DesplegableComponent } from './Desplegable/Desplegable.component';

const appRutas: Routes = [
  { path: 'librerias', component: LibreriasComponent },
  { path: 'autores', component: AutoresComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'desplegable', component: AutoresEnLibreriasComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    LibreriasComponent,
    AutoresComponent,
    DesplegableComponent,
    AutoresEnLibreriasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRutas)
  ],
  providers: [LibreriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

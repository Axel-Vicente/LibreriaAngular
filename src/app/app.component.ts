import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div style="padding:10px">
  <ul class="list-group">
    <li class="list-group-item"><a routerLink="autores">AUTORES</a></li>
    <li class="list-group-item"><a routerLink="librerias">LIBRERIAS</a></li>
    <li class="list-group-item"><a routerLink="libros">LIBROS</a></li>
    <li class="list-group-item"><a routerLink="desplegable">DESPLEGABLE</a></li>
  </ul>
  <router-outlet></router-outlet>
</div>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LibreriaAngularExamenAxel';
}

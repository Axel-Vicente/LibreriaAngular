import { Component, OnInit } from "@angular/core";
import { LibreriaService } from "../Service/Libreria.service";
import { Libros } from "./libros";

@Component({
    selector: 'app-libros',
    templateUrl: './libros.component.html',
    providers: [LibreriaService]
})

export class LibrosComponent implements OnInit {

    libros: Libros[] = [];
    constructor(public LosLibros: LibreriaService) { }

    ngOnInit() {
        this.LosLibros.getLibros().subscribe(datosLibros => this.libros = datosLibros)
    }
}
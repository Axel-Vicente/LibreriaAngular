import { Component, OnInit } from "@angular/core";
import { LibreriaService } from "../Service/Libreria.service";
import { Autores } from "./autores";

@Component({
    selector: 'app-autores',
    templateUrl: './autores.component.html',
    providers: [LibreriaService]
})

export class AutoresComponent implements OnInit {

    autores: Autores[] = [];
    constructor(public LosAutores: LibreriaService) { }

    ngOnInit() {
        this.LosAutores.getAutores().subscribe(datosAutores => this.autores = datosAutores)
    }
}
import { Component, OnInit } from "@angular/core";
import { LibreriaService } from "../Service/Libreria.service";
import { Autores } from "../Autores/autores";

@Component({
    selector: 'app-autoresEnLibrerias',
    templateUrl: './AutoresEnLibrerias.component.html',
    providers: [LibreriaService]
})

export class AutoresEnLibreriasComponent implements OnInit {

    autores: Autores[] = [];
    constructor(public LosAutores: LibreriaService) { }

    seleccionado: number = 1;

    onChangeSeleccionado(opcionSeleccionada: number) {
        this.seleccionado = opcionSeleccionada;
    }

    getNumAutores(){
        return this.autores.filter(autor => autor.idLibreria == this.seleccionado).length;
    }

    ngOnInit() {
        this.LosAutores.getAutores().subscribe(datosAutores => this.autores = datosAutores)
    }
}
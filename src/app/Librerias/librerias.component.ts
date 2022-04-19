import { Component, OnInit } from "@angular/core";
import { LibreriaService } from "../Service/Libreria.service";
import { Librerias } from "./librerias";

@Component({
    selector: 'app-librerias',
    templateUrl: './librerias.component.html',
    providers: [LibreriaService]
})

export class LibreriasComponent implements OnInit {

    librerias: Librerias[] = [];
    constructor(public LasLibrerias: LibreriaService) { }

    ngOnInit() {
        this.LasLibrerias.getLibrerias().subscribe(datosLibrerias => this.librerias = datosLibrerias)
    }
}
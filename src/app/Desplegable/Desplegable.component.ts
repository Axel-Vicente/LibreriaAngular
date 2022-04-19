import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { LibreriaService } from "../Service/Libreria.service";
import { Librerias } from "../Librerias/librerias";

@Component({
    selector: 'app-desplegable',
    templateUrl: './Desplegable.component.html',
    providers: [LibreriaService]
})

export class DesplegableComponent implements OnInit {

    librerias: Librerias[] = [];
    constructor(public LasLibrerias: LibreriaService) { }

    ngOnInit() {
        this.LasLibrerias.getLibrerias().subscribe(datosLibrerias => this.librerias = datosLibrerias)
    }

    @Output()
    globalElegido: EventEmitter<number> = new EventEmitter<number>();
    libreriaSeleccionada: number = 1;

    onChangeLibreria(){
        this.globalElegido.emit(this.libreriaSeleccionada);
    }

    @Input()
    autores: number = 0;
}
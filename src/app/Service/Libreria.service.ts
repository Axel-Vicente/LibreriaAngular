import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
import { Libros } from "../Libros/libros";
import { Librerias } from "../Librerias/librerias";
import { Autores } from "../Autores/autores";

@Injectable()
export class LibreriaService {

    constructor(private _http: HttpClient){}

    getLibros(): Observable<Libros[]>{
        const path = "http://localhost:61200/api/libro";
        return this._http.get<Libros[]>(path);
    }

    getLibrerias(): Observable<Librerias[]>{
        const path = "http://localhost:61200/api/libreria";
        return this._http.get<Librerias[]>(path);
    }

    getAutores(): Observable<Autores[]>{
        const path = "http://localhost:61200/api/autor";
        return this._http.get<Autores[]>(path);
    }
}
import { Injectable } from "@angular/core";
import { Pessoa } from "../model/pessoa";
import { Observable } from "rxjs";
import { HttpClient} from '@angular/common/http';

const URL = "assets/data/pessoas.json"

@Injectable({providedIn: 'root'})
export class PessoaService {
    constructor(private http: HttpClient) { }

    salvar(pessoa: Pessoa) {
        console.log('salvando...') //retorno
        console.log(pessoa)
    }

    listar(): Observable<Pessoa[]> { //retorna um array
        return this.http.get<Pessoa[]>(URL) //retorna um observable de pessoas por meio de um get
    } 
}
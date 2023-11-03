import { Component, OnInit } from '@angular/core';
import {PessoaService} from '../services/pessoa.service';
import {Observable} from 'rxjs';
import { Pessoa } from '../model/pessoa';

@Component({
    selector: 'app-lista-pessoa',
    templateUrl: './lista-pessoas-page.component.html'
})

export class ListaPessoasPage implements OnInit {

    pessoas!: Observable<Pessoa[]>

    constructor(private service: PessoaService) {} //recebe o service

    ngOnInit() {}
    //métodos para a lista de pessoas
    salvar(pessoa: Pessoa) {
        this.service.salvar(pessoa)
    }

    listar() {
        this.pessoas = this.service.listar()
    }
}
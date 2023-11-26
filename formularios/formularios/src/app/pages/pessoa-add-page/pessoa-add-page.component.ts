import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pessoa-add-page',
  templateUrl: './pessoa-add-page.component.html',
  styleUrls: ['./pessoa-add-page.component.css']
})
export class PessoaAddPageComponent {

  hobies = [
    'Dançar',
    'Passear',
    'Jogar futebol'
  ]

  formGroup = this.formBuilder.group({
    nome: ['', Validators.required],
    email: ['', Validators.email],
    hobie:['']
  })

  constructor(private formBuilder: FormBuilder) {} //transformando o formulário em reativo

  salvar() {
    console.log('salvando pessoa')
    console.log(this.formGroup.value)
    }
  }

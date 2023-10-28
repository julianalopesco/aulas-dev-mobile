import { Component } from '@angular/core';
import { ClientService } from './services/cliente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-primeira-aula';
  descricao1 = 'Descricao';

clientePremium = false; 

nome = ""

valores = [{
  descricao: 'teste',
  nome: 'nome',
  id: 1
},{
  descricao: 'desricao 2',
  nome: 'nome 2',
  id: 2
}]

umadata = new Date()
umDinheiro = 10.5

constructor(private clientService: ClientService) {}

adicionar(){
  this.valores.push({descricao: 'adicionado', nome: this.nome, id: 3})
}

sayHello() {
  alert(this.clientService.sayHello())
}

}


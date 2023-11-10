import { Component, OnDestroy, OnInit} from '@angular/core';
import { Observable, of, interval, Subscription, map, filter,tap, range, BehaviorSubject } from 'rxjs';

@Component ({
    selector: 'app-rxjs',
    templateUrl: './rxjs-page.component.html'
})

export class RXJSPageComponent implements OnInit, OnDestroy {

    items: Array<number> = [] // Inicialização de um array vazio chamado 'items'

    subscription!: Subscription // Inicialização de uma variável  para controlar a assinatura do observable

    observable = interval(1000) // Criação de um observable usando o método 'interval' que emite um valor a cada 1000ms (1 segundo)
    observable2 = range(1,10)
    subject = new BehaviorSubject("Valor Inicial")
    ultimoEvento = ""
    contador = 1;

    constructor() { }
    ngOnDestroy(): void { // Cancela a inscrição do objeto 'subscription'
        this.subscription.unsubscribe;
    }

    ngOnInit() { //adicionar cada valor emitido ao array 'items'
        //explorando operadores 
        /*this.subscription = this.observable
        .pipe(
            map((x: number) => x * 2), //transformando os valores do observable e multiplicando por 2
            filter(x => x < 10), //restringe os resultados até o 10 
            tap((x) => console.log(x))
            )   
        .subscribe((item) => {
            this.items.push(item)
        })*/
        /*this.observable2.subscribe(item => {
            this.items.push(item)
        })*/
        this.subject.asObservable().subscribe({item} => {
            this.ultimoEvento = item
        })
    }

    desinscrever() { // Método para cancelar a assinatura do observable e parar de receber novos valores
        this.subscription.unsubscribe()
    }

    emitirEvento() {
        this.subject.next("Proximo item" + this.contador)
        this.contador++
    }
}
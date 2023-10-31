import { Component } from "@angular/core";

@Component({
    selector: 'app-pai',
    template: `
        <h1>No component pai</h1>
        <a [routerLink]="['filho1']">Ir para filho 1</a> <BR/>
        <a [routerLink]="['filho2']">Ir para filho 2</a> <BR/>
        <router-outlet></router-outlet>
    `
})

export class PaiPageComponent {
    
}
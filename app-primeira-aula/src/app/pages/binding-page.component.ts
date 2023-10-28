import {Component } from "@angular/core"

@Component( //fazendo binding das infos da img
    {
        selector: 'app-binding',
        template: `
        <h1>Imagem do angular</h1>
        <img [src]="imagem" [style.width.px]="width" />  <!--binding de estilo-->
        <div class="alert" [class]="{sucess: sucesso}">
            Alerta
        </div>
        <button (click)="enviarDados()">Enviar dados</button>
        `,
        styles: [
            `.alert {
                width: 200px;
                height: 100px;
                border: 1px solid blue;
            }
            .sucess {
                background-color: green;
                border: 5px solid green;
            }
            `
            ]
    }
)
export class BindingPageComponent {
    width = 150
    imagem = "https://angular.io/assets/images/logos/angular/angular.svg"
    
    sucesso = true

    enviarDados() {
        this.sucesso = !this.sucesso
    }
}
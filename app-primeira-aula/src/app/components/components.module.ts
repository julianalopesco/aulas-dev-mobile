import {NgModule} from "@angular/core";
import { HeaderComponent } from './header.component';
import { RouterModule } from "@angular/router";

@NgModule({ 
    imports: [
        RouterModule
    ],
    declarations:[
        HeaderComponent //disponibiliza o componente header
    ],
    exports: [
        HeaderComponent
    ]
})

export class ComponentModule {

}
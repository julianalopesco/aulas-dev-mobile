import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header.component';
import { ComponentModule } from './components/components.module';
import { FormsModule} from '@angular/forms';
import { ClientListPage } from './pages/client-list-page.component';
import { BindingPageComponent } from './pages/binding-page.component';
import { Filho1PageComponent } from './pages/filho1-page.component';
import { Filho2PageComponent } from './pages/filho2-page.component';
import { PaiPageComponent } from './pages/pai.component';
import { ListaPessoasPage } from './pages/lista-pessoas-page.component';
import { ClientService } from './services/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent} from './pages/login-page.component';
import { ClienteDetalhePageComponent} from './pages/client-detalhe-page.component';
import { RXJSPageComponent} from './pages/rxjs-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientListPage,
    BindingPageComponent,
    PaiPageComponent,
    Filho1PageComponent,
    Filho2PageComponent,
    ClientListPage,
    RXJSPageComponent,
    ListaPessoasPage
  ],
  imports: [
    BrowserModule,
    ComponentModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }

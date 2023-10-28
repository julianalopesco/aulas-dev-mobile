import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header.component';
import { ComponentModule } from './components/components.module';
import { FormsModule} from '@angular/forms';
import { ClientListPage } from './pages/client-list-page.component';
import { BindingPageComponent } from './pages/binding-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientListPage,
    BindingPageComponent
  ],
  imports: [
    BrowserModule,
    ComponentModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

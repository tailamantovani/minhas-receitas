import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ReceitaComponent } from './receita/receita.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ReceitaNovoComponent } from './receita-novo/receita-novo.component';
import { SobreComponent } from './sobre/sobre.component';
import { CardReceitaComponent } from './card-receita/card-receita.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    ReceitaComponent,
    CategoriaComponent,
    ReceitaNovoComponent,
    SobreComponent,
    CardReceitaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

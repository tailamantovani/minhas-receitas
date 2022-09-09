import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReceitaComponent } from './receita/receita.component';
import { ReceitaVisualizarComponent } from './receita-visualizar/receita-visualizar.component';
import { ReceitaNovoComponent } from './receita-novo/receita-novo.component';
import { SobreComponent } from './sobre/sobre.component';
import { CardReceitaComponent } from './receita/card-receita/card-receita.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ReceitaComponent,
    ReceitaVisualizarComponent,
    ReceitaNovoComponent,
    SobreComponent,
    CardReceitaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

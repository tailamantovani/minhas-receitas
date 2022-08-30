import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ReceitaComponent } from './receita/receita.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'categoria', component: CategoriaComponent },
  { path: 'receita/:id', component: ReceitaComponent },
  { path: 'sobre', component: SobreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

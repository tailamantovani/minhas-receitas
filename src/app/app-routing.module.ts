import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceitaComponent } from './receita/receita.component';
import { ReceitaVisualizarComponent } from './receita-visualizar/receita-visualizar.component';
import { SobreComponent } from './sobre/sobre.component';
import { ReceitaNovoComponent } from './receita-novo/receita-novo.component';

const routes: Routes = [
  { path: '', component: ReceitaComponent },
  { path: 'receita/:id', component: ReceitaVisualizarComponent },
  { path: 'receita-novo', component: ReceitaNovoComponent },
  { path: 'sobre', component: SobreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

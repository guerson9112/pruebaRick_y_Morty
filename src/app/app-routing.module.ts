import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListadoComponent } from './components/listado/listado.component';

const routes: Routes = [

  {
    path: '',
    component: InicioComponent
  },

  {
    path: 'lista',
    component: ListadoComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

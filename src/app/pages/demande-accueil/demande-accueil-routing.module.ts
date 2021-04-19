import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandeAccueilPage } from './demande-accueil.page';

const routes: Routes = [
  {
    path: '',
    component: DemandeAccueilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandeAccueilPageRoutingModule {}

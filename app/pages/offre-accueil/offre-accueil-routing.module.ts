import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffreAccueilPage } from './offre-accueil.page';

const routes: Routes = [
  {
    path: '',
    component: OffreAccueilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffreAccueilPageRoutingModule {}

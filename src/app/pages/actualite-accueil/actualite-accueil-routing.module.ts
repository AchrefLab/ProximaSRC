import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualiteAccueilPage } from './actualite-accueil.page';

const routes: Routes = [
  {
    path: '',
    component: ActualiteAccueilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualiteAccueilPageRoutingModule {}

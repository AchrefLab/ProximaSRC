import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OffreAccueilPageRoutingModule } from './offre-accueil-routing.module';

import { OffreAccueilPage } from './offre-accueil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OffreAccueilPageRoutingModule
  ],
  declarations: [OffreAccueilPage]
})
export class OffreAccueilPageModule {}

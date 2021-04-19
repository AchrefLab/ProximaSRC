import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandeAccueilPageRoutingModule } from './demande-accueil-routing.module';

import { DemandeAccueilPage } from './demande-accueil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandeAccueilPageRoutingModule
  ],
  declarations: [DemandeAccueilPage]
})
export class DemandeAccueilPageModule {}

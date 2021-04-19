import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualiteAccueilPageRoutingModule } from './actualite-accueil-routing.module';

import { ActualiteAccueilPage } from './actualite-accueil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualiteAccueilPageRoutingModule
  ],
  declarations: [ActualiteAccueilPage]
})
export class ActualiteAccueilPageModule {}

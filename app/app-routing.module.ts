import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'actualite-accueil',
    pathMatch: 'full'
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
 
  {
    path: 'actualite-accueil',
    loadChildren: () => import('./pages/actualite-accueil/actualite-accueil.module').then( m => m.ActualiteAccueilPageModule)
  },
  {
    path: 'actualite-accueil',
    loadChildren: () => import('./pages/actualite-accueil/actualite-accueil.module').then( m => m.ActualiteAccueilPageModule)
  },
  {
    path: 'offre-accueil',
    loadChildren: () => import('./pages/offre-accueil/offre-accueil.module').then( m => m.OffreAccueilPageModule)
  },
  {
    path: 'demande-accueil',
    loadChildren: () => import('./pages/demande-accueil/demande-accueil.module').then( m => m.DemandeAccueilPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

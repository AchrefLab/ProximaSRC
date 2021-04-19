import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../essentiels/navbar/navbar.component';

@Component({
  selector: 'app-actualite-accueil',
  templateUrl: './actualite-accueil.page.html',
  styleUrls: ['./actualite-accueil.page.scss'],
})
export class ActualiteAccueilPage implements OnInit {
  dynamiqueComponnent: any
  
  constructor(private router:ActivatedRoute) { }

  ngOnInit() {
    this.dynamiqueComponnent=NavbarComponent;
  
  }

}

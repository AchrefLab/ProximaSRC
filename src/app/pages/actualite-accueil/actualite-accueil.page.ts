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
  // filename:string="";
  // type:string="";

  ngOnInit() {
    this.dynamiqueComponnent=NavbarComponent;
  
  }
  // onFileSelected(fileInput: any){
 
  //   this.filename=fileInput.target.files[0].name;
  // }
  // handleFileInput(event) {
  //   console.log(event);
  //   this.filename = event.target.files[0].name;
  // }

}

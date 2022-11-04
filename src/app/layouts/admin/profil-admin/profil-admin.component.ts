import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-admin',
  templateUrl: './profil-admin.component.html',
  styleUrls: ['./profil-admin.component.scss']
})
export class ProfilAdminComponent implements OnInit {

 
  name: any = "";
  email: any = "";
  isLogged: boolean = false;

  constructor() {
    if (localStorage.getItem("access_token")) {
      this.email = localStorage.getItem("email");
      this.name = localStorage.getItem("name");
    } else {
      this.isLogged = false;
    }
  }

  ngOnInit(): void {
  }

}

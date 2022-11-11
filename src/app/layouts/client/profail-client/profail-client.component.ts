import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthclientService } from 'src/app/views/services/authclient.service';

@Component({
  selector: 'app-profail-client',
  templateUrl: './profail-client.component.html',
  styleUrls: ['./profail-client.component.scss']
})
export class ProfailClientComponent implements OnInit {

  name: any ="";
  email: any ="";
  prenom: any ="";
  telephone: any="";
  profile_image_url: any='https://ui-avatars.com/api/?background=random&name=';
  isLogged: boolean=false;

  ngOnInit(): void {}
  
  constructor() {
    //get profile
    if(localStorage.getItem("token")){
      this.name=localStorage.getItem("name");
      this.prenom=localStorage.getItem("prenom");
      this.telephone=localStorage.getItem("telephone");
      this.email=localStorage.getItem("email");
      this.profile_image_url=localStorage.getItem("profile_image_url");
    }else{
      this.isLogged = false;
    }

  }

}





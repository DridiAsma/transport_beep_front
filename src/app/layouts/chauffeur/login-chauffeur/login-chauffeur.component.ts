import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthchauffeurService } from 'src/app/views/services/authchauffeur.service';

@Component({
  selector: 'app-login-chauffeur',
  templateUrl: './login-chauffeur.component.html',
  styleUrls: ['./login-chauffeur.component.scss']
})
export class LoginChauffeurComponent implements OnInit {

  messageAuthError: any
  reponsetoken: any
  messageError: any;


  constructor(private chaufservice: AuthchauffeurService,
    private route: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void { }


  loginchauf(f: any) {
    let data = f.value
    this.chaufservice.login(data).subscribe(data => {
      this.reponsetoken = data
      localStorage.setItem('tokens', this.reponsetoken.tokens);
      localStorage.setItem('nom', this.reponsetoken.user.nom);
      localStorage.setItem('prenom', this.reponsetoken.user.prenom);
      localStorage.setItem('tele', this.reponsetoken.user.tele);
      localStorage.setItem('email', this.reponsetoken.user.email);
      localStorage.setItem('gendre', this.reponsetoken.user.gendre);
      localStorage.setItem('emplacement', this.reponsetoken.user.emplacement);
      localStorage.setItem("type_vehicules",  this.reponsetoken.user.type_vehicules);
      localStorage.setItem("marque",  this.reponsetoken.user.marque);
      localStorage.setItem("model",  this.reponsetoken.user.model);
      localStorage.setItem("types_paiement",  this.reponsetoken.user.types_paiement );
      localStorage.setItem("nbr_place",  this.reponsetoken.user.nbr_place);
      localStorage.setItem("cinNum",  this.reponsetoken.user.cinNum);
      localStorage.setItem("numPermis",  this.reponsetoken.user.numPermis);
      localStorage.setItem("numAss", this.reponsetoken.user.numAss);
      localStorage.setItem("numBadg",  this.reponsetoken.user.numBadg);
      localStorage.setItem("numCartCir",  this.reponsetoken.user.numCartCir);


      this.toastr.success("Saved successfully", "Success")
      // this.chaufservice.enrgisterToken(this.reponsetoken.tokens)
      this.route.navigate(['chauffeur/map'])

    }, (err: HttpErrorResponse) => {
      console.log(err)
      this.messageError = "Veuillez vérifier vos informations"
    })

  }


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthAdminService } from 'src/app/views/services/auth-admin.service';


@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {

  
  dataReceived: any;
  url: any;
  messageAuthError: any

   constructor(private ads: AuthAdminService,
    private route: Router,
    private arouter: ActivatedRoute) {


    //cette fonction return la page admin sont login

    if (this.ads.LoggedIn() == true) {
      this.route.navigate(['/admin'])
    }

  }

  ngOnInit(): void {
    this.url = this.arouter.snapshot.queryParams['returnUrl'] || '/admin'
    console.log(this.url)
  }

  loginadmin(f: any) {
    let data = f.value
    this.ads.login(data).subscribe((response: any) => {
      this.dataReceived = response
      
      localStorage.setItem('access_token', this.dataReceived.access_token);
      localStorage.setItem('email', this.dataReceived.user.email);
      localStorage.setItem('name', this.dataReceived.user.name);
      this.route.navigate([this.url])

    },
      err => this.messageAuthError = "Désactive email ou mot de passe"
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthclientService } from 'src/app/views/services/authclient.service';

@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.component.html',
  styleUrls: ['./login-client.component.scss']
})
export class LoginClientComponent implements OnInit {

  messageAuthError: any
  datatoken:any

  constructor(private clientservice:AuthclientService, private route:Router, private arouter:ActivatedRoute) { }

  ngOnInit(): void {}

  loginclient(f:any){
    let data = f.value
     this.clientservice.login(data).subscribe(data =>{
       this.datatoken = data

       // this.clientservice.saveToken(this.datatoken.token)
       localStorage.setItem('token',this.datatoken.token);
       localStorage.setItem('email',this.datatoken.user.email);
       localStorage.setItem('name',this.datatoken.user.name);
       localStorage.setItem('prenom',this.datatoken.user.prenom);
       localStorage.setItem('telephone',this.datatoken.user.telephone);
      this.route.navigate(['/client/commandes'])
   } );

  }
}

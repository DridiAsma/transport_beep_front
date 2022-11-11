import { Component, OnInit } from '@angular/core';
import { SnotifyService } from 'ng-snotify';
import { AuthclientService } from 'src/app/views/services/authclient.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  public form = { email: null };
  notify: any;

  constructor(private serv: AuthclientService,
   private snotifyService: SnotifyService ) { }

 ngOnInit(): void {}

 onSubmit(){
 this.serv.SendPassLink(this.form).subscribe(

   data =>this.handleResponse(data),
   error => this.notify.error(error.error)

 );
 }

  handleResponse(res:any){
    console.log(res)
  this.form.email = null;
}


}

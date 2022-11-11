import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthclientService } from 'src/app/views/services/authclient.service';

@Component({
  selector: 'app-modifier-profile-client',
  templateUrl: './modifier-profile-client.component.html',
  styleUrls: ['./modifier-profile-client.component.scss']
})
export class ModifierProfileClientComponent implements OnInit {

 
  name: any ="";
  email: any ="";
  prenom: any ="";
  telephone: any="";
  profile_image_url: any='https://ui-avatars.com/api/?background=random&name=';
  isLogged: boolean=false;



  ngOnInit(): void {
  }


  constructor(private clientservice:AuthclientService,
    private router:Router,
    private toastr:ToastrService) { }

  modifierclient(f:any){
    let data=f.value
    this.clientservice.editprofile(data).subscribe(data=>
     {
      name:this.name,
      //  this.router.navigate(['/client/login']),
       this.toastr.success('Success', 'Successfully ajouter');
       console.log(data)},
       (err:HttpErrorResponse)=>{
         console.log(err)
        //  this.messageError="les donnes est n'est pas valider"
         this.toastr.error('Error', 'les donnes non valider');
       })
  }





}

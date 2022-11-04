import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthchauffeurService } from 'src/app/views/services/authchauffeur.service';

@Component({
  selector: 'app-detailes-chauffeur',
  templateUrl: './detailes-chauffeur.component.html',
  styleUrls: ['./detailes-chauffeur.component.scss']
})
export class DetailesChauffeurComponent implements OnInit {

  
  imageDirectoryPath:any = 'http://127.0.0.1:8000/uploads/flutterimgs/';
  chauffeurs!: any;
  constructor(
    private dataservce:AuthchauffeurService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private route: Router,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.detaillsChauf();
  }

  detaillsChauf(){
    
    this.dataservce.editIdChauf(this.router.snapshot.params['id']).subscribe(
      res => {
        this.chauffeurs = res;
      },
      err =>{
        console.log(err);
      });
      
  }


}

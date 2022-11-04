import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PaiementService } from 'src/app/views/services/paiement.service';
import { Blog } from './blogs.model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

 files: any;
 formblogs!: FormGroup;
 blog = new Blog;
 data: any;

  constructor(private dataserv:PaiementService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private route:Router) {}

  ngOnInit(): void {
    this.ajouterPost();
  }

  imageUpload(event: any){
    this.files = event.target.files[0];
    console.log(this.files);

  }

  ajouterPost(){
   this.formblogs = this.formBuilder.group({
    titre: ['', Validators.required],
    description: ['', Validators.required],
    jour: ['', Validators.required],
    images: ['', Validators.required],
   })
  }
  submit(){

    const formData = new FormData();
    formData.append("images", this.files);
    formData.append("titre", this.formblogs.value.titre);
    formData.append("description", this.formblogs.value.description);
    formData.append("jour", this.formblogs.value.jour);

    this.dataserv.ajouterblog(formData).subscribe(res => {
      this.data = res;
      console.log(this.data);
      this.toastr.success("Saved successfully", "Success");
      this.route.navigate(['/admin/listblog'])
    },
    ( errorRes : HttpErrorResponse) =>{
      this.toastr.error("Something went wrong", "Error");
     },

    )
  }

}

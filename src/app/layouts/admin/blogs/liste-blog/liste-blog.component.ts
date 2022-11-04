import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PaiementService } from 'src/app/views/services/paiement.service';

@Component({
  selector: 'app-liste-blog',
  templateUrl: './liste-blog.component.html',
  styleUrls: ['./liste-blog.component.scss']
})
export class ListeBlogComponent implements OnInit {

  blogs: any;
  //cette requete c'est le lien de image
  imageDirectoryPath:any = 'http://127.0.0.1:8000/storage/'

  constructor(private dataServ:PaiementService,
    private route:Router,
    private toastr:ToastrService) { }

  ngOnInit(): void { this.getBlog();}


  //import liste
  getBlog(){
    this.dataServ.indexBlog().subscribe(response=> {
      console.log(response)
      this.blogs=response;
    });

  }

  //supprimer
  suppBlog(id: any){
    //console.log(id);
    this.dataServ.supprimerblog(id).subscribe(res =>{
      this.toastr.success('Success', 'Successfully deleted');
      this.getBlog();
    })
  }


 modifierblog(id: any){
  this.route.navigate(['/admin/update/'+id]);
 }







}

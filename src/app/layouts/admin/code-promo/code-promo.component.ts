import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CodedataService } from 'src/app/views/services/codedata.service';

@Component({
  selector: 'app-code-promo',
  templateUrl: './code-promo.component.html',
  styleUrls: ['./code-promo.component.scss']
})
export class CodePromoComponent implements OnInit {

  promocode: any;

  constructor(private datacode:CodedataService, private route:Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getCode();
  }

 getCode(){
  this.datacode.getcode().subscribe((response:any)=>{
    console.log(response.data)
    this.promocode=response.data;
  });
 }


 deleteCode(id: any){
  //console.log(id);
  this.datacode.deletecode(id).subscribe(res =>{
    this.toastr.success('Success', 'Successfully deleted');
    this.getCode();
  })
 }

 modifiercode(id: any){
  this.route.navigate(['/admin/editCode/'+id]);

  }
}

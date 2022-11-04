import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaiementService } from 'src/app/views/services/paiement.service';

@Component({
  selector: 'app-table-demandes',
  templateUrl: './table-demandes.component.html',
  styleUrls: ['./table-demandes.component.scss']
})
export class TableDemandesComponent implements OnInit {

  public commandes: any;
  constructor(private addService: PaiementService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getCommande();
  }

  //getliste de commande for admin
  getCommande(){
    this.addService.indexCommande().subscribe(response=>{
      console.log(response)
      this.commandes=response;
    });
  }


  /// delete commande
  deleteCommande(id:number){

    this.addService.suppCommande(id).subscribe(
      ()=>{
        this.toastr.success('Success', 'Successfully Supprimer');
        this.getCommande();
      },
      (errorRes:HttpErrorResponse) => {
        this.toastr.error('Something went wrong', 'Error');
      },
      () => {}
    )
  }

}

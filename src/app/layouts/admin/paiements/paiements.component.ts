import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PaiementService } from 'src/app/views/services/paiement.service';
import { Paiements } from './paiement.model';

@Component({
  selector: 'app-paiements',
  templateUrl: './paiements.component.html',
  styleUrls: ['./paiements.component.scss']
})
export class PaiementsComponent implements OnInit {

  paye = new Paiements;
  files: any;
  form!: FormGroup;
  submitted= false;
  data: any;
  paiements:any;

  constructor(private formBuilder: FormBuilder, private datas:PaiementService) { }

  ngOnInit(): void {
    this.getPaiement();

  }


  getPaiement(){
    this.datas.getPayer().subscribe((response:any)=>{
      console.log(response.data)
      this.paiements=response.data;
    });
  }

}

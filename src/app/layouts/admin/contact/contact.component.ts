import { Component, OnInit } from '@angular/core';
import { VoitureService } from 'src/app/views/services/voiture.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contacts: any;
  constructor(private dataservice:VoitureService) { }

  ngOnInit(): void {
    this.getListContact();
  }

  getListContact(){
    this.dataservice.getListeContact()
    .subscribe((response:any)=>{
      console.log(response.data)
      this.contacts=response.data;
    });
  }

}

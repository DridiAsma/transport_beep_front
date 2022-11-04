import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-table-client',
  templateUrl: './table-client.component.html',
  styleUrls: ['./table-client.component.scss']
})
export class TableClientComponent implements OnInit {

  public clients:any

  constructor(private ds:DataService, private route:Router) { }

  ngOnInit(): void {
    this.getClientData();
  }

  getClientData(){
    this.ds.getAllclient().subscribe((response:any)=>{
      console.log(response.data)
      this.clients=response.data;
    });
  }

  details(id:any){
    this.route.navigate(['/admin/detailleclient/'+id]);
  }

}

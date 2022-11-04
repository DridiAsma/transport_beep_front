import { Component, OnInit } from '@angular/core';
import { VoitureService } from 'src/app/views/services/voiture.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  myArray: any = [];
  constructor(private dataservice:VoitureService) { }

  ngOnInit(): void {
    this.getListeReview();
  }

  getListeReview(){
    this.dataservice.getListeStar()
    .subscribe(data =>{
      console.log(data)
      this.myArray = data;
    });
  }

}

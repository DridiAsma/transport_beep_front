import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-client',
  templateUrl: './body-client.component.html',
  styleUrls: ['./body-client.component.scss']
})
export class BodyClientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  getBodyClass(): string{
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768){
      styleClass = 'body-trimmed';

    } else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0)
    {
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }

}

import { Component, OnInit } from '@angular/core';

interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}



@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  title = 'sidenav';

  isSideNavCollapsed = false;
  screenWidth = 0;



 onToggleSideNav(data: SideNavToggle): void{

  this.screenWidth = data.screenWidth;
  this.isSideNavCollapsed = data.collapsed;

}

  constructor() { }

  ngOnInit(): void {
  }


}

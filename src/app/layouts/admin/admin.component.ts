import { Component, OnInit } from '@angular/core';


interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
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

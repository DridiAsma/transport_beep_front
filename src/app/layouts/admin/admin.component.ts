import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthAdminService } from 'src/app/views/services/auth-admin.service';



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

constructor(private ads: AuthAdminService, 
  private route:Router) { }

ngOnInit(): void {}


logout(){
  localStorage.removeItem('access_token')
  localStorage.removeItem('name')
  localStorage.removeItem('email')
  this.route.navigate(['/admin/login'])
}

}

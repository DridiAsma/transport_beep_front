import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/services/authadmin.service';
import { fadeInOut, INavbarData } from './helper';
import { navbarData } from './nav-data';


interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}



@Component({
  selector: 'app-sidnav',
  templateUrl: './sidnav.component.html',
  styleUrls: ['./sidnav.component.scss'],
  animations: [
    fadeInOut,
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms',
        keyframes([
          style({transform: 'rotate(0deg)', offset: '0'}),
          style({transform: 'rotate(2turn)', offset: '1'}),
        ])
       
        )
      ]),
    ])
  ]
})
export class SidnavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  multiple: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
    }
    
  }


  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  toggleCollapse(): void{
 this.collapsed = !this.collapsed;
 this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void{
        this.collapsed = false;
        this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  handleClick(item: INavbarData): void {
    this.shrinkItems(item);
    item.expanded = !item.expanded
  }

  constructor(public router: Router,
    private ads:AuthadminService) { }

  getActiveClass(data: INavbarData): string{
    return this.router.url.includes(data.routeLink) ? 'active' : '';
  }
 
  shrinkItems(item: INavbarData): void{
    if(!this.multiple) {
      for(let modelItem of this.navData) {
       if(item !== modelItem && modelItem.expanded){
         modelItem.expanded = false;
       }
      }
   }
  }


  logout(){
    localStorage.removeItem('access_token')
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    this.router.navigate(['/admin/login'])
  }

}

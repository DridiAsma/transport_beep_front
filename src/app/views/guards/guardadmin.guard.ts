import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthadminService } from '../services/authadmin.service';

@Injectable({
  providedIn: 'root'
})
export class GuardadminGuard implements CanActivate {


  constructor(private ads:AuthadminService,private router:Router){
  }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):
  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    return new Promise((resolve,reject)=>{
      if(this.ads.LoggedIn()==true){
      resolve(true)
    }
    else{
      this.router.navigate(['/admin/login'],{queryParams:{returnUrl:state.url}}) //il query heya ili bech ta3tik il lien m3a il rmouze mta3 il site
      localStorage.removeItem('access_token')
      resolve(false)

    }
    })

  }






}

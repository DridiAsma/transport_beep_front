import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthclientService } from '../services/authclient.service';

@Injectable({
  providedIn: 'root'
})
export class GuradclientGuard implements CanActivate {

  constructor(private clientserver: AuthclientService,
    private router:Router){
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;

    return new Promise((resolve,reject)=>{
      if(this.clientserver.LoggedIn()==true){
      resolve(true)
    }
    else{
      this.router.navigate(['/client/login'],{queryParams:{returnUrl:state.url}}) //il query heya ili bech ta3tik il lien m3a il rmouze mta3 il site
      localStorage.removeItem('access_token')
      resolve(false)

    }
    })


  }

}

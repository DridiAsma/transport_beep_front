import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthadminService {


  helper=new JwtHelperService()
  user=''

  constructor(private http:HttpClient) { }

  login(data:any){
    return this.http.post('http://127.0.0.1:8000/api/auth/login',data);
  }

 saveData(access_token:any){

 let decodeToken = this.helper.decodeToken(access_token)
  localStorage.setItem('access_token',access_token)

  }

  // getname(){
  //   let access_token:any =localStorage.getItem('access_token')

  //   let decodeToken= this.helper.decodeToken(access_token)
  //   return decodeToken.name
  // }

  LoggedIn(){
    let access_token:any=localStorage.getItem('access_token')


    if(!access_token){
     return false
    }
    let decodeToken=this.helper.decodeToken(access_token)



     if(decodeToken.user){
       return false
     }

     if(this.helper.isTokenExpired(access_token)){
       return false
     }

    return true
  }

  // // Remove token
  // removeToken(){
  //   localStorage.removeItem('access_token');
  // }

  profileadmin(){
    return this.http.get('http://127.0.0.1:8000/api/auth/profile');
  }
}

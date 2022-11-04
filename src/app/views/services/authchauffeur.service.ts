import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthchauffeurService {
  helper=new JwtHelperService()
  user=''


  constructor(private http:HttpClient) { }

  login(data:any){
    return this.http.post('http://127.0.0.1:8000/api/chauffeur/login',data);
  }

  // enrgisterToken(tokens:any){
  //   localStorage.setItem('tokens',tokens)
  //   }

  register(data:any){
    return this.http.post('http://127.0.0.1:8000/api/chauffeur/register',data);
  }

  //token login
  // getname(){
  //   let tokens:any=localStorage.getItem('tokens')
  //   let decodeToken= this.helper.decodeToken(tokens)
  //   return decodeToken.name
  // }

  //voiture
  getrequeteChauf(){
    return this.http.get('http://127.0.0.1:8000/api/revchauf/index');
  }

 editIdChauf(id: number){
  return this.http.get('http://127.0.0.1:8000/api/chauffeur/editchauf/'+id);
 }

 detailsch(id: number, data: any){
  return this.http.post('http://127.0.0.1:8000/api/chauffeur/updatechauf/'+id,data);
 }

  profile(){
    return this.http.get('http://127.0.0.1:8000/api/chauffeur/profile');
  }
}

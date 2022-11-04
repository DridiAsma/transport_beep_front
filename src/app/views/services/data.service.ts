import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseData } from 'src/app/layouts/admin/liste-chauffeur/table-chauffeur/chauffeur';


@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http:HttpClient) { }

  // Afficher liste de chauffeur
 getAllchauffeur() :Observable<ResponseData>{
   return this.http.get<ResponseData>('http://127.0.0.1:8000/api/chauffeur/index');
 }

 //Afficher liste de client
 getAllclient() :Observable<Response>{
  return this.http.get<Response>('http://127.0.0.1:8000/api/client/index');
 }


 //cette partie tous les data dans la partie admin

 getNotification(){
  return this.http.get('http://127.0.0.1:8000/api/notification/index');
 }

 ajouterNotification(data:Notification){
   return this.http.post('http://127.0.0.1:8000/api/notification/create',data);
 }

 supNotification(id:any){
  return this.http.delete('http://127.0.0.1:8000/api/notification/delete/'+id);
 }
 modifierNotification(id:any,data:Notification){
  return this.http.put('http://127.0.0.1:8000/api/notification/update/'+id,data);
 }

 getEditNotification(id:any){
  return this.http.get('http://127.0.0.1:8000/api/notification/getedit/'+id);
 }



}

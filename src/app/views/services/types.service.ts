import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class TypesService {

  constructor(private http:HttpClient ) { }


  //Type de vehicule */
 getTypeV(){
  return this.http.get('http://127.0.0.1:8000/api/typev/get');
 }

 ajouterTypeV(data: any){
  return this.http.post('http://127.0.0.1:8000/api/typev/create',data);
 }

//modifierTypeV(id: any){ return this.http.put('http://127.0.0.1:8000/api/typev/edit'+id);}
  suppTypeV(id:any){
    return this.http.delete('http://127.0.0.1:8000/api/typev/delete/'+id);
  }

}

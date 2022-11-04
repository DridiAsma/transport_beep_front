import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  constructor(private http:HttpClient) { }

  ajouterVoiture(data: any){
    return this.http.post('http://127.0.0.1:8000/api/voiture/create',data);
   }


  getListeStar(){
    return this.http.get('http://127.0.0.1:8000/api/note/index');
   }

  getListeContact(){
    return this.http.get('http://127.0.0.1:8000/api/contact/index');
   }
}

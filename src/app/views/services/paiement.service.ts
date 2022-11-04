import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {
  //httpHeaders = new HttpHeaders.set('Content-Type','application/json');

  constructor(private http:HttpClient) { }


  getPayer(){
    return this.http.get('http://127.0.0.1:8000/api/modep/index');
   }

  ajouterP(data: any){
    return this.http.post('http://127.0.0.1:8000/api/modep/create',data);
   }



   //ajouter commande client
   ajouterCommande(data: any){
    return this.http.post('http://127.0.0.1:8000/api/rqclient/addclient',data);
   }
   indexCommande(){
    return this.http.get('http://127.0.0.1:8000/api/rqclient/index');
   }
   suppCommande(id:any){
    return this.http.delete('http://127.0.0.1:8000/api/rqclient/delete/'+id);
  }




   //post blog
   indexBlog(){
    return this.http.get('http://127.0.0.1:8000/api/blog/index');
   }
   ajouterblog(data: any){
    return this.http.post('http://127.0.0.1:8000/api/blog/create',data);
   }

   supprimerblog(id:any){
    return this.http.delete('http://127.0.0.1:8000/api/blog/delete/'+id);
   }

   //modifier les donnes
   modifierblog(id: number, data: any){
    return this.http.put('http://127.0.0.1:8000/api/blog/update/'+id,data);
   }


   //afficher avec id
   afficherblog(id: number){
    return this.http.get('http://127.0.0.1:8000/api/blog/edit/'+id);
   }
}



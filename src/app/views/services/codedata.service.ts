import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CodedataService {

  constructor(private http:HttpClient) { }

  getcode()
  {
    return this.http.get('http://127.0.0.1:8000/api/code/index');
  }

  postcode(data: any)
  {
    return this.http.post('http://127.0.0.1:8000/api/code/create',data);
  }

  getcodeEdit(id: any)
  {
    return this.http.get('http://127.0.0.1:8000/api/code/edit/'+id);
  }

  putcode(id:any, data:any)
  {
    return this.http.put('http://127.0.0.1:8000/api/code/update/'+id,data);
  }
  deletecode(id:any){
    return this.http.delete('http://127.0.0.1:8000/api/code/delete/'+id);
   }

   ajouteContact(data:any){
    return this.http.post('http://127.0.0.1:8000/api/contact/create',data);
   }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchImagen } from '../interfaces/search.interface';
import { Imagen } from '../interfaces/imagen.interface';
import { environment } from 'src/environments/environmnent';



@Injectable({
  providedIn: 'root'
})
export class SearchImageService {


  constructor( private http: HttpClient) {}


  private apiUrl: string ='https://api.pexels.com/v1/search?query=';
  

   private headers = new HttpHeaders(
     {
       'Authorization': environment.imegeKey
    
     });


   getImage(data : SearchImagen): Observable<Imagen> {

    return this.http.get<Imagen>(`${this.apiUrl}${data.data}&per_page=${data.pagination}`,{headers:this.headers});


   }
}

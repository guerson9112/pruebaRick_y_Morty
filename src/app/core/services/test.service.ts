import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'

const url = environment.rickMortyApi

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor( private http: HttpClient ) { }


  getCharacters(){

    return this.http.get<any[]>( `${url}/1,2,3,4,5`);

  }

  getInfo(id: Number){
    return this.http.get<any>( `${url}/${id}`);
  }



}

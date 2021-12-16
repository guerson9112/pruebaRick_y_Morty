import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const url = environment.rickMortyApi

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor( private http: HttpClient ) { }


  getCharacters(ids: number[]){

    return this.http.get<any[]>( `${url}/${ids}`);

  }

  getInfo(id: number){
    return this.http.get<any>( `${url}/${id}`);
  }
}

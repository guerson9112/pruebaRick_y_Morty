import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Character } from 'src/app/models/character';

const lista: Character[] = [];

const listaId: number[] = [1,2,3,4,5];

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private charSubject = new BehaviorSubject<Character[]>(lista);
  private listaIdSubject = new BehaviorSubject<number[]>(listaId);

  char$: Observable<any>
  ids$: Observable<any>

  constructor(

   

  ) { 

   this.char$ = this.charSubject.asObservable();
   this.ids$ = this.listaIdSubject.asObservable();

  }


  public setListaPersonajes(characters: Character[]){

    this.charSubject.next(characters)

  }

  public setListaIds(ids: number[]){

    this.listaIdSubject.next(ids)

  }

  public regresarListaPersonajes(){

    return this.charSubject.value

  }

  public regresarListaId(){

    return this.listaIdSubject.value

  }



}

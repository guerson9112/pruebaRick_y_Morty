import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Character } from 'src/app/models/character';

const lista: Character[
  
] = [];

@Injectable({
  providedIn: 'root'
})
export class GuardarService {

  private charSubject = new BehaviorSubject<Character[]>(lista);

  char$: Observable<any>

  constructor(

   

  ) { 

   this.char$ = this.charSubject.asObservable();

  }


  public setLista(characters: Character[]){

    this.charSubject.next(characters)

  }

  public regresarLista(){

    return this.charSubject.value

  }






}


/*

const row :ListaCta[]= [];
const presup :Item[]= [];
const selectpresup:Item[]= [];
@Injectable({
  providedIn: 'root'
})
export class DynamicRowService {
  private menuConfigSubject = new BehaviorSubject<ListaCta[]>(row);
  private presupSubject = new BehaviorSubject<Item[]>(presup);
  private presupSelectSubject= new BehaviorSubject<Item[]>(selectpresup);
  menuConfig$: Observable<any>;
  presup$: Observable<any>;
  presupSelect$: Observable<any>;
  constructor( private http: HttpClient,
    private auth: AuthService) {

    this.menuConfig$ = this.menuConfigSubject.asObservable();


    this.presup$ = this.presupSubject.asObservable();
   this.presupSelect$=this.presupSelectSubject.asObservable();
  }
  public setMenu(menuConfig) {
    this.menuConfigSubject.next(menuConfig);
  }

*/

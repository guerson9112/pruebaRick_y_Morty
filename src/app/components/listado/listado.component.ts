import { Component, OnInit } from '@angular/core';
import { GuardarService } from 'src/app/core/services/guardar.service';
import { TestService } from 'src/app/core/services/test.service';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'ver'];
  dataSource: Character[]  = [];


  jsonData= '';

  constructor(

    private ListaSrv: GuardarService,
    private charactersSrv: TestService,

  ) { }

  ngOnInit(): void {

    this.getListado();

  }


  getListado(){

    console.log( this.ListaSrv.regresarLista() );

    this.dataSource = this.ListaSrv.regresarLista();

  }

  getInfoPersonaje(id: Number){

    try {

      this.charactersSrv.getInfo(id).subscribe( r => {

        console.log(r);

        this.jsonData =  JSON.stringify(r);

      } );
      
    } catch (error) {

      console.error(error);
      
    }

  }

}

import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/core/services/character.service';
import { StateService } from 'src/app/core/services/state.service';
import { Character } from 'src/app/models/character';
import  swal from 'sweetalert2';

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

    private listaSrv: StateService,
    private charactersSrv: CharacterService,

  ) { }

  ngOnInit(): void {

    this.getListado();

  }


  getListado(){


    this.dataSource = this.listaSrv.regresarListaPersonajes();

  }

  getInfoPersonaje(id: number){

    try {

      this.charactersSrv.getInfo(id).subscribe( r => {

        this.jsonData =  r;

      } );
      
    } catch (error) {

      console.error(error);
      swal.fire('Error', 'Hubo un problema consultando el servicio', 'error')
      
    }

  }

}

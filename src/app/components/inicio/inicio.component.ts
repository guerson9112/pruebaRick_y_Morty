import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import  swal from 'sweetalert2';

import { MatDialog} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/ui/dialog/dialog.component';
import { StateService } from 'src/app/core/services/state.service';
import { CharacterService } from 'src/app/core/services/character.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  characters: Character[] = [];// personajes

  idCharacters: number[] = [];// id de personajes a buscar

  constructor(

    private charactersSrv: CharacterService,
    private stateSrv: StateService,

    public dialog: MatDialog

  ) { }

  ngOnInit(): void {

    this.idCharacters = this.stateSrv.regresarListaId();

    this.getPersonajes();
  }

  getPersonajes() {

    let listaCharacter: Character[] = [];

    try {

      this.charactersSrv.getCharacters(this.idCharacters).subscribe( r => {

       

        r.forEach( character => {

          let { id, name, image, species } = character;

          let newChar: Character ={
            id,
            name,
            image,
            description: '',
            species
          }

          listaCharacter.push( newChar );
        }  )

        this.characters = listaCharacter;

      } );
      
    } catch (error) {

      console.error(error);
      swal.fire('Error', 'Hubo un problema consultando el servicio', 'error')
      
    }

  }


  enviar(character: Character){

    let lista = this.stateSrv.regresarListaPersonajes();
    const dialogRef = this.dialog.open(DialogComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      
      if ( result ){
        
        let buscarIndex = lista.findIndex(  x => (x.id === character.id) );
        console.log(buscarIndex);

        if( buscarIndex >= 0  ){

          swal.fire('Advertencia', 'No se puede enviar un objeto con un id existente', 'error')

        }else{
          
          lista.push(character);
          this.stateSrv.setListaPersonajes(lista);
          this.obtenerNuevo(character.id)
          
        }

      }

    });
    

  }

  obtenerNuevo(id?: number){

    let buscarIndex = this.characters.findIndex(  x => (x.id === id) );
    this.characters.splice(buscarIndex, 1) // eliminar personaje guardado

    let nextCharac = Math.max(...this.idCharacters) + 1;// obtener el id mayor de la lista de id's

    buscarIndex = this.idCharacters.findIndex(  x => (x === id) );
    this.idCharacters.splice(buscarIndex, 1) // eliminar id de la lista para buscar personajes

    this.idCharacters.push(nextCharac);

    this.stateSrv.setListaIds(this.idCharacters);

    this.getPersonajes();

  }

}

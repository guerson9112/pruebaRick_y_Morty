import { Component, OnInit } from '@angular/core';
import { GuardarService } from 'src/app/core/services/guardar.service';
import { TestService } from 'src/app/core/services/test.service';
import { Character } from 'src/app/models/character';
import  swal from 'sweetalert2';

import { MatDialog} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/ui/dialog/dialog.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  characters: Character[] = [];

  idCharacters = [1,2,3,4,5];

  constructor(

    private charactersSrv: TestService,
    private listaSrv: GuardarService,

    public dialog: MatDialog

  ) { }

  ngOnInit(): void {
    this.getPersonajes();
  }

  getPersonajes() {

    try {

      this.charactersSrv.getCharacters().subscribe( r => {

        console.log(r);

        r.forEach( character => {

          let { id, name, image } = character;

          let newChar: Character ={
            id,
            name,
            image,
            description: ''
          }

          this.characters.push( newChar );


        }  )

      } );
      
    } catch (error) {

      console.error(error);
      
    }

  }


  enviar(character: Character){

    let lista = this.listaSrv.regresarLista();
    const dialogRef = this.dialog.open(DialogComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      
      if ( result ){
        
        let buscarIndex = this.characters.findIndex(  x => (x.id === character.id) );

        if( buscarIndex > 0  ){

          swal.fire('Advertencia', 'No se puede agregar objeto con un id existente', 'error')

        }else{
          
          lista.push(character);
          this.listaSrv.setLista(lista);;
          this.characters.splice(buscarIndex, 1)
        }

      }

    });
    

  }

  obtenerNuevo(){



  }

}

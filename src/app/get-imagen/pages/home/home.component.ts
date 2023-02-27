import { Component } from '@angular/core';
import { SearchImageService } from '../../services/search-image.service';
import { SearchImagen } from '../../interfaces/search.interface';
import { Imagen, Photo, Src } from '../../interfaces/imagen.interface';
import { Categorias } from '../../interfaces/categorias.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {



  datasearch : SearchImagen = { data:'',pagination:'1'};
  pagination!  : number;
  imagenes! : Imagen;
  loading : boolean = false;
  response : boolean = false;
  copying : boolean = false;

  categorias : Categorias[] = [
                {in:'landscape',es:'paisaje'},
                {es:'montañas',in:'mountains'},
                {es:'mar',in:'sea'},
                {es:'paz',in:'peace'},
                {es:'camino',in:'way'},
                {es:'ruta',in:'routes'}
              ];

  constructor( private imagenHttp : SearchImageService){}


  buscar( termino: string ){
    this.response = false;
  
    
  
      if( this.datasearch.data != termino) this.pagination = 10;
    
    this.datasearch = { 
          data  : termino, 
          pagination  : this.pagination.toString()
    }


         this.imagenHttp.getImage( this.datasearch )
         .subscribe({
          next: (resp) => {
             if(resp.photos.length != 0 ){
        
               this.imagenes = resp;
               this.loading = false;
    
              }else{
                resp
                console.log('no encontrado!');
                this.response = true;
              }
            },
            error: (e) => {
              this.response = true;
            }
          });

     }

count(){
  this.pagination += 20
  this.loading = true;
  this.buscar(this.datasearch.data);
}



copyUrl(url :string){
  console.log(url);
  

   try {
      navigator.clipboard.writeText(url);
     console.log('Page URL copied to clipboard');
     this.copying = true;
     setTimeout(()=> {this.copying = false;},1000);

   } catch (err) {
    console.error('Failed to copy: ', err);
   }



}

  

 sugerencias( termino : string ){
   console.log("data: "+termino);
  // if(termino.trim().length != 0){
  //   this.hayError = false;
  //   this.termino =  termino;
  //   this.mostrarSugerencias = true;

  //   //TODO: CREAR SUGERENCIAS

  //   this.devocionalesHttp.searchDevocional( termino )
  //     .subscribe( devocional => {
  //       this.devocionalesSugeridos = devocional.slice(0,5)}
  //     ,(err) => this.devocionalesSugeridos = []
  //     );
  //  }
    
 }

}

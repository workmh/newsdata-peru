import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'newsdata';

  listNoticias: any[] = [];
  loading = false;

  constructor(private _noticiaService: NoticiaService){

  }


  buscarNoticias(parametros: any) {
   // console.log('Soy el padre');
   // console.log(parametros);

    this.loading = true;
    this.listNoticias = [];

    setTimeout(() => {
      this._noticiaService.getNoticias(parametros).subscribe(data => {
        //console.log(data);
        this.loading = false;
        this.listNoticias = data.results;
      }, error => {
        console.log(error);
        this.loading = false;
      })
    }, 1000);


  }
}

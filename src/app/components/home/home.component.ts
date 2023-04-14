import {Component, OnInit} from '@angular/core';
import {Informacion} from "../../models/Informacion";
import {InformacionService} from "../../services/informacion.service";
import {RepositoriosService} from "../../services/repositorios.service";
import {Repositorio} from "../../models/Repositorio";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  informacion: Informacion;
  repositorios: Repositorio[];

  urlCV = 'https://firebasestorage.googleapis.com/v0/b/angellucero.appspot.com/o/ANGEL%20GEOVANNY%20LUCERO%20CV.pdf?alt=media&token=b01853d0-600c-42f8-b31b-dd25fb741476';

  constructor(private informacionService: InformacionService,
              private repositoriosService: RepositoriosService) {
    this.informacion = informacionService.obtenerInformacionCompleta();
    this.repositorios = this.repositoriosService.obtenerRepositorios();
  }

  ngOnInit(): void {
  }

}

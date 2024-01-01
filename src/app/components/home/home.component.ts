import {Component, OnInit} from '@angular/core';
import {Informacion} from "../../models/Informacion";
import {InformacionService} from "../../services/informacion.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  informacion: Informacion;

  constructor(private informacionService: InformacionService) {
    this.informacion = informacionService.obtenerInformacionCompleta();
  }

  ngOnInit(): void {
  }

  protected readonly environment = environment;
}

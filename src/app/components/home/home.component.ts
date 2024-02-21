import {Component, OnInit} from '@angular/core';
import {Informacion} from "../../models/Informacion";
import {InformacionService} from "../../services/informacion.service";
import {environment} from "../../../environments/environment";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  informacion: Informacion;

  constructor(private informacionService: InformacionService,
              private viewportScroller: ViewportScroller) {
    this.informacion = informacionService.obtenerInformacionCompleta();
  }

  ngOnInit(): void {
  }

  public onClickScrollToElement(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  protected readonly environment = environment;
}

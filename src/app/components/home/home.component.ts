import {Component, OnInit} from '@angular/core';
import {Informacion} from "../../models/Informacion";
import {InformacionService} from "../../services/informacion.service";
import {environment} from "../../../environments/environment";
import {ViewportScroller} from "@angular/common";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmailService} from "../../services/email.service";
import {EmailPayloadInterface} from "../../interfaces/email-payload..interface";
import {EmailResponseInterface} from "../../interfaces/email-response.interface";
import {AlertService} from "../../services/alert.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  informacion: Informacion;
  contactForm: FormGroup;
  years: number = 1;

  constructor(private informacionService: InformacionService,
              private viewportScroller: ViewportScroller,
              private _alertService: AlertService,
              private _formBuilder: FormBuilder,
              private _emailService: EmailService) {
    this.informacion = informacionService.obtenerInformacionCompleta();
  }

  ngOnInit(): void {
    this.menuResponsive();
    this.initForm();
    this.years = new Date().getFullYear() - 2021;
  }

  menuResponsive(): void {
    if (typeof window !== "undefined") {
      // Responsive menu
      const hamburger: HTMLElement | any = document.getElementById('hamburger');
      const menu: HTMLElement | any = document.getElementById('menu');
      const buttons: Element | any = document.querySelector('.buttons');
      const menuItems = menu.querySelectorAll('a');
      const toggleMenu = () => {
        menu.classList.toggle('show');
        buttons.classList.toggle('show');
      };
      hamburger.addEventListener('click', toggleMenu);
      menuItems.forEach((item: any) => {
        item.addEventListener('click', toggleMenu);
      });

      // Hide menubar
      const closeMenuOnClickOutside = (event: MouseEvent) => {
        if (!menu.contains(event.target as Node) && !hamburger.contains(event.target as Node) && menu.classList.contains('show')) {
          toggleMenu();
        }
      };
      document.addEventListener('click', closeMenuOnClickOutside);
    }
  }

  onClickScrollToElement(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  initForm() {
    this.contactForm = this._formBuilder.group({
      name: [''],
      email: ['', Validators.required],
      contact: [''],
      message: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.contactForm.invalid) {
      this._alertService.showToast().fire({icon: 'warning', title: 'Algunos campos son requeridos'}).finally();
      return;
    }

    this._alertService.showLoading().fire().finally();

    const data: EmailPayloadInterface = {
      recipient: 'angelluce244@gmail.com',
      subject: 'Angel Lucero: Mensaje',
      htmlContent: `<!DOCTYPE html><html lang="es"><head><title>SmartSoft</title><style>* {font-family: sans-serif;font-weight: 500;font-style: normal;text-align: center;color: #4f4f4f;} h1 {color: #120032;} .container {max-width: 500px;margin: 0 auto;} .text-left {text-align: left;} .m-t {margin-top: 2rem;} .text-sm {font-size: 80%;}</style></head><body><div class="container"><h1>Angel Lucero: Mensaje</h1><p class="text-left m-t">Nombre: ${this.contactForm.get('name')?.value}</p><p class="text-left">Correo electrónico: ${this.contactForm.get('email')?.value}</p><p class="text-left">Teléfono: ${this.contactForm.get('contact')?.value}</p><p class="text-left m-t">Mensaje: ${this.contactForm.get('message')?.value}</p><p class="text-sm m-t">© SmartSoft - ${new Date().getFullYear()}</p></div></body></html>`
    }

    this._emailService.sendEmail(data).subscribe({
      next: (data: EmailResponseInterface) => {
        const closeButton: HTMLElement | null = document.querySelector('[data-bs-dismiss="modal"]');
        if (closeButton) closeButton.click();

        this.contactForm.reset();
        this._alertService.showLoading().close();
        this._alertService.showToast().fire({icon: 'success', title: data.message}).finally();
      },
      error: () => {
        this._alertService.showLoading().close();
        this._alertService.showToast().fire({icon: 'error', title: 'No se pudo enviar el mensaje'}).finally();
      }
    });
  }

  shareProfile() {
    let shareData = {
      title: "Compartir perfil",
      text: "Hola, el perfil de este desarrollador es muy interesante. Te invito a que lo visites. 🚀🚀",
      url: "https://angelluce.github.io/cv/",
    };

    if (navigator.canShare(shareData)) {
      // console.log("navigator.canShare() supported. We can use navigator.share() to send the data.");
      navigator.share(shareData)
        .then(() => console.log('Share was successful.'))
        .catch((error) => console.log('Sharing failed', error));
    } else {
      console.log("Specified data cannot be shared.");
    }
  }

  protected readonly environment = environment;
}

import {AfterViewInit, Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ViewportScroller} from "@angular/common";
import {environment} from "../../../environments/environment";
import {EmailService} from "../../services/email.service";
import {AlertService} from "../../services/alert.service";
import {InformacionService} from "../../services/informacion.service";
import {EmailPayloadInterface} from "../../interfaces/email-payload..interface";
import {EmailResponseInterface} from "../../interfaces/email-response.interface";
import {Informacion} from "../../models/Informacion";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  private readonly _informacionService = inject(InformacionService);
  private readonly _viewportScroller = inject(ViewportScroller);
  private readonly _alertService = inject(AlertService);
  private readonly _formBuilder = inject(FormBuilder);
  private readonly _emailService = inject(EmailService);
  protected readonly environment = environment;

  protected readonly informacion: Informacion;
  protected contactForm: FormGroup;
  protected years: number = 1;

  constructor() {
    this.informacion = this._informacionService.obtenerInformacionCompleta();
  }

  ngOnInit(): void {
    this.initForm();
    this.years = new Date().getFullYear() - 2021;
  }
  ngAfterViewInit(): void {
    this.menuResponsive();
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
    this._viewportScroller.scrollToAnchor(elementId);
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
      recipient: 'angellucero.dev@gmail.com',
      subject: 'Angel Lucero CV: Mensaje',
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
  componenteHexadecimal(c: number): string {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  generarColorPastelAleatorio(): string {
    const r = Math.floor(Math.random() * 64) + 192;
    const g = Math.floor(Math.random() * 64) + 192;
    const b = Math.floor(Math.random() * 64) + 192;

    return "#" + this.componenteHexadecimal(r) + this.componenteHexadecimal(g) + this.componenteHexadecimal(b);
  }
}

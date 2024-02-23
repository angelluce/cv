import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  showToast(){
    return Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    });
  }

  showLoading(){
    return Swal.mixin({
      imageUrl: "assets/images/loading.gif",
      text: "Cargando...",
      imageWidth: 50,
      imageHeight: 50,
      background: "rgba(255,255,255,0.99)",
      allowEscapeKey: false,
      allowOutsideClick: false,
      showConfirmButton: false,
      showCloseButton: false,
      showCancelButton: false,
      focusConfirm: false,
      width: 250,
    });
  }

}

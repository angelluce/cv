import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angel Lucero';

  ngOnInit() {
    this.detectDevTools();
  }

  detectDevTools() {
    const threshold = 160;
    setInterval(() => {
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      if (widthThreshold || heightThreshold) {
        // alert('DevTools detectadas. Por favor, cierra las herramientas de desarrollo.');
        console.log('DevTools detectadas. Por favor, cierra las herramientas de desarrollo.');
      }
    }, 1000);
  }

  @HostListener('document:contextmenu', ['$event'])
  onRightClick(event: MouseEvent): void {
    event.preventDefault();
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    const keyCombination =
      (event.ctrlKey ? 'Ctrl+' : '') +
      (event.shiftKey ? 'Shift+' : '') +
      event.key.toUpperCase();

    // Bloquear F12
    if (keyCombination === 'F12') {
      event.preventDefault();
      event.stopPropagation();
      console.warn('Intento de abrir las herramientas de desarrollo bloqueado.');
      alert('Intento de abrir las herramientas de desarrollo bloqueado.');
    }

    // Bloquear Ctrl+Shift+I, Ctrl+Shift+J y Ctrl+U
    const blockedCombinations = ['Ctrl+Shift+I', 'Ctrl+Shift+J', 'Ctrl+U'];
    if (blockedCombinations.includes(keyCombination)) {
      event.preventDefault();
      event.stopPropagation();
      console.warn('Combinación de teclas bloqueada:', keyCombination);
      alert('Combinación de teclas bloqueada: ' + keyCombination);
    }
  }
}

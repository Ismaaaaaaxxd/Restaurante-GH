import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// 1. Agrega estas importaciones del router
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root', // O el selector que estés usando
  standalone: true,
  // 2. Añade las directivas al array de 'imports'
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html', // O como se llame tu archivo de plantilla
  styleUrl: './app.css'     // O como se llame tu archivo de estilos
})
// 3. Asegúrate de que el nombre de la clase sea 'App'
export class App {
  title = 'restaurante-app';
}
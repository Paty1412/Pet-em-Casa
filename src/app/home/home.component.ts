import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Variável para controlar se o menu está visível ou não
  menuActive: boolean = false;

  // Função que alterna a visibilidade do menu hamburguer
  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
}

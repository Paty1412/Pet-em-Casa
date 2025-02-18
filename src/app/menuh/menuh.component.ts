import { Component } from '@angular/core';

@Component({
  selector: 'app-menuh',
  standalone: true,
  imports: [],
  templateUrl: './menuh.component.html',
  styleUrl: './menuh.component.css'
})
export class MenuhComponent {
 // Variável para controlar se o menu está visível ou não
 menuActive: boolean = false;

 // Função que alterna a visibilidade do menu hamburguer
 toggleMenu() {
   this.menuActive = !this.menuActive;
 }
}

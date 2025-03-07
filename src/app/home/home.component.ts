import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  isMenuVisible: boolean = false;

  aparecerMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }

 mostrarMensagem(tipo: string): void {
    alert('Você clicou no botão de ' + tipo);
  }
}




  
  

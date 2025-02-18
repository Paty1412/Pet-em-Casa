import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { SobreComponent } from "./sobre/sobre.component";
import { FooterComponent } from "./footer/footer.component";
import {VisitaComponent} from './visita/visita.Component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent,SobreComponent,FooterComponent,RouterOutlet,VisitaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}

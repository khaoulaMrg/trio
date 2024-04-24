import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { fadeInAnimation } from '../../animations';



@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrl: './demande.component.css',
  animations: [fadeInAnimation]
})
export class DemandeComponent {
  constructor (private  ButtonModule: MatButtonModule){}

}
 


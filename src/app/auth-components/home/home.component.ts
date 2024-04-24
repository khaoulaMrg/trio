import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-about',
  templateUrl: './home.component.html',

  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor() { }
  search() {
    console.log('Recherche en cours...');
  }
    images: string[] = [
      'assets/img/career.jpg',
      'assets/img/demandeS.jpg',
      
      // Ajoutez les autres images ici
    ];
    currentIndex: number = 0;
  
  
    ngOnInit(): void {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, 3000); // Changez le 3000 selon l'intervalle de temps souhaité (en millisecondes)
    }
  }

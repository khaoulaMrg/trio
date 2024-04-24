import { Component, OnInit } from '@angular/core';
import { ScrapingNavbarService } from '../scraping/scraping-navbar.service';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrl: './stage.component.css'
})
export class StageComponent implements OnInit {

  constructor(private scrapingNavbarService: ScrapingNavbarService) { }

  ngOnInit(): void {
    this.scrapingNavbarService.showScrapingNavbar = false;
  }
}



 





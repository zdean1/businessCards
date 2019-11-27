import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { businessCard } from '../business-card/business-card.model';
import { BusinessCardService } from '../card/business-card.service';


@Component({
  selector: 'app-business-cards',
  templateUrl: './business-cards.component.html',
  styleUrls: ['./business-cards.component.css']
})
export class BusinessCardsComponent implements OnInit {
  cards;

  constructor(public router: Router, private _cardService: BusinessCardService) {
    this.cards = _cardService.cards;
  }

  ngOnInit() {
  }


}

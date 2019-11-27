import { Component, OnInit, Input } from '@angular/core';
import { businessCard } from './business-card.model';
import { BusinessCardService } from '../card/business-card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css']
})
export class BusinessCardComponent implements OnInit {
  @Input() card: businessCard;


  constructor(public _cardService: BusinessCardService, public router: Router) { }

                
  ngOnInit() {
  }

  updateCard(card: businessCard) {
    console.log('component.update');
    this._cardService.removeCard(card);
    this.router.navigate(['/update']);
  }

  removeCard(card: businessCard) {
    console.log('component.remove');
    this._cardService.removeCard(card);
  }
}

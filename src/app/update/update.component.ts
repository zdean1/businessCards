import { Component, OnInit } from '@angular/core';
import { BusinessCardService } from '../card/business-card.service';
import { Router } from '@angular/router';
import { businessCard } from '../business-card/business-card.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  card: businessCard;
  private form: FormGroup;
  showCam: Boolean = false;

  constructor(public authService: AuthService, 
              public router: Router, 
              private formBuilder: FormBuilder, 
              private _cardService: BusinessCardService) { }

  ngOnInit() {
    console.log('ngOnInit');
    this.form = this.formBuilder.group({
      'name': [""],
      'email': [""],
      'position': [""],
      'company': [""],
      'phone': [""]}
    );

  }


  updateCard() {
    this.card = this.form.value;
    this._cardService.addCard(this.card);
    this.router.navigateByUrl('/businessCards');
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { businessCard } from '../business-card/business-card.model';
import { BusinessCardService } from '../card/business-card.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-newbusinesscard',
  templateUrl: './newbusinesscard.component.html',
  styleUrls: ['./newbusinesscard.component.css']
})
export class NewbusinesscardComponent implements OnInit {
  showCam: Boolean = false;
  card: businessCard;
  private form: FormGroup;
  newCard: Boolean = true;

  constructor(public authService: AuthService, 
              public router: Router, 
              private formBuilder: FormBuilder, 
              private _cardService: BusinessCardService,
              private aRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'name': [""],
      'email': [""],
      'position': [""],
      'company': [""],
      'phone': [""]
    });
  }

  onWebcamClick() {
    this.showCam = !this.showCam;
  }
  
  addCard(){
    this.card = this.form.value;
    console.log(this.card.name);
    this._cardService.addCard(this.card);
    console.log('card added');
    this.form.reset();
    this.router.navigateByUrl('/businessCards');
  }
}
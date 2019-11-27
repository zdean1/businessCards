import { Injectable } from '@angular/core';
import { businessCard } from '../business-card/business-card.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class BusinessCardService {
  private cardsCollection: AngularFirestoreCollection<businessCard>;
  cards: Observable<businessCard[]>;
  businessCard: businessCard;

  constructor(private _firebase: AngularFirestore) {
    this.cardsCollection = _firebase.collection<businessCard>('card');
    this.cards = this.cardsCollection.valueChanges();
  }

  addCard(card: businessCard) {
    const id = this._firebase.createId();
    card.id = id;
    return this.cardsCollection.doc(id).set(card);
  }

  updateCard(card: businessCard) {
    console.log('service.update');
    return this.cardsCollection.doc(card.id).update(card);
  }

  removeCard(card: businessCard) {
    console.log('service.remove');
    return this.cardsCollection.doc(card.id).delete();
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { WebcamModule } from 'ngx-webcam';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BusinessCardsComponent } from './business-cards/business-cards.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { BusinessCardComponent } from './business-card/business-card.component';
import { WebcamComponent } from './webcam/webcam.component';
import { NewbusinesscardComponent } from './newbusinesscard/newbusinesscard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BusinessCardsComponent,
    NotFoundComponent,
    BusinessCardComponent,
    WebcamComponent,
    NewbusinesscardComponent,
    NavigationComponent,
    UpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'businessCardsApp'),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AngularFireDatabaseModule,
    WebcamModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

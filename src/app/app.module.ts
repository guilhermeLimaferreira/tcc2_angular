import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBmCqXauGRO9hOxGPKPiLjSNFe4WJ3X024",
    authDomain: "seu-auth-domain",
    projectId: "projeto-angular-tcc2",
    storageBucket: "projeto-angular-tcc2.appspot.com",
    appId: "1:989441296501:android:fa8ad290b8ddd11838903c"
  }
};


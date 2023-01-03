import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent, AppRoutingModule } from 'src/app';
import { HeaderComponent } from 'src/app/components/header';
import { FooterComponent } from 'src/app/components/footer';
import { AboutComponent } from 'src/app/components/pages/about';
import { HomeComponent } from 'src/app/components/pages/home';
import { NewMomentComponent } from 'src/app/components/pages/new-moment';
import { MomentFormComponent } from 'src/app/components/moment-form';
import { MessagesComponent } from 'src/app/components/messages';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    NewMomentComponent,
    MomentFormComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

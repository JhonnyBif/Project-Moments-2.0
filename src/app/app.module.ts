import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent, AppRoutingModule } from 'src/app';
import { HeaderComponent } from 'src/app/components/header';
import { FooterComponent } from 'src/app/components/footer';
import { AboutComponent } from 'src/app/components/pages/about';
import { HomeComponent } from 'src/app/components/pages/home';
import { NewMomentComponent } from 'src/app/components/pages/new-moment';
import { MomentFormComponent } from 'src/app/components/moment-form';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    NewMomentComponent,
    MomentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

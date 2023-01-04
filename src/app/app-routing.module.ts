import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/pages/home';
import { AboutComponent } from 'src/app/components/pages/about';
import { NewMomentComponent } from 'src/app/components/pages/new-moment';
import { EditMomentComponent } from 'src/app/components/pages/edit-moment';
import { MomentComponent } from 'src/app/components/pages/moment';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'moments/new', component: NewMomentComponent },
  { path: 'moments/edit/:id', component: EditMomentComponent },
  { path: 'moments/:id', component: MomentComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path: 'housingLocation', component: HousingLocationComponent},
  {path: 'home', component: HomeComponent},
  {path: 'details/:id', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

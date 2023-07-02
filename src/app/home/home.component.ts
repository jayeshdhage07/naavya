import { Component, OnInit } from '@angular/core';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  housingLocationList: Housinglocation[] = [];
  constructor(private housingService: HousingService) { 
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

  ngOnInit(): void {
  }




}

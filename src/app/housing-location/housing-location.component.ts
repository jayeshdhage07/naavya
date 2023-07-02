import { Component, Input, OnInit } from '@angular/core';
import { Housinglocation } from '../housinglocation';
@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.scss']
})
export class HousingLocationComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  @Input() housingLocation!: Housinglocation;


}

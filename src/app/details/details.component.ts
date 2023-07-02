import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-details',
  template: `
  <mat-grid-list cols="1" rowHeight="4:1">
    <mat-grid-tile>
      <mat-card-header>
        <mat-card-title>{{ housingLocation?.name }}</mat-card-title>
        <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
      </mat-card-header>
      <mat-card-content>
      <mat-list role="list">
        <mat-list-item role="listitem">Units available:&nbsp;&nbsp;  <b>{{housingLocation?.availableUnits}}</b></mat-list-item>
        <mat-list-item role="listitem">Does this location have wifi:&nbsp;&nbsp;  <b>{{housingLocation?.wifi}}</b></mat-list-item>
        <mat-list-item role="listitem">Does this location have laundry:&nbsp;&nbsp;  <b>{{housingLocation?.laundry}}</b></mat-list-item>
      </mat-list>
      </mat-card-content>
    </mat-grid-tile>
  </mat-grid-list>
  `,
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  housingLocation: Housinglocation | undefined;
  housingLocationId = -1;
  constructor(private housingService: HousingService, 
    private route: ActivatedRoute) { 
      const housingLocationId = Number(this.route.snapshot.params['id']);
      this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }

  ngOnInit(): void {
  }

}

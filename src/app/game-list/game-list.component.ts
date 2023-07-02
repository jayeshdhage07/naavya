import { Component, Input, OnInit } from '@angular/core';
import { Housinglocation } from '../housinglocation';
@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  @Input() housingLocation!: Housinglocation;


}

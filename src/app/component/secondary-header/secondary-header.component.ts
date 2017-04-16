import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ai-secondary-header',
  templateUrl: './secondary-header.component.html',
  styleUrls: ['./secondary-header.component.scss']
})
export class SecondaryHeaderComponent implements OnInit {

  public levels = [
    { name: 'Top Level', value: 0},
    { name: '1st Level', value: 1},
    { name: '2nd Level', value: 2}
  ];

  public selectedLevel = this.levels[0];

  public currencies = [
    { name: '$USD', value: 'USD'},
    { name: '$AUD', value: 'AUD'}
  ];

  public selectedCurrency = this.currencies[0];



  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ai-tabview-container',
  templateUrl: './tabview-container.component.html',
  styleUrls: ['./tabview-container.component.scss']
})
export class TabviewContainerComponent implements OnInit {

  public tabs = [
    {
      title: 'Staffing',
      link: 'staffing'
    },
    {
      title: 'Ramp',
      link: 'ramp'
    },
    {
      title: 'Territories',
      link: 'territories'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

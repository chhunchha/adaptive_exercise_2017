import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ai-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.scss']
})
export class PlanListComponent implements OnInit {

  plans = [
    { name: '2016 Staffing Plan' },
    { name: '2017 Staffing Plan' },
    { name: 'Other Staffing Plan' }
  ];

  selectedPlan = this.plans[0];

  constructor() {
  }

  ngOnInit() {
  }

}

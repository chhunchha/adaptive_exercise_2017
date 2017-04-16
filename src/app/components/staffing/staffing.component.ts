import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ai-staffing',
  templateUrl: './staffing.component.html',
  styleUrls: ['./staffing.component.scss']
})
export class StaffingComponent implements OnInit {
  public chartTitle = 'STAFFING';
  public barChartLabels: string[] = ['Q1', 'Q2', 'Q3', 'Q4'];
  public barChartData: any[] = [
    { data: [4, 7, 2, 6], label: 'New' },
    { data: [3, 5, 5, 2], label: 'Terminations' }
  ];

  public staffingTitle = 'Segment: All, Rep: All, Industry: All, Region: West';

  public staffingData = [
    ['' , 'Q1', 'Q2', 'Q3', 'Q4', 'FY16'],
    ['HC', 23, 26, 25, 29, 29 ],
    ['New', 4, 7, 2, 6, 19 ],
    ['Terminations', 3, 5, 5, 2, 15 ]
  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ai-planning-container',
  templateUrl: './planning-container.component.html',
  styleUrls: ['./planning-container.component.scss']
})
export class PlanningContainerComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.router.navigate(['staffing'], { relativeTo: this.activatedRoute });
  }

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContainerComponent } from '../component/main-container/main-container.component';
import { PlanningContainerComponent } from '../component/planning-container/planning-container.component';
import { StaffingComponent } from '../component/staffing/staffing.component';
import { RampComponent } from '../component/ramp/ramp.component';
import { TerritoriesComponent } from '../component/territories/territories.component';

const routes: Routes = [
  {
    path: '', component: MainContainerComponent,
    children: [
      {
        path: 'planning', component: PlanningContainerComponent,
        children: [
          { path: 'staffing', component: StaffingComponent },
          { path: 'ramp', component: RampComponent },
          { path: 'territories', component: TerritoriesComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

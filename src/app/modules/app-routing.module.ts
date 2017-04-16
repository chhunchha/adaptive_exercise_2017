import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContainerComponent } from '../components/main-container/main-container.component';
import { PlanningContainerComponent } from '../components/planning-container/planning-container.component';
import { StaffingComponent } from '../components/staffing/staffing.component';
import { RampComponent } from '../components/ramp/ramp.component';
import { TerritoriesComponent } from '../components/territories/territories.component';
import { UnderConstructionComponent } from '../components/under-construction/under-construction.component';

const routes: Routes = [
  {
    path: '', component: MainContainerComponent,
    children: [
      {
        path: 'planning', component: PlanningContainerComponent,
        children: [
          { path: 'staffing', component: StaffingComponent },
          { path: 'ramp', component: UnderConstructionComponent },
          { path: 'territories', component: UnderConstructionComponent }
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

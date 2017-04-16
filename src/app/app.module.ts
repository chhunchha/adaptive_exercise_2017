import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MainContainerComponent } from './component/main-container/main-container.component';
import { PlanListComponent } from './component/plan-list/plan-list.component';
import { HeaderComponent } from './component/header/header.component';
import { PlanningContainerComponent } from './component/planning-container/planning-container.component';
import { SecondaryHeaderComponent } from './component/secondary-header/secondary-header.component';
import { TabviewContainerComponent } from './component/tabview-container/tabview-container.component';
import { StaffingComponent } from './component/staffing/staffing.component';
import { RampComponent } from './component/ramp/ramp.component';
import { TerritoriesComponent } from './component/territories/territories.component';
import { ChartsModule } from 'ng2-charts';
import { MultibarchartComponent } from './component/multibarchart/multibarchart.component';
import { UnderConstructionComponent } from './component/under-construction/under-construction.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainContainerComponent,
    PlanListComponent,
    HeaderComponent,
    PlanningContainerComponent,
    SecondaryHeaderComponent,
    TabviewContainerComponent,
    StaffingComponent,
    RampComponent,
    TerritoriesComponent,
    MultibarchartComponent,
    UnderConstructionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

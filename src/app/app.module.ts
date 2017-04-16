import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { PlanListComponent } from './components/plan-list/plan-list.component';
import { HeaderComponent } from './components/header/header.component';
import { PlanningContainerComponent } from './components/planning-container/planning-container.component';
import { SecondaryHeaderComponent } from './components/secondary-header/secondary-header.component';
import { TabviewContainerComponent } from './components/tabview-container/tabview-container.component';
import { StaffingComponent } from './components/staffing/staffing.component';
import { RampComponent } from './components/ramp/ramp.component';
import { TerritoriesComponent } from './components/territories/territories.component';
import { ChartsModule } from 'ng2-charts';
import { MultibarchartComponent } from './components/multibarchart/multibarchart.component';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';

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

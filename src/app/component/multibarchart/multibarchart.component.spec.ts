import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultibarchartComponent } from './multibarchart.component';

describe('MultibarchartComponent', () => {
  let component: MultibarchartComponent;
  let fixture: ComponentFixture<MultibarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultibarchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultibarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

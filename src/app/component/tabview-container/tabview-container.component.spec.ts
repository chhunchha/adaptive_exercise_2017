import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabviewContainerComponent } from './tabview-container.component';

describe('TabviewContainerComponent', () => {
  let component: TabviewContainerComponent;
  let fixture: ComponentFixture<TabviewContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabviewContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabviewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

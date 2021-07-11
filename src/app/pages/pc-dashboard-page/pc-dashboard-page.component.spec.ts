import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcDashboardPageComponent } from './pc-dashboard-page.component';

describe('PcDashboardPageComponent', () => {
  let component: PcDashboardPageComponent;
  let fixture: ComponentFixture<PcDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcDashboardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

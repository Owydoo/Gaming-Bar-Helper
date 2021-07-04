import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PctimerComponent } from './pctimer.component';

describe('PctimerComponent', () => {
  let component: PctimerComponent;
  let fixture: ComponentFixture<PctimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PctimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PctimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

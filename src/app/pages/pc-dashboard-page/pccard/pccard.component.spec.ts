import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCCardComponent } from './pccard.component';

describe('PCCardComponent', () => {
  let component: PCCardComponent;
  let fixture: ComponentFixture<PCCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PCCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PCCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

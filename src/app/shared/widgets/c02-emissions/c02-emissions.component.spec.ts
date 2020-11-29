import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C02EmissionsComponent } from './c02-emissions.component';

describe('C02EmissionsComponent', () => {
  let component: C02EmissionsComponent;
  let fixture: ComponentFixture<C02EmissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C02EmissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C02EmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

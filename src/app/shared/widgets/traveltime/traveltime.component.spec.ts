import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraveltimeComponent } from './traveltime.component';

describe('TraveltimeComponent', () => {
  let component: TraveltimeComponent;
  let fixture: ComponentFixture<TraveltimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraveltimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraveltimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

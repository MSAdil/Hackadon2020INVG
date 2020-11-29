import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberoftripsComponent } from './numberoftrips.component';

describe('NumberoftripsComponent', () => {
  let component: NumberoftripsComponent;
  let fixture: ComponentFixture<NumberoftripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberoftripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberoftripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

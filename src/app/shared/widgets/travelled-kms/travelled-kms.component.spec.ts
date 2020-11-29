import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelledKmsComponent } from './travelled-kms.component';

describe('TravelledKmsComponent', () => {
  let component: TravelledKmsComponent;
  let fixture: ComponentFixture<TravelledKmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelledKmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelledKmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

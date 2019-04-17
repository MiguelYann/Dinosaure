import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosauresDetailsComponent } from './dinosaures-details.component';

describe('DinosauresDetailsComponent', () => {
  let component: DinosauresDetailsComponent;
  let fixture: ComponentFixture<DinosauresDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinosauresDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinosauresDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

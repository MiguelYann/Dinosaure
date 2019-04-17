import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosauresEditComponent } from './dinosaures-edit.component';

describe('DinosauresEditComponent', () => {
  let component: DinosauresEditComponent;
  let fixture: ComponentFixture<DinosauresEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinosauresEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinosauresEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

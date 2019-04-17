import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosauresCreateComponent } from './dinosaures-create.component';

describe('DinosauresCreateComponent', () => {
  let component: DinosauresCreateComponent;
  let fixture: ComponentFixture<DinosauresCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinosauresCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinosauresCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F3dInputComponent } from './f3d-input.component';

describe('F3dInputComponent', () => {
  let component: F3dInputComponent;
  let fixture: ComponentFixture<F3dInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F3dInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F3dInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

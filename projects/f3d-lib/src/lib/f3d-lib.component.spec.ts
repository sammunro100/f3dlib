import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F3DLibComponent } from './f3d-lib.component';

describe('F3DLibComponent', () => {
  let component: F3DLibComponent;
  let fixture: ComponentFixture<F3DLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F3DLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F3DLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

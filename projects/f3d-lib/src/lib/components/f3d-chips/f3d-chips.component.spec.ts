import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F3dChipsComponent } from './f3d-chips.component';

describe('F3dChipsComponent', () => {
  let component: F3dChipsComponent;
  let fixture: ComponentFixture<F3dChipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F3dChipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F3dChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

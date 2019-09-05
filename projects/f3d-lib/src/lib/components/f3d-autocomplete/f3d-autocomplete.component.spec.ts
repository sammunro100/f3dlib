import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F3dAutocompleteComponent } from './f3d-autocomplete.component';

describe('F3dAutocompleteComponent', () => {
  let component: F3dAutocompleteComponent;
  let fixture: ComponentFixture<F3dAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F3dAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F3dAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

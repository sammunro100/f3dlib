import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F3dChipsComponent } from './f3d-chips.component';
import { CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('F3dChipsComponent', () => {
  let component: F3dChipsComponent;
  let fixture: ComponentFixture<F3dChipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [F3dChipsComponent]
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

  it('Should add a chip', () => {
    spyOn(component, 'buildChipQuery')
    const input = fixture.debugElement.query(By.css('f3d-input'));
    input.nativeElement.value = 'test';
    component.addChip(input.nativeElement);
    expect(component.chips.length).toBe(1);
    expect(component.chips[0]).toEqual({ displayValue: 'test' });
    expect(component.buildChipQuery).toHaveBeenCalledTimes(1);
    expect(component.currentSearchString).toBe('');
  });

  it('Should remove one chip at the spliced index', () => {
    component.chips = [1, 2, 3, 4];
    component.removeChip(component.chips[2]);
    expect(component.chips.length).toBe(3);
    expect(component.chips[2]).toBe(4);
  });

  it('Should emit the search string if the coniditions are met', () => {
    spyOn(component, 'buildChipQuery');
    component.searchString.subscribe((res) => {
      expect(res).toBe('test');
    });
    component.emitSearchString('test', { key: 'test' });
    expect(component.buildChipQuery).toHaveBeenCalledTimes(1);
    expect(component.currentSearchString).toBe('test');
  });

  it('Should build the chipQuery', () => {
    component.chips = [
      {
        displayValue: 'Test1'
      },
      {
        displayValue: 'Test2'
      }];
    component.currentSearchString = 'Test3';
    component.chipQuery.subscribe((res) => {
      expect(res).toEqual(['Test1', 'Test2', 'Test3']);
    });
    component.ngOnChanges();
  });
});

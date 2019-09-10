import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsDropdownComponent } from './options-dropdown.component';

describe('OptionsDropdownComponent', () => {
  let component: OptionsDropdownComponent;
  let fixture: ComponentFixture<OptionsDropdownComponent>;
  const mockData = [
    { name: 'bulbasaur-0', tumour: 'a' },
    { name: 'oddish-1', tumour: 'b' },
    { name: 'bellsprout-2', tumour: 'c' },
    { name: 'squirtle-3', tumour: 'd' },
    { name: 'psyduck-4', tumour: 'e' },
    { name: 'horsea-5', tumour: 'f' },
    { name: 'mew-9', tumour: 'g' },
    { name: 'mewtwo-10', tumour: 'h' }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OptionsDropdownComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsDropdownComponent);
    component = fixture.componentInstance;
    // @ts-ignore
    component.dataSet = mockData;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should get the correct chip value', () => {
    component.chipValue.subscribe((res) => {
      expect(res).toEqual({
        key: 'test',
        displayValue: 'test'
      });
    });
    component.getValue('test', 'test');
  });

  it('Should filter and invoked matchesValue twice', () => {
    spyOn(component, 'matchesValue');
    // @ts-ignore
    component.searchStringValue = ['Hello', 'two'];
    component.ngOnChanges();
    expect(component.matchesValue).toHaveBeenCalledTimes(2);
  });

  it('Should filter and return correctly mapped array', () => {
    spyOn(component, 'matchesValue').and.callThrough();
    spyOn(component, 'filter').and.callThrough();
    // @ts-ignore
    component.searchStringValue = ['bulb', 'b'];
    // @ts-ignore
    component.dataSet = mockData;
    component.ngOnChanges();
    expect(component.filter).toHaveBeenCalledTimes(1);
    expect(component.matchesValue).toHaveBeenCalledTimes(2);
    expect(component.displayData).toEqual([{
      name: 'bulbasaur-0'
    }]);
  });

  it('Shouldnt filter as there is no searchString ', () => {
    spyOn(component, 'matchesValue');
    // @ts-ignore
    component.searchStringValue = [];
    component.ngOnChanges();
    expect(component.matchesValue).toHaveBeenCalledTimes(0);
  });

  it('Should check whether the displayData has the relevant keys from the keyConfig', () => {
    // @ts-ignore;
    component.searchStringValue = ['bulb'];
    component.filter();
    expect(component.displayDataHasKey('tumour')).toBeFalsy();
    expect(component.displayDataHasKey('name')).toBeTruthy();
    expect(component.displayDataHasKey('x')).toBeFalsy();
  });

});

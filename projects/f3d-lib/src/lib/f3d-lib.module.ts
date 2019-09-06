import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { F3DLibComponent } from './f3d-lib.component';
import { ReactiveFormsModule } from '@angular/forms';
import { F3dInputComponent } from './components/f3d-input/f3d-input.component';
import { OptionsDropdownComponent } from './components/options-dropdown/options-dropdown.component';
import { F3dChipsComponent } from './components/f3d-chips/f3d-chips.component';
import { F3dAutocompleteComponent } from './components/f3d-autocomplete/f3d-autocomplete.component';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './components/pipes/filter.pipe';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';

@NgModule({
  declarations: [
    F3DLibComponent,
    F3dInputComponent,
    OptionsDropdownComponent,
    F3dChipsComponent,
    F3dAutocompleteComponent,
    FilterPipe,
    AutocompleteComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    F3DLibComponent,
    F3dInputComponent,
    OptionsDropdownComponent,
    F3dChipsComponent,
    F3dAutocompleteComponent
  ],
})
export class F3DLibModule { }

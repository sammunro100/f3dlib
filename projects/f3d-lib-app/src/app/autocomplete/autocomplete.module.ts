import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutocompleteRoutingModule } from './autocomplete-routing.module';
import { AutocompleteComponent } from './autocomplete.component';
import { F3DLibModule } from 'f3d-lib';

@NgModule({
  declarations: [AutocompleteComponent],
  imports: [
    CommonModule,
    AutocompleteRoutingModule,
    F3DLibModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AutocompleteModule { }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  data = [
    { name: 'bulbasaur-0', tumour: 'a' },
    { name: 'oddish-1', tumour: 'b' },
    { name: 'bellsprout-2', tumour: 'c' },
    { name: 'squirtle-3', tumour: 'd' },
    { name: 'psyduck-4', tumour: 'e' },
    { name: 'horsea-5', tumour: 'f' },
    { name: 'mew-9', tumour: 'g' },
    { name: 'mewtwo-10', tumour: 'h' },
  ]

  displayNameMap = {
    name: 'Name',
    tumour: 'Age of the user'
  }

  objectKeysConfig;

  constructor() { }

  ngOnInit() {
  }

}

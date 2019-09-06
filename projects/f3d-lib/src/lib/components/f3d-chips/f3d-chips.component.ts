import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'f3d-chips',
  templateUrl: './f3d-chips.component.html',
  styleUrls: ['./f3d-chips.component.scss']
})
export class F3dChipsComponent implements OnInit, OnChanges {

  @Input() chips;
  @Output() searchString = new EventEmitter();
  @Output() chipQuery = new EventEmitter();
  chipQueryArray = [];
  currentSearchString: string;

  constructor(
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.buildChipQuery();
  }

  emitSearchString(searchString, event) {
    if (searchString !== '' || event.key !== 'Enter') {
      this.searchString.emit(searchString);
      this.currentSearchString = searchString;
      this.buildChipQuery();
    }

  }

  addChip(htmlElement: HTMLInputElement) {
    this.chips.push({ displayValue: htmlElement.value });
    htmlElement.value = '';
    this.currentSearchString = '';
    this.buildChipQuery();
  }

  removeChip(chip) {
    this.chips.splice(this.chips.indexOf(chip), 1);
    this.buildChipQuery();
  }


  buildChipQuery() {
    this.chipQueryArray = [];
    if (this.chips.length > 0) {
      this.chips.forEach(chip => {
        this.chipQueryArray.push(chip.displayValue);
      });
    }
    if (this.currentSearchString !== '') {
      this.chipQueryArray.push(this.currentSearchString);
    }
    this.chipQuery.emit(this.chipQueryArray);
  }

}

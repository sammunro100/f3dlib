import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'f3d-chips',
  templateUrl: './f3d-chips.component.html',
  styleUrls: ['./f3d-chips.component.scss']
})
export class F3dChipsComponent implements OnInit, OnChanges {

  @Input() chips;
  @Output() searchString = new EventEmitter();
  @Output() chipQuery = new EventEmitter();
  chipQueryString = '';

  constructor(
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.buildChipQuery();
  }

  addChip(htmlElement) {
    this.chips.push({ displayValue: htmlElement.value });
    htmlElement.value = '';
    this.emitSearchString('');
  }

  removeChip(chip) {
    this.chips.splice(this.chips.indexOf(chip), 1);
    this.buildChipQuery();
  }

  clearChips() {
    this.chips = [];
    this.buildChipQuery();
  }

  emitSearchString(searchString) {
    this.buildChipQuery(searchString);
  }

  buildChipQuery(searchString?) {
    if (this.chips.length > 0) {
      this.chipQueryString = '';
      this.chips.forEach(ele => {
        this.chipQueryString += `${ele.displayValue}`;
      });
      if (searchString !== undefined) {
        this.chipQueryString += searchString;
      }
      if (this.chipQueryString !== undefined || searchString !== undefined) {
        this.chipQuery.emit(this.chipQueryString);
      }
    }
  }

}

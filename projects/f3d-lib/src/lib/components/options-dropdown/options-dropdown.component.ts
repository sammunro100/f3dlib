import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'f3d-options-dropdown',
  templateUrl: './options-dropdown.component.html',
  styleUrls: ['./options-dropdown.component.scss']
})
export class OptionsDropdownComponent implements OnChanges {

  @Input() searchStringValue: [];
  @Input() dataSet: [];
  @Input() objectKeysConfig;
  displayData: any[] = []; 
  @Output() chipValue = new EventEmitter();
  filterableKeys = ['name', 'tumour'];
  tempArr = [];
  @Input() showOptions = false;

  constructor(
  ) { }

  ngOnChanges() {
    if (this.searchStringValue && this.searchStringValue.length > 0) {
      this.filter();
    }
  }

  getValue(ele, keyValue) {
    this.chipValue.emit({
      key: keyValue,
      displayValue: ele
    });
  }

  filter() {
    this.tempArr = this.matchesValue(this.dataSet, 0);
    let count = 0;
    while (count < this.searchStringValue.length - 1) {
      count++;
      this.tempArr = this.matchesValue(this.tempArr, count)
    }
  }

  matchesValue(arr, index) {
    this.displayData = [];
    arr.map(item => {
      for (const key of this.filterableKeys) {
        if (this.searchStringValue[index] && item[key]) {
          //@ts-ignore
          if (item[key].includes(this.searchStringValue[index].toLowerCase().trim())) {
            const tempObj = {};
            tempObj[key] = item[key];
            this.displayData.push(tempObj);
          }
        }
      }
    });
    return this.displayData;
  }

  displayDataHasKey(key) {
    let hasOwnKey;
    this.displayData.forEach(ele => {
      if (ele.hasOwnProperty(key)) {
        hasOwnKey = true;
      }
    });
    return hasOwnKey;
  }
}

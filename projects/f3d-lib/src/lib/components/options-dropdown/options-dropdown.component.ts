import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'f3d-options-dropdown',
  templateUrl: './options-dropdown.component.html',
  styleUrls: ['./options-dropdown.component.scss']
})
export class OptionsDropdownComponent implements OnInit {

  @Input() searchStringValue: string;
  @Input() dataSet: [];
  @Input() objectKeysConfig;
  displayData;
  @Output() chipValue = new EventEmitter();

  constructor(
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.displayData = this.filter(this.searchStringValue);
    this.filter(this.searchStringValue);
  }

  getValue(ele, keyValue) {
    this.chipValue.emit({
      key: keyValue,
      displayValue: ele
    });
  }

  filter(searchTerm) {
    if (this.dataSet !== undefined && searchTerm) {
      const filterableKeys = ['name', 'tumour'];
      const returnObj = [];
      this.dataSet.map(item => {
        for (const key of filterableKeys) {
          //@ts-ignore
          if (item[key].toLowerCase().includes(searchTerm.toLowerCase())) {
            const tempObj = {};
            tempObj[key] = item[key];
            returnObj.push(tempObj);
          }
        }
      });
      return returnObj;
    }

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

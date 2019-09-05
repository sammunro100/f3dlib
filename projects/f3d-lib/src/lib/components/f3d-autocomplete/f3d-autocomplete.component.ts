import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'f3d-autocomplete',
  templateUrl: './f3d-autocomplete.component.html',
  styleUrls: ['./f3d-autocomplete.component.scss']
})
export class F3dAutocompleteComponent implements OnInit {

  chips = [];
  showList = false;
  searchString: string;
  @Input() objectKeysConfig: any;
  @Input() dataSet: any;
  @Input() dataSetViewValueKey: string;
  @ViewChild('chipsEle', {static: false}) chipsEle;
  @ViewChild('options', {static: false}) options;

  constructor(
  ) { }

  ngOnInit() {
  }

  addToChips(x) {
    this.chips.push(x);
    this.chips = [...this.chips];
  }

  captureSearchString(event){
    this.searchString = event;
  }

  captureChipQuery(event){
    this.searchString = event;
  }

  // clickedOutside(){
  //   fromEvent(document, 'click')
  //   .pipe(
  //     //@ts-ignore
  //     filter(event =>{
  //       const clickTarget = event.target as HTMLElement;
  //     })
  //   )
  // }

}

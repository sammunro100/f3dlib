import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as uuid from 'uuid';



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
  @ViewChild('autoCompleteContainer', { static: true }) autoCompleteContainer: ElementRef;
  showOptions = false;
  // myId = uuid.v4();

  constructor(
  ) { }

  ngOnInit() {
    this.clickedOutside();
    // console.log(this.myId);
  }

  addToChips(x) {
    this.chips.push(x);
    this.chips = [...this.chips];
    this.searchString = '';
  }

  captureSearchString(event) {
    this.searchString = event;
  }

  captureChipQuery(event) {
    this.searchString = event;
  }

  clickedOutside() {
    fromEvent(document, 'click')
      .pipe(
        // @ts-ignore
        filter(event => {
          const clickTarget = event as any;
          if (!this.autoCompleteContainer.nativeElement.contains(clickTarget.path[4])
            && !this.autoCompleteContainer.nativeElement.contains(clickTarget.path[5])) {
            if (!this.autoCompleteContainer.nativeElement.contains(clickTarget.target)) {
              this.close();
            } else {
              this.open();
            }
          } else {
            this.open();
          }
        })
      ).subscribe(() =>
        console.log(1)
      );
  }

  close() {
    this.showOptions = false;
  }

  open() {
    this.showOptions = true;
  }
}

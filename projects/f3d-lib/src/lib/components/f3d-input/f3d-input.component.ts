import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'f3d-input',
  templateUrl: './f3d-input.component.html',
  styleUrls: ['./f3d-input.component.scss']
})
export class F3dInputComponent implements OnInit {
  @Input() width; 
  @Output() clearChips = new EventEmitter();
  @Output() searchString = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clearEventEmitter(){
    this.clearChips.emit();
  }

  emitSearchString(searchString){
    this.searchString.emit(searchString);
  }
}

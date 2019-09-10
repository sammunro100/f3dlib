import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'f3d-input',
  templateUrl: './f3d-input.component.html',
  styleUrls: ['./f3d-input.component.scss']
})
export class F3dInputComponent implements OnInit {
  @Input() width;
  @Output() elementReference = new EventEmitter();
  @Output() clearChips = new EventEmitter();
  @Output() stringValue = new EventEmitter();
  @ViewChild('f3dInput', {static: false}) f3dInput: ElementRef;

  constructor() { }

  ngOnInit() {
    // this.elementReference.emit(this.f3dInput);
  }

  ngAfterViewInit(){
    this.elementReference.emit(this.f3dInput);
  }
  // clearEventEmitter() {
  //   this.clearChips.emit();
  // }

  emitString(stringValue) {
    this.stringValue.emit(stringValue);
  }
}

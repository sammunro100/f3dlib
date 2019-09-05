import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  public data = [
    {
      key: 'test',
      value: 'test'
    }
  ]

  add(){
    this.data.push(
      {
        key: 'test',
        value: 'test'
      }
    )
  }


}

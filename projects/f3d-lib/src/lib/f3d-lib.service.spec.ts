import { TestBed } from '@angular/core/testing';

import { F3DLibService } from './f3d-lib.service';

describe('F3DLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: F3DLibService = TestBed.get(F3DLibService);
    expect(service).toBeTruthy();
  });
});

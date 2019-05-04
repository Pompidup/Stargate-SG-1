import { TestBed } from '@angular/core/testing';

import { RaindropService } from './raindrop.service';

describe('RaindropService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RaindropService = TestBed.get(RaindropService);
    expect(service).toBeTruthy();
  });
});

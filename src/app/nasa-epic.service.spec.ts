import { TestBed } from '@angular/core/testing';

import { NasaEPICService } from './nasa-epic.service';

describe('NasaEPICService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NasaEPICService = TestBed.get(NasaEPICService);
    expect(service).toBeTruthy();
  });
});

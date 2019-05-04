import { TestBed } from '@angular/core/testing';

import { WaterModelService } from './water-model.service';

describe('WaterModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WaterModelService = TestBed.get(WaterModelService);
    expect(service).toBeTruthy();
  });
});

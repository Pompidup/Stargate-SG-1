import { TestBed } from '@angular/core/testing';

import { WaterEffectService } from './water-effect.service';

describe('WaterEffectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WaterEffectService = TestBed.get(WaterEffectService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { WormHoleService } from './worm-hole.service';

describe('WormHoleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WormHoleService = TestBed.get(WormHoleService);
    expect(service).toBeTruthy();
  });
});

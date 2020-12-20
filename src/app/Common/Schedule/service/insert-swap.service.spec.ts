import { TestBed } from '@angular/core/testing';

import { InsertSwapService } from './insert-swap.service';

describe('InsertSwapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsertSwapService = TestBed.get(InsertSwapService);
    expect(service).toBeTruthy();
  });
});

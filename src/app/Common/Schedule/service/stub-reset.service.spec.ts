import { TestBed } from '@angular/core/testing';

import { StubResetService } from './stub-reset.service';

describe('StubResetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StubResetService = TestBed.get(StubResetService);
    expect(service).toBeTruthy();
  });
});

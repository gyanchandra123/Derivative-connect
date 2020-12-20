import { TestBed } from '@angular/core/testing';

import { ResetRecievingService } from './reset-recieving.service';

describe('ResetRecievingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResetRecievingService = TestBed.get(ResetRecievingService);
    expect(service).toBeTruthy();
  });
});

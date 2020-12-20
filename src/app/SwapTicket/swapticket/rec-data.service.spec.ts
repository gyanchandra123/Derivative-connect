import { TestBed } from '@angular/core/testing';

import { RecDataService } from './rec-data.service';

describe('RecDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecDataService = TestBed.get(RecDataService);
    expect(service).toBeTruthy();
  });
});

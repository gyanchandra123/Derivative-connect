import { TestBed } from '@angular/core/testing';

import { SearchresultdatasharingService } from './searchresultdatasharing.service';

describe('SearchresultdatasharingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchresultdatasharingService = TestBed.get(SearchresultdatasharingService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AssetblotterService } from './assetblotter.service';

describe('AssetblotterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssetblotterService = TestBed.get(AssetblotterService);
    expect(service).toBeTruthy();
  });
});

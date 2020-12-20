import { TestBed } from '@angular/core/testing';

import { InsertSwapPaymentService } from './insert-swap-payment.service';

describe('InsertSwapPaymentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsertSwapPaymentService = TestBed.get(InsertSwapPaymentService);
    expect(service).toBeTruthy();
  });
});

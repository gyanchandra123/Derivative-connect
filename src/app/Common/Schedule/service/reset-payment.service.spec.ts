import { TestBed } from '@angular/core/testing';

import { ResetPaymentService } from './reset-payment.service';

describe('ResetPaymentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResetPaymentService = TestBed.get(ResetPaymentService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CryptoTriggerService } from './crypto-trigger.service';

describe('CryptoTriggerService', () => {
  let service: CryptoTriggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoTriggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

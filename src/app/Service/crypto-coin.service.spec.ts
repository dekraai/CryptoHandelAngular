import { TestBed } from '@angular/core/testing';

import { CryptoCoinService } from './crypto-coin.service';

describe('CryptoCoinService', () => {
  let service: CryptoCoinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoCoinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

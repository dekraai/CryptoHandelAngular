import { TestBed } from '@angular/core/testing';

import { MyCryptoService } from './my-crypto.service';

describe('MyCryptoService', () => {
  let service: MyCryptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyCryptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

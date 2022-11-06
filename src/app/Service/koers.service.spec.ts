import { TestBed } from '@angular/core/testing';

import { KoersService } from './koers.service';

describe('KoersService', () => {
  let service: KoersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KoersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

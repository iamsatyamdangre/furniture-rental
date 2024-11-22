import { TestBed } from '@angular/core/testing';

import { CartlistingService } from './cartlisting.service';

describe('CartlistingService', () => {
  let service: CartlistingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartlistingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

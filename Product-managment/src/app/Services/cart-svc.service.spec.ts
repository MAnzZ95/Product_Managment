import { TestBed } from '@angular/core/testing';

import { CartSvcService } from './cart-svc.service';

describe('CartSvcService', () => {
  let service: CartSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

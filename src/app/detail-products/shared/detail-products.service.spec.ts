import { TestBed } from '@angular/core/testing';

import { DetailProductsService } from './detail-products.service';

describe('DetailProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailProductsService = TestBed.get(DetailProductsService);
    expect(service).toBeTruthy();
  });
});

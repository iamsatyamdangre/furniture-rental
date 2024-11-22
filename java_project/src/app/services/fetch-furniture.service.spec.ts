import { TestBed } from '@angular/core/testing';

import { FetchFurnitureService } from './fetch-furniture.service';

describe('FetchFurnitureService', () => {
  let service: FetchFurnitureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchFurnitureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

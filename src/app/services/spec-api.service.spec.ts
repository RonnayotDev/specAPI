import { TestBed } from '@angular/core/testing';

import { SpecAPIService } from './spec-api.service';

describe('SpecAPIService', () => {
  let service: SpecAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

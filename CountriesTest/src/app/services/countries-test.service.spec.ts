import { TestBed } from '@angular/core/testing';

import { CountriesTestService } from './countries-test.service';

describe('CountriesTestService', () => {
  let service: CountriesTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountriesTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

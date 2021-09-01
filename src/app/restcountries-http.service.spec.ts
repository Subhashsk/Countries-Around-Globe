import { TestBed } from '@angular/core/testing';

import { RestcountriesHttpService } from './restcountries-http.service';

describe('RestcountriesHttpService', () => {
  let service: RestcountriesHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestcountriesHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

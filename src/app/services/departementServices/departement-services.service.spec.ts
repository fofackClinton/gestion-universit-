import { TestBed } from '@angular/core/testing';

import { DepartementServicesService } from './departement-services.service';

describe('DepartementServicesService', () => {
  let service: DepartementServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartementServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

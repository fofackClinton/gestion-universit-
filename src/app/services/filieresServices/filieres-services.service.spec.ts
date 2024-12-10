import { TestBed } from '@angular/core/testing';

import { FilieresServicesService } from './filieres-services.service';

describe('FilieresServicesService', () => {
  let service: FilieresServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilieresServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

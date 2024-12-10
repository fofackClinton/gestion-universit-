import { TestBed } from '@angular/core/testing';

import { EnseignantServicesService } from './enseignant-services.service';

describe('EnseignantServicesService', () => {
  let service: EnseignantServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnseignantServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

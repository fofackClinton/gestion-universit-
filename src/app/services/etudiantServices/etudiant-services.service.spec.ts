import { TestBed } from '@angular/core/testing';

import { EtudiantServicesService } from './etudiant-services.service';

describe('EtudiantServicesService', () => {
  let service: EtudiantServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtudiantServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

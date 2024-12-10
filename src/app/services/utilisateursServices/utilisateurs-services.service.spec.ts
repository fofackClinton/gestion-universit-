import { TestBed } from '@angular/core/testing';

import { UtilisateursServicesService } from './utilisateurs-services.service';

describe('UtilisateursServicesService', () => {
  let service: UtilisateursServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilisateursServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AuthentificateurService } from './authentificateur.service';

describe('AuthentificateurService', () => {
  let service: AuthentificateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthentificateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

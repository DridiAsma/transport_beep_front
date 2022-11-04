import { TestBed } from '@angular/core/testing';

import { AuthChauffeurService } from './auth-chauffeur.service';

describe('AuthChauffeurService', () => {
  let service: AuthChauffeurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthChauffeurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

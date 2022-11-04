import { TestBed } from '@angular/core/testing';

import { AuthchauffeurService } from './authchauffeur.service';

describe('AuthchauffeurService', () => {
  let service: AuthchauffeurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthchauffeurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

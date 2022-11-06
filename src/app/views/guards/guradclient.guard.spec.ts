import { TestBed } from '@angular/core/testing';

import { GuradclientGuard } from './guradclient.guard';

describe('GuradclientGuard', () => {
  let guard: GuradclientGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuradclientGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

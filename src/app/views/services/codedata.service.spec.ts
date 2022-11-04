import { TestBed } from '@angular/core/testing';

import { CodedataService } from './codedata.service';

describe('CodedataService', () => {
  let service: CodedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

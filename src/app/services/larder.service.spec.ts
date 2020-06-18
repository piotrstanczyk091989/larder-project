import { TestBed } from '@angular/core/testing';

import { LarderService } from './larder.service';

describe('LarderService', () => {
  let service: LarderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LarderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

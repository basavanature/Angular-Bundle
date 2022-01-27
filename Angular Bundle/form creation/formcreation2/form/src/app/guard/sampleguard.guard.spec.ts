import { TestBed } from '@angular/core/testing';

import { SampleguardGuard } from './sampleguard.guard';

describe('SampleguardGuard', () => {
  let guard: SampleguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SampleguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

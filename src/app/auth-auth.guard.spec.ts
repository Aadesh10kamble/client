import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authAuthGuard } from './auth-auth.guard';

describe('authAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authAuthGuard: CanActivateFn = (route, state) => {
  const router = inject (Router);
  const accessToken = window.localStorage.getItem ('accessToken')
  if (accessToken === null) {
    router.navigateByUrl ('auth');
    return false;
  }
  return true;
};

export const authLoginAuthGuard: CanActivateFn = (route, state) => {
  const router = inject (Router);
  const accessToken = window.localStorage.getItem ('accessToken')
  console.log (accessToken);
  if (accessToken !== null) {
    console.log ("Navigate")
    router.navigateByUrl ('/');
    return false;
  }
  return true;
};

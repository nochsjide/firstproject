import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const studentGuard: CanActivateFn = (route, state) => {
  const currentStudent = JSON.parse(localStorage.getItem('currentstudent') || 'null');
  const router = inject(Router);

  if (!currentStudent) {
    router.navigate(['/studentsignin']); // Redirect to sign-in if not authenticated
    return false;
  }
  return true;
};

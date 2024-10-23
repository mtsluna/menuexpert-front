import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "../../../services/auth/auth.service";
import {inject} from "@angular/core";
import {firstValueFrom} from "rxjs";

export const authGuard: CanActivateFn = async (route, state) => {

  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  const user = await firstValueFrom(authService.getSession());

  if (user) {
    console.log('???')
    return router.navigate([localStorage.getItem('base_url')]);
  }
  return true;
};

import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate() {
    let user = this.authService.currentUser;
    if (user && user.admin) {
      return true;
    }

    this.router.navigate(['/no-access']);
    return false;
  }
}

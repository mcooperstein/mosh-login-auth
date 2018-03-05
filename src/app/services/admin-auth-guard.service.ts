import { Injectable } from '@angular/core';
import { AuthService } from "app/services/auth.service";
import { Router, CanActivate } from "@angular/router";

@Injectable()
export class AdminAuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(){
    if(this.authService.currentUser.admin) return true;

    this.router.navigate(['/no-access']);
    return false;
  }

}

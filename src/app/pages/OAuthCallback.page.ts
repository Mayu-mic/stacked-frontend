import { Router } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'stacked-app',
    template: ``
})
export class OAuthCallbackPage implements OnInit {

    constructor(
        private tokenService: Angular2TokenService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.tokenService.processOAuthCallback();
        const redirectTo = localStorage.getItem('redirectTo') || '/';
        this.router.navigateByUrl(redirectTo);
    }
}

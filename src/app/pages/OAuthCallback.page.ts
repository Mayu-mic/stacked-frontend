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

        localStorage.setItem('accessToken', this.tokenService.currentAuthData.accessToken);
        localStorage.setItem('client', this.tokenService.currentAuthData.client);
        localStorage.setItem('expiry', this.tokenService.currentAuthData.expiry);
        localStorage.setItem('tokenType', this.tokenService.currentAuthData.tokenType);
        localStorage.setItem('uid', this.tokenService.currentAuthData.uid);

        this.router.navigateByUrl('/');
    }
}

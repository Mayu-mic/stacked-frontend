import { Angular2TokenService } from 'angular2-token';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'stacked-app',
    template: ``
})
export class OAuthCallbackPage implements OnInit {

    constructor(private tokenService: Angular2TokenService) {}

    ngOnInit(): void {
        this.tokenService.processOAuthCallback();
        this.tokenService.validateToken()
            .subscribe(_ => console.log(localStorage.getItem('accessToken')));
        ;
    }
}

import { Response } from '@angular/http';
import { User } from '../models/User';
import { Observable } from 'rxjs/Rx';
import { StackedService } from './StackedService';

export class StackedUserService extends StackedService {

    login(redirectTo: string): void {
        localStorage.setItem('redirectTo', redirectTo);
        this.tokenService.signInOAuth('slack');
    }

    logout(): void {
        this.tokenService.signOut()
            .subscribe(_ => {
                localStorage.removeItem('redirectTo');
                location.href = '/';
            })
        ;
    }
};

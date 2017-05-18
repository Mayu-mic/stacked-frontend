import { Response } from '@angular/http';
import { User } from '../models/User';
import { Observable } from 'rxjs/Rx';
import { StackedService } from './StackedService';

export class StackedUserService extends StackedService {
    login(): void {
        this.tokenService.signInOAuth('slack');
    }

    logout(): void {
        this.tokenService.signOut()
            .subscribe(_ => {
                location.href = '/';
            })
        ;
    }
};

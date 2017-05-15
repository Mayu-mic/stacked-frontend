import { Response } from '@angular/http';
import { User } from '../models/User';
import { Observable } from 'rxjs/Rx';
import { StackedService } from './StackedService';

export class StackedUserService extends StackedService {
    login(): Observable<any> {
        return this.tokenService.signInOAuth('slack');
    }

    logout(): Observable<Response> {
        return this.tokenService.signOut();
    }
};

import { Observable } from 'rxjs/Rx';
import { StackedService } from './StackedService';

export class StackedUserService extends StackedService {
    login(): Observable<any> {
        return this.tokenService.signInOAuth('slack');
    }

    check(): Observable<any> {
        return Observable.of(this.tokenService.currentUserData);
    }
};

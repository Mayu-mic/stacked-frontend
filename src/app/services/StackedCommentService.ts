import { Observable } from 'rxjs/Rx';
import { StackedService } from './StackedService';
import { Comment } from '../models/Comment';

export class StackedCommentService extends StackedService {

    getComments(stackId: number): Observable<Comment[]> {
        const url = `stacks/${stackId}/comments`;
        return this.get<Comment[]>(url);
    }

    postComment(stackId: number, body: string): Observable<Comment> {
        const url = `stacks/${stackId}/comments`;
        return this.post<Comment>(url, {
            comment: {
                stack_id: stackId,
                body
            }
        });
    }

    deleteComment(commentId: number): Observable<Comment> {
        const url = `comments/${commentId}`;
        return this.delete<Comment>(url);
    }

    addStar(commentId: number): Observable<Comment> {
        const url = `comments/${commentId}`;
        return this.post<Comment>(url, {});
    }
}

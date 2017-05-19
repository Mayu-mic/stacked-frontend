import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface CommentFormValue {
    body: string;
    stackId: number;
}

@Component({
    selector: 'comment-form-component',
    template: require('./CommentForm.component.html')
})
export class CommentFormComponent {
    @Output() handleSubmit: EventEmitter<CommentFormValue> = new EventEmitter(false);
    @Input() stackId: number;
    @Input() canCreate: boolean;

    commentForm: FormGroup;

    constructor(fb: FormBuilder) {
        this.commentForm = fb.group({
            body: ['', Validators.required],
        });
    }

    submit(event: Event) {
        event.preventDefault();
        if (this.commentForm.valid) {
            const value = {
                ...this.commentForm.value,
                stackId: this.stackId,
            };
            this.handleSubmit.emit(value);
            this.commentForm.reset({
                body: ''
            });
        }
    }

    canSubmit(): boolean {
        return this.canCreate && this.commentForm.value.body.length > 0;
    }
}

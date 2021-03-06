import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Stack } from '../models/Stack';
import { Observable } from 'rxjs/Rx';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface StackCreateFormValue {
    title: string;
    note: string;
    listId: number;
}

@Component({
    selector: 'stack-create-form-component',
    template: require('./StackCreateForm.component.html'),
})
export class StackCreateFormComponent {
    @Output() handleSubmit: EventEmitter<StackCreateFormValue> = new EventEmitter(false);
    @Output() handleExpand: EventEmitter<any> = new EventEmitter(false);
    @Input() expanded: boolean;
    @Input() listId: number;
    @Input() canCreate: boolean = true;

    stackForm: FormGroup;

    constructor(fb: FormBuilder) {
        this.stackForm = fb.group({
            title: ['', Validators.required],
            note: [''],
        });
    }

    submit(event: Event) {
        event.preventDefault();
        if (this.stackForm.valid) {
            const value = {
                ...this.stackForm.value,
                listId: this.listId,
            };
            this.handleSubmit.emit(value);
            this.stackForm.reset({
                title: '',
                note: ''
            });
        }
    }

    expand() {
        this.handleExpand.emit();
    }

    canSubmit(): boolean {
        return this.canCreate && this.stackForm.value.title.length > 0;
    }
}

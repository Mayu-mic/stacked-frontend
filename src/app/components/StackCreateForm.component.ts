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
    @Input() listId: number;

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
}

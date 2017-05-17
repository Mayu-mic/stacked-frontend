import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Stack } from '../models/Stack';
import { Observable } from 'rxjs/Rx';
import { Component, EventEmitter, Output } from '@angular/core';

export interface StackFormValue {
    title: string;
    note: string;
    listId: number;
}

@Component({
    selector: 'stack-form-component',
    template: require('./StackForm.component.html'),
})
export class StackFormComponent {
    @Output() handleSubmit: EventEmitter<StackFormValue> = new EventEmitter(false);

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
                listId: 1,
            };
            this.handleSubmit.emit(value);
            this.stackForm.reset({
                title: '',
                note: ''
            });
        }
    }
}
